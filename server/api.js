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
      req.userid = decoded.userid;  // Attach userid to the request
      console.log("Decoded userid:", req.userid);  // Log for verification
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
      return res.json({ Error: "Login error in server" });
    } 
    if (data.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if (err) return res.json({ Error: "Password compare fail" });
        if (response) {
          const name = data[0].username;
          const userid = data[0].userid;
          const token = jwt.sign({ name, userid }, "jwt-secret-key", { expiresIn: '1d' });  // Include userid in the token

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

<<<<<<< HEAD

app.post('/products', verifyUser, (req, res) => {
  if (!req.body.anhsp || !req.body.tensp || !req.body.gia) {
    return res.status(400).json({ Error: "Missing required fields" });
  }

  const sql = "INSERT INTO products (`anhsp`, `tensp`, `gia`, `userid`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.anhsp,
    req.body.tensp,
    req.body.gia,
    req.userid  // Assuming req.userid is set by verifyUser
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.json({ Error: "Database error", Details: err.message });
    }
    res.json({ Status: "Product added successfully", ProductID: result.insertId });
  });
});





app.listen(8081, ()=> {
=======
app.listen(8801, ()=> {
>>>>>>> fd19f7ed75f877b0e406336e1500582c82234540
  console.log("Server running")
})
