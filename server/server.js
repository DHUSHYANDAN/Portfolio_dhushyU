const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'maharaju1212@gmail.com', 
    pass: process.env.PASSWORD, 
  },
});

// API Endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'maharaju1212@gmail.com', 
    to: 'dhushyandan302002@gmail.com', 
    subject: `Portfolio Contact Form: Message from ${name} `,
    text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
