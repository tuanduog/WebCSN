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
    methods: ["POST, GET"],
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

          res.cookie('token', token, { httpOnly: true, secure: true });

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


// POST endpoint: Add a product
app.post('/products', verifyUser, (req, res) => {
  console.log('Request body received for adding product:', req.body);

  const { anhsp, tensp, tengv, gia } = req.body;

  // Check for missing fields
  if (!anhsp || !tensp || !tengv || !gia) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({ Error: "Missing required fields", MissingFields: { anhsp, tensp, tengv, gia } });
  }

  const sql = "INSERT INTO products (anhsp, tensp, tengv, gia, userid) VALUES (?, ?, ?, ?, ?)";
  const values = [anhsp, tensp, tengv, gia, req.userid];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database error while adding product:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    console.log('Product successfully added with ID:', result.insertId);
    res.json({ Status: "success", Message: "Product added successfully", ProductID: result.insertId });
  });
});

// GET endpoint: Retrieve all products for a user
// Endpoint GET /products
app.get('/products', verifyUser, (req, res) => {
  console.log('UserID:', req.userid); // Kiểm tra UserID đã lấy từ middleware

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


app.listen(8081, ()=> {
  console.log("Server running")
})
