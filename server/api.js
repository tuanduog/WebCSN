import express, { response } from "express";
import cors from "cors";
import mysql from 'mysql2';
import 'dotenv/config'; 
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const salt = 10;
const app = express()
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
  }
));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bankh"
})
app.use(cookieParser());

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ Error: "Token not provided" });
  }

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.status(403).json({ Error: "Token verification failed" });
    } else {
      req.name = decoded.name;
      req.userid = decoded.userid; 
      console.log("Decoded userid:", req.userid);  // kiểm tra userid 
      next();
    }
  });
};


app.get('/', verifyUser, (req, res) => {
  return res.json({Status: "Success", name: req.name});
})
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status : "Success"});
})

app.post('/register/register', (req, res) => {
  const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";

  const saltRounds = 10; 
  const password = req.body.password.toString();
  // Hash the password
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });

    const values = [
      req.body.name, 
      req.body.email,
      hash // Use the hashed password here
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Database error", Details: err });
      }
      res.json({ Status: "Success" });
    });
  });
});

app.post('/login/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [req.body.name], (err, data) => {
    if (err) {
      return res.json({ Error: "Lỗi server đăng nhập" });
    } 
    if (data.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if (err) return res.json({ Error: "Lỗi password" });
        if (response) {
          const name = data[0].username;
          const userid = data[0].userid;
          const token = jwt.sign({ name, userid }, "jwt-secret-key", { expiresIn: '1d' }); 

          res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
 
          return res.json({ Status: "Đăng nhập thành công" });
        } else {
          return res.json({ Error: "Sai mật khẩu" });
        }
      });
    } else {
      return res.json({ Error: "Tài khoản không tồn tại" });
    }
  });
});


// POST endpoint
app.post('/products', verifyUser, (req, res) => {
  console.log('Request body received for adding product:', req.body);

  const { anhsp, tensp, tengv, soluong, gia } = req.body;

  if (!anhsp || !tensp || !tengv || !soluong || !gia) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({ Error: "Missing required fields", MissingFields: { anhsp, tensp, tengv, soluong, gia } });
  }

  // Check to increase quantity based on tensp and userid
  const checkProductSql = "SELECT * FROM products WHERE tensp = ? AND userid = ?";
  db.query(checkProductSql, [tensp, req.userid], (err, result) => {
    if (err) {
      console.error('Database error while checking product:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    if (result.length > 0) {
      const newQuantity = result[0].soluong + soluong;
      const updateQuantitySql = "UPDATE products SET soluong = ? WHERE tensp = ? AND userid = ?";
      db.query(updateQuantitySql, [newQuantity, tensp, req.userid], (err, updateResult) => {
        if (err) {
          console.error('Database error while updating quantity:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Product quantity updated successfully.');
        res.json({ Status: "success", Message: "Product quantity updated successfully", ProductID: result[0].id });
      });
    } else {
      // If no product exists, add a new product
      const sql = "INSERT INTO products (anhsp, tensp, tengv, soluong, gia, userid) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [anhsp, tensp, tengv, soluong, gia, req.userid];

      db.query(sql, values, (err, insertResult) => {
        if (err) {
          console.error('Database error while adding product:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Product successfully added with ID:', insertResult.insertId);
        res.json({ Status: "success", Message: "Product added successfully", ProductID: insertResult.insertId });
      });
    }
  });
});


// Update product quantity
app.put('/products/:productId', verifyUser, (req, res) => {
  const { productId } = req.params;
  const { soluong } = req.body;

  if (soluong < 0) {
    return res.status(400).json({ Error: 'Quantity cannot be negative' });
  }

  const sql = "UPDATE products SET soluong = ? WHERE productId = ?";
  db.query(sql, [soluong, productId], (err, result) => {
    if (err) {
      console.error('Database error while updating quantity:', err.message);
      return res.status(500).json({ Error: 'Database error', Details: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ Error: 'Product not found' });
    }

    console.log('Product quantity updated successfully');
    res.json({ Status: 'success', Message: 'Product quantity updated successfully' });
  });
});



// get  endpoint
app.get('/products', verifyUser, (req, res) => {
  console.log('UserID:', req.userid); 

  const userId = req.userid;

  const sql = "SELECT * FROM products WHERE userid = ?";
  
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Lỗi cơ sở dữ liệu:', err.message);
      return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ Status: "Không tìm thấy sản phẩm nào", Products: [] });
    }

    res.json({ Status: "success", Products: results });
  });
});

app.delete('/products/:productid', verifyUser, (req, res) => {
  console.log('URL Params:', req.params);
  const productId = parseInt(req.params.productid, 10);
  const userId = req.userid;
  
  if (isNaN(productId)) {
    return res.status(400).json({ Error: "Invalid product ID" });
  }

  const sql = "DELETE FROM products WHERE productid = ? AND userid = ?";

  db.query(sql, [productId, userId], (err, result) => {
    if (err) {
      console.error('Database error during product deletion:', err.message);
      return res.status(500).json({ Status: "error", Message: "Database error", Details: err.message });
    }

    if (result.affectedRows === 0) {
  
      console.log(`No rows affected. Product ID: ${productId}, User ID: ${userId}`);

      return res.status(404).json({ Status: "error", Message: "Không tìm thấy sản phẩm hoặc sản phẩm" });
    }

    // If deletion is successful
    res.json({ Status: "success", Message: "Xóa sản phẩm thành công" });
  });
});





app.listen(8081, ()=> {
  console.log("Server running")
})
