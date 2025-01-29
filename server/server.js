const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); 

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maharaju1212@gmail.com', 
    pass: process.env.PASSWORD, 
  },
});

// API Endpoint - Send Email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'maharaju1212@gmail.com', 
    to: 'dhushyandan302002@gmail.com', 
    subject: `Portfolio Contact: Message from ${name}`,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});

// Storage setup for resume uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, 'resume.pdf'); 
  }
});
const upload = multer({ storage });

// Upload Resume API
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Resume uploaded successfully!' });
});

// Serve Resume API
app.get('/Dhushyu_resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'uploads', 'resume.pdf'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
