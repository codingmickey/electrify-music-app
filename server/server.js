require('dotenv').config();

const express = require('express');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Import Routes
const authRoute = require('./routes/user');
const authDashboard = require('./routes/authDashboard');

// Express setting
const app = express();

// Using middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Set up routes
app.use('/user', authRoute);
app.use('/dashboard', authDashboard);

// Connect to monogodb
const db = require('./config/db');
db.connect();

const PORT = process.env.PORT || 3001;

// Listening on the given PORT
app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
