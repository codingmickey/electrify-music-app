const express = require('express');

const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');

// Express setting
const app = express();

// Using middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/auth', authRoutes);

// Connect to monogodb
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/electrifyUserDB', () => {
    console.log('Connect to mongodb');
  });
}

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/public/html/login.html');
  res.json({ message: 'Hello Everyone, this is from the server!' });
});

const PORT = process.env.PORT || 3001;

// Listening on the given PORT
app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
