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
          const name = data[0].username; // Fixed to data[0].username instead of data[0].name
          const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
          res.cookie('token', token, { httpOnly: true, secure: true });
          return res.json({ Status: "Đăng nhập thành công" });
        } else return res.json({ Error: "Sai mật khẩu" });
      });
    } else return res.json({ Error: "Tài khoản không tồn tại" });
  });
});

app.listen(8081, ()=> {
  console.log("Server running")
})


// const saltRounds = 10;
// const app = express();

// // Middleware
// app.use(express.json()); 
// app.use(cors({
//   origin: 'http://localhost:5173', // Allow only your frontend origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods if needed
//   credentials: true, // Allow cookies if needed
// }));

// // MySQL Connection
// let db;
// (async () => {
//   db = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "", // Add password if necessary
//     database: "bankh"
//   });
//   console.log("Connected to MySQL database");
// })();

// // Register Route
// app.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Prepare and execute SQL query
//     const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
//     const [result] = await db.execute(sql, [name, email, hashedPassword]);

//     res.json({ message: "User registered successfully", result });
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ error: "Failed to register user" });
//   }
// });

// // Start the server
// app.listen(8081, () => {
//   console.log("Server running on http://localhost:8081");
// });
