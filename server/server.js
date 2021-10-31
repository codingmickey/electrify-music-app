require('dotenv').config();

const express = require('express');

const path = require('path');

// Importing packages
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const passport = require('passport');

// Import Routes
const authRoute = require('./routes/authRoutes');
const musicRoute = require('./routes/song-CRUD');

// Express setting
const app = express();

// Using middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up routes
app.use('/user', authRoute);
app.use('/music', musicRoute);

app.get('/', (req, res) => {
  res.send('Running');
});

// Connect to monogodb
const db = require('./config/db');
db.connect();

// Listening on the given PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
