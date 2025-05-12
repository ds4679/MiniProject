// const express = require('express');
// const bcrypt = require('bcryptjs');
// const mysql = require('mysql');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// app.use(express.json());
// app.use(cors());

// // MySQL database connection setup
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // replace with your MySQL username
//   password: 'Sanjay4679@', // replace with your MySQL password
//   database: 'miniproject' // replace with your database name
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error: ', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // Sign Up Route
// app.post('/api/patients/signup', async (req, res) => {
//   const { email, password, full_name, age, mobile_number, blood_group, address } = req.body;

//   // Check if the email is already registered
//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: 'Database query error' });
//     }

//     if (results.length > 0) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     // Hash the password before storing
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user into the database
//     const query = 'INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
//     db.query(query, [email, hashedPassword, full_name, age, mobile_number, blood_group, address], (err) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error inserting user into the database' });
//       }
//       return res.status(201).json({ message: 'User created successfully' });
//     });
//   });
// });

// // Sign In Route
// app.post('/api/patients/signin', (req, res) => {
//   const { email, password } = req.body;

//   // Retrieve user by email
//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: 'Database query error' });
//     }

//     if (results.length === 0) {
//       return res.status(400).json({ error: 'User not found' });
//     }

//     const user = results[0];

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid password' });
//     }

//     // Return success response (No token, just a simple message)
//     return res.status(200).json({ message: 'Signin successful' });
//   });
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });



// const express = require('express');
// const bcrypt = require('bcryptjs');
// const mysql = require('mysql');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// app.use(express.json());
// app.use(cors());

// // MySQL database connection setup
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Sanjay4679@',
//   database: 'miniproject'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error: ', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // =======================
// // Signup Route
// // =======================
// app.post('/api/patients/signup', async (req, res) => {
//   const { email, password, full_name, age, mobile_number, blood_group, address } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//     if (err) return res.status(500).json({ error: 'Database query error' });

//     if (results.length > 0) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const query = 'INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
//     db.query(query, [email, hashedPassword, full_name, age, mobile_number, blood_group, address], (err) => {
//       if (err) return res.status(500).json({ error: 'Error inserting user into database' });
//       return res.status(201).json({ message: 'User created successfully' });
//     });
//   });
// });

// // =======================
// // Signin Route
// // =======================
// app.post('/api/patients/signin', (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//     if (err) return res.status(500).json({ error: 'Database query error' });
//     if (results.length === 0) return res.status(400).json({ error: 'User not found' });

//     const user = results[0];
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

//     // res.status(200).json({ message: 'Signin successful', id: user.id });
//     res.status(200).json({
//       message: 'Signin successful',
//       id: user.id,
//       email: user.email,
//       full_name: user.full_name,
//       age: user.age,
//       mobile_number: user.mobile_number,
//       blood_group: user.blood_group,
//       address: user.address,
//     });
//   });
// });

// // =======================
// // Get Profile Route
// // =======================
// app.get('/api/profile/:id', (req, res) => {
//   const userId = req.params.id;
//   db.query('SELECT id, email, full_name, age, mobile_number, blood_group, address FROM users WHERE id = ?', [userId], (err, results) => {
//     if (err) return res.status(500).json({ error: 'Database query error' });
//     if (results.length === 0) return res.status(404).json({ error: 'User not found' });

//     res.json(results[0]);
//   });
// });

// // =======================
// // Update Profile Route
// // =======================
// app.put('/api/profile/:id', (req, res) => {
//   const userId = req.params.id;
//   const { full_name, age, mobile_number, blood_group, address } = req.body;

//   const query = `
//     UPDATE users SET full_name = ?, age = ?, mobile_number = ?, blood_group = ?, address = ?
//     WHERE id = ?
//   `;
//   db.query(query, [full_name, age, mobile_number, blood_group, address, userId], (err, result) => {
//     if (err) return res.status(500).json({ error: 'Error updating profile' });

//     res.json({ message: 'Profile updated successfully' });
//   });
// });

// // Start server
// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });


//p11






const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// MySQL database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sanjay4679@',
  database: 'miniproject',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// =======================
// Multer Setup for PDF Upload
// =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder where PDFs will be stored
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + path.extname(file.originalname); // Unique file name
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static('uploads'));

// =======================
// Signup Route
// =======================
app.post('/api/patients/signup', async (req, res) => {
  const { email, password, full_name, age, mobile_number, blood_group, address } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });

    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [email, hashedPassword, full_name, age, mobile_number, blood_group, address], (err) => {
      if (err) return res.status(500).json({ error: 'Error inserting user into database' });
      return res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// =======================
// Signin Route
// =======================
app.post('/api/patients/signin', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    if (results.length === 0) return res.status(400).json({ error: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    res.status(200).json({
      message: 'Signin successful',
      id: user.id,
      email: user.email,
      full_name: user.full_name,
      age: user.age,
      mobile_number: user.mobile_number,
      blood_group: user.blood_group,
      address: user.address,
    });
  });
});

// =======================
// PDF Upload Route
// =======================
app.post('/upload-pdf', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No PDF file uploaded.');
  }

  const fileLink = `/uploads/${req.file.filename}`; // Path to the uploaded PDF

  // Insert file info into the database
  const query = 'INSERT INTO pdfs (file_name, file_link) VALUES (?, ?)';
  db.query(query, [req.file.filename, fileLink], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error saving PDF info to database' });
    res.status(200).json({
      message: 'PDF uploaded successfully',
      fileLink: fileLink,
    });
  });
});

// =======================
// Get Profile Route
// =======================
app.get('/api/profile/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT id, email, full_name, age, mobile_number, blood_group, address FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    res.json(results[0]);
  });
});

// =======================
// Update Profile Route
// =======================
app.put('/api/profile/:id', (req, res) => {
  const userId = req.params.id;
  const { full_name, age, mobile_number, blood_group, address } = req.body;

  const query = `
    UPDATE users SET full_name = ?, age = ?, mobile_number = ?, blood_group = ?, address = ?
    WHERE id = ?
  `;
  db.query(query, [full_name, age, mobile_number, blood_group, address, userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error updating profile' });

    res.json({ message: 'Profile updated successfully' });
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
