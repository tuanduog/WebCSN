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
  database: 'bankh',  // Database name
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
// kiểm tra user and email đã có chưa
app.post('/register/checkUser', (req, res) => {
  const { email, username } = req.body;

  const checkUserSql = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkUserSql, [email, username], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ Status: "error", Message: "Database error" });
    }

    let response = {
      email: { exists: false },
      username: { exists: false }
    };

    result.forEach(user => {
      if (user.username === username) {
        response.username.exists = true;
      }
      if (user.email === email) {
        response.email.exists = true;
      }
    });

    return res.json(response); 
  });
});

app.post('/user/change-password', verifyUser, (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.userid;

  // Password validation regex
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/;

  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({
      Error:
        "Mật khẩu mới phải có ít nhất 8 ký tự, chứa ít nhất 1 ký tự đặc biệt và 1 số.",
    });
  }


  const sql = "SELECT password FROM users WHERE userid = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ Error: "Người dùng không tồn tại" });
    }

    const hashedPassword = results[0].password;

    // Compare current password with the hashed password in the database
    bcrypt.compare(oldPassword, hashedPassword, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ Error: "Lỗi xác thực mật khẩu" });
      }

      if (!isMatch) {
        return res.status(400).json({ Error: "Mật khẩu hiện tại không chính xác" });
      }

      // Hash the new password
      bcrypt.hash(newPassword, 10, (err, hashedNewPassword) => {
        if (err) {
          return res.status(500).json({ Error: "Lỗi mã hóa mật khẩu mới", Details: err });
        }

        const updateSql = "UPDATE users SET password = ? WHERE userid = ?";
        db.query(updateSql, [hashedNewPassword, userId], (err, result) => {
          if (err) {
            return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err });
          }

          if (result.affectedRows === 0) {
            return res.status(404).json({ Error: "Không tìm thấy người dùng để cập nhật" });
          }

          res.json({ Status: "Success", Message: "Mật khẩu đã được thay đổi thành công" });
        });
      });
    });
  });
});

app.put('/user/update-info', verifyUser, (req, res) => {
  const { hoten, sodt, facebookLink } = req.body;  
  const userId = req.userid; 

  if (!hoten || !sodt || !facebookLink) {
    return res.status(400).json({ Error: "Full name (hoten), phone number (sodt), and Facebook link are required" });
  }
 
  const getUserSql = "SELECT email FROM users WHERE userid = ?";
  
  db.query(getUserSql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ Error: "User not found" });
    }

    const email = results[0].email;  

    const updateSql = "UPDATE users SET hoten = ?, sodt = ?, flink = ? WHERE userid = ?";

    db.query(updateSql, [hoten, sodt, facebookLink, userId], (err, result) => {
      if (err) {
        return res.status(500).json({ Error: "Database error", Details: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ Error: "User not found" });
      }
      res.json({ Status: "Success", Message: "Cập nhật thông tin thành công!"});
    });
  });
});



// POST endpoint
app.post('/products', verifyUser, (req, res) => {
  console.log('Request body received for adding product:', req.body);

  const { anhsp, tensp, tengv, soluong, gia, lop, mon } = req.body;

  if (!anhsp || !tensp || !tengv || !soluong || !gia || !lop || !mon) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({ Error: "Missing required fields", MissingFields: { anhsp, tensp, tengv, soluong, gia, lop, mon } });
  }

  // check để tăng sl sản phẩm
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
      // Nếu chưa có sp thì add mới
      const sql = "INSERT INTO products (anhsp, tensp, tengv, soluong, gia, lop, mon, userid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [anhsp, tensp, tengv, soluong, gia, lop, mon, req.userid];

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

//Post endpoint cua My course:
app.post('/mycourse', verifyUser, (req, res) => {
  console.log('Request body received for adding product:', req.body);

  const { anhsp, tensp, tengv, soluong, gia, lop, mon } = req.body;

  if (!anhsp || !tensp || !tengv || !soluong || !gia || !lop || !mon) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({ Error: "Missing required fields", MissingFields: { anhsp, tensp, tengv, soluong, gia, lop, mon } });
  }

  // check để tăng sl sản phẩm
  const checkProductSql = "SELECT * FROM mycourse WHERE tensp = ? AND userid = ?";
  db.query(checkProductSql, [tensp, req.userid], (err, result) => {
    if (err) {
      console.error('Database error while checking product:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    if (result.length > 0) {
      const newQuantity = result[0].soluong + soluong;
      const updateQuantitySql = "UPDATE mycourse SET soluong = ? WHERE tensp = ? AND userid = ?";
      db.query(updateQuantitySql, [newQuantity, tensp, req.userid], (err, updateResult) => {
        if (err) {
          console.error('Database error while updating quantity:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Product quantity updated successfully.');
        res.json({ Status: "success", Message: "Product quantity updated successfully", ProductID: result[0].id });
      });
    } else {
      // Nếu chưa có sp thì add mới
      const sql = "INSERT INTO mycourse (anhsp, tensp, tengv, soluong, gia, lop, mon, userid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [anhsp, tensp, tengv, soluong, gia, lop, mon, req.userid];

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



//get endpoint of mycourse
app.get('/mycourse', verifyUser, (req, res) => {
  console.log('UserID:', req.userid); 

  const userId = req.userid;

  const sql = "SELECT * FROM mycourse WHERE userid = ?";
  
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
  const { productid } = req.params;
  const { userid } = req.body;
  
  if (isNaN(productid)) {
    return res.status(400).json({ Error: "Invalid product ID" });
  }

  const sql = "DELETE FROM products WHERE productid = ? AND userid = ?";

  db.query(sql, [productid, userid], (err, result) => {
    if (err) {
      console.error('Database error during product deletion:', err.message);
      return res.status(500).json({ Status: "error", Message: "Database error", Details: err.message });
    }

    if (result.affectedRows === 0) {
  
      console.log(`No rows affected. Product ID: ${productid}, User ID: ${userid}`);

      return res.status(404).json({ Status: "error", Message: "Không tìm thấy sản phẩm hoặc sản phẩm" });
    }

    // If deletion is successful
    res.json({ Status: "success", Message: "Xóa sản phẩm thành công" });
  });
});




// Update product quantity
app.put('/products/:productid', verifyUser, (req, res) => {

  const { productid } = req.params;
  const { soluong } = req.body;

  if (soluong < 0) {
    return res.status(400).json({ Error: 'Quantity cannot be negative' });
  }

  const sql = "UPDATE products SET soluong = ? WHERE productid = ?";
  db.query(sql, [soluong, productid], (err, result) => {
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
  const { productid } = req.params;
  const { userid } = req.body;
  
  if (isNaN(productid)) {
    return res.status(400).json({ Error: "Invalid product ID" });
  }

  const sql = "DELETE FROM products WHERE productid = ? AND userid = ?";

  db.query(sql, [productid, userid], (err, result) => {
    if (err) {
      console.error('Database error during product deletion:', err.message);
      return res.status(500).json({ Status: "error", Message: "Database error", Details: err.message });
    }

    if (result.affectedRows === 0) {
  
      console.log(`No rows affected. Product ID: ${productid}, User ID: ${userid}`);

      return res.status(404).json({ Status: "error", Message: "Không tìm thấy sản phẩm hoặc sản phẩm" });
    }

    // If deletion is successful
    res.json({ Status: "success", Message: "Xóa sản phẩm thành công" });
  });
});

// Route to add a book or update the quantity if it already exists
app.post('/books', verifyUser, (req, res) => {
  console.log('Request body received for adding book:', req.body);

  const { anhsach, tensach, tacgia, soluong, gia } = req.body;

  // Validate input fields
  if (!anhsach || !tensach || !tacgia || !soluong || !gia) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({
      Error: "Missing required fields",
      MissingFields: { anhsach: !!anhsach, tensach: !!tensach, tacgia: !!tacgia, soluong: !!soluong, gia: !!gia }
    });
  }

  const userId = req.userid;

  const checkBookSql = "SELECT * FROM sach WHERE tensach = ? AND userid = ?";
  db.query(checkBookSql, [tensach, userId], (err, result) => {
    if (err) {
      console.error('Database error while checking product:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    if (result.length > 0) {

      const newQuantity = result[0].soluong + parseInt(soluong, 10);
      const updateQuantitySql = "UPDATE sach SET soluong = ? WHERE tensach = ? AND userid = ?";
      db.query(updateQuantitySql, [newQuantity, tensach, userId], (err) => {
        if (err) {
          console.error('Database error while updating quantity:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Book quantity updated successfully.');
        return res.json({
          Status: "success",
          Message: "Book quantity updated successfully",
          BookID: result[0].id,
        });
      });
    } else {
      // Insert new book if it doesn't exist
      const sql = "INSERT INTO sach (anhsach, tensach, tacgia, soluong, gia, userid) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [anhsach, tensach, tacgia, soluong, gia, userId];

      db.query(sql, values, (err, insertResult) => {
        if (err) {
          console.error('Database error while adding book:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Book successfully added with ID:', insertResult.insertId);
        return res.json({
          Status: "success",
          Message: "Book added successfully",
          BookID: insertResult.insertId,
        });
      });
    }
  });
});
//post mybook
app.post('/mybooks', verifyUser, (req, res) => {
  console.log('Request body received for adding book:', req.body);

  const { anhsach, tensach, tacgia, soluong, gia } = req.body;

  // Validate input fields
  if (!anhsach || !tensach || !tacgia || !soluong || !gia) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({
      Error: "Missing required fields",
      MissingFields: { anhsach: !!anhsach, tensach: !!tensach, tacgia: !!tacgia, soluong: !!soluong, gia: !!gia }
    });
  }

  const userId = req.userid;

  const checkBookSql = "SELECT * FROM mybooks WHERE tensach = ? AND userid = ?";
  db.query(checkBookSql, [tensach, userId], (err, result) => {
    if (err) {
      console.error('Database error while checking product:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    if (result.length > 0) {

      const newQuantity = result[0].soluong + parseInt(soluong, 10);
      const updateQuantitySql = "UPDATE mybooks SET soluong = ? WHERE tensach = ? AND userid = ?";
      db.query(updateQuantitySql, [newQuantity, tensach, userId], (err) => {
        if (err) {
          console.error('Database error while updating quantity:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Book quantity updated successfully.');
        return res.json({
          Status: "success",
          Message: "Book quantity updated successfully",
          BookID: result[0].id,
        });
      });
    } else {
      // Insert new book if it doesn't exist
      const sql = "INSERT INTO mybooks (anhsach, tensach, tacgia, soluong, gia, userid) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [anhsach, tensach, tacgia, soluong, gia, userId];

      db.query(sql, values, (err, insertResult) => {
        if (err) {
          console.error('Database error while adding book:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Book successfully added with ID:', insertResult.insertId);
        return res.json({
          Status: "success",
          Message: "Book added successfully",
          BookID: insertResult.insertId,
        });
      });
    }
  });
});
app.get('/users',verifyUser, (req,res) => {
  console.log('userid: ', req.userid);
  const sql = "select * from users where userid = ?";
  const uid = req.userid;
  db.query(sql,[uid],(err,results)=>{
    if (err) {
      console.error('Lỗi cơ sở dữ liệu:', err.message);
      return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ Status: "Không tìm thấy user nào", Users: [] });
    }

    res.json({ Status: "success", Users: results });
  });
});

app.get('/books', verifyUser, (req, res) => {
  console.log('UserID:', req.userid); 

  const userId = req.userid;

  const sql = "SELECT * FROM sach WHERE userid = ?";
  
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Lỗi cơ sở dữ liệu:', err.message);
      return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ Status: "Không tìm thấy sản phẩm nào", Books: [] });
    }

    res.json({ Status: "success", Books: results });
  });
});

app.get('/mybooks', verifyUser, (req, res) => {
  console.log('UserID:', req.userid); 

  const userId = req.userid;

  const sql = "SELECT * FROM mybooks WHERE userid = ?";
  
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Lỗi cơ sở dữ liệu:', err.message);
      return res.status(500).json({ Error: "Lỗi cơ sở dữ liệu", Details: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ Status: "Không tìm thấy sản phẩm nào", Books: [] });
    }

    res.json({ Status: "success", Books: results });
  });
});

app.put('/books/:sachid', verifyUser, (req, res) => {

  const { sachid } = req.params;
  const { soluong } = req.body;

  if (soluong < 0) {
    return res.status(400).json({ Error: 'Quantity cannot be negative' });
  }

  const sql = "UPDATE sach SET soluong = ? WHERE sachid = ?";
  db.query(sql, [soluong, sachid], (err, result) => {
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

app.delete('/books/:sachid', verifyUser, (req, res) => {
  const { sachid } = req.params;
  const { userid } = req.body;
  
  if (isNaN(sachid)) {
    return res.status(400).json({ Error: "Invalid product ID" });
  }

  const sql = "DELETE FROM sach WHERE sachid = ? AND userid = ?";

  db.query(sql, [sachid, userid], (err, result) => {
    if (err) {
      console.error('Database error during product deletion:', err.message);
      
      return res.status(500).json({ Status: "error", Message: "Database error", Details: err.message });
    }

    if (result.affectedRows === 0) {
  
      console.log(`No rows affected. Product ID: ${sachid}, User ID: ${userid}`);

      return res.status(404).json({ Status: "error", Message: "Không tìm thấy sản phẩm hoặc sản phẩm" });
    }

    // If deletion is successful
    res.json({ Status: "success", Message: "Xóa sản phẩm thành công" });
  });
});
// pót cmt
app.post('/comments', verifyUser, (req, res) => {
  console.log('Request body received for adding comment:', req.body);

  const { cmttext, time } = req.body;

  if (!cmttext || !time) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({
      Error: "Missing required fields",
      MissingFields: { cmttext: !!cmttext, time: !!time }
    });
  }

  const userId = req.userid;
  const productId = req.productid;

  const checkCommentSql = "SELECT * FROM comments WHERE cmttext = ? AND userid = ? AND productid = ?";
  db.query(checkCommentSql, [cmttext, userId, productId], (err, result) => {
    if (err) {
      console.error('Database error while checking comment:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    
      const sql = "INSERT INTO comments (cmttext, time, productid, userid) VALUES (?, ?, ?, ?)";
      const values = [cmttext, time, productId, userId];

      db.query(sql, values, (err, insertResult) => {
        if (err) {
          console.error('Database error while adding comment:', err.message);
          return res.status(500).json({ Error: "Database error", Details: err.message });
        }

        console.log('Comment successfully added with ID:', insertResult.insertId);
        return res.json({
          Status: "success",
          Message: "Comment added successfully",
          BookID: insertResult.insertId,
        });
      });
  });
});

app.post('/register/checkUser', (req, res) => {
  const { email, username } = req.body;

  const checkUserSql = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkUserSql, [email, username], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ Status: "error", Message: "Database error" });
    }

    let response = {
      email: { exists: false },
      username: { exists: false }
    };

    result.forEach(user => {
      if (user.username === username) {
        response.username.exists = true;
      }
      if (user.email === email) {
        response.email.exists = true;
      }
    });

    return res.json(response); 
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
app.post('/checkout', verifyUser, (req, res) => {
  console.log('Request body received for adding checkout:', req.body);

  // Destructure request body
  const { hodem, ten, diachi, sodt, tongtien } = req.body;

  // Validate required fields
  if (!hodem || !ten || !diachi || !sodt || !tongtien) {
    console.error('Missing fields:', req.body);
    return res.status(400).json({
      Error: "Missing required fields",
      MissingFields: { hodem, ten, diachi, sodt, tongtien, userid},
    });
  }

  // SQL to check if checkout entry exists
  const checkCheckoutSql = "SELECT * FROM thanhtoan WHERE sodt = ? AND userid = ?";
  db.query(checkCheckoutSql, [sodt, req.userid, productid], (err, result) => {
    if (err) {
      console.error('Database error while checking thanh toan:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }

    if (result.length > 0) {
      return res.status(400).json({
        Status: "error",
        Message: "Checkout already exists",
        ExistingCheckout: result[0],
      });
    }

    // SQL to insert new checkout entry
    const insertSql =
      "INSERT INTO thanhtoan (hodem, ten, diachi, sodt, tongtien, userid, productid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [hodem, ten, diachi, sodt, tongtien, req.userid, productid, dhid];

    db.query(insertSql, values, (err, insertResult) => {
      if (err) {
        console.error('Database error while adding product:', err.message);
        return res.status(500).json({ Error: "Database error", Details: err.message });
      }

      console.log('Checkout successfully added with ID:', insertResult.insertId);
      res.json({
        Status: "success",
        Message: "Checkout added successfully",
        CheckoutId: insertResult.insertId,
      });
    });
  });
});

app.get('/checkout', verifyUser, (req, res) => {
  const { userid } = req;
  const fetchCheckoutSql = "SELECT * FROM thanhtoan WHERE userid = ?";
  db.query(fetchCheckoutSql, [userid], (err, result) => {
    if (err) {
      console.error('Database error while fetching checkouts:', err.message);
      return res.status(500).json({ Error: "Database error", Details: err.message });
    }
    res.json({ Status: "success", Checkouts: result });
  });
});


app.listen(8081, ()=> {
  console.log("Server running")
})
