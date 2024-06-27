const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB configuration
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// User model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
}));

// Membership Application model
const MembershipApplication = mongoose.model('MembershipApplication', new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
}));

// Registration route
app.post('/api/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, phone, password: hashedPassword });
    const result = await newUser.save();
    res.status(201).send({ message: 'User registered successfully', id: result._id });
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong. Please try again.' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong. Please try again.' });
  }
});

// Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

// Protected route example
app.get('/api/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).send(user);
});

// Endpoint för att hantera medlemskapsansökningar
app.post('/api/bli-medlem', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newApplication = new MembershipApplication({ name, email, phone });
    const result = await newApplication.save();
    res.status(201).send({ message: 'Ansökan mottagen', id: result._id });
  } catch (error) {
    res.status(500).send({ error: 'Något gick fel. Försök igen.' });
  }
});

// Nodemailer transporter för kontaktformulär
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint för att hantera kontaktformulär
app.post('/api/kontakta-oss', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: 'Kontaktformulär Meddelande',
    text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nMeddelande: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Meddelandet skickades framgångsrikt' });
  } catch (error) {
    res.status(500).send({ error: 'Något gick fel. Försök igen.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
