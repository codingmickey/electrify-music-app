const express = require('express');
//
const mongoose = require('mongoose');

// Express setting
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Mongoose Code
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/electrifyUserDB');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String,
  role: String, // admin, user, artist
});

const User = mongoose.model('User', userSchema);

app.post('/register', (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userMobileNumber = req.body.mobileNumber;
  const userRole = req.body.role;
  const userPassword = req.body.password;

  const newUser = new User({
    name: userName,
    email: userEmail,
    mobileNumber: userMobileNumber,
    role: userRole,
  });
  newUser.save();
  res.send('User Saved!');
});

app.post('/login', (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
});

app.get('/api', (req, res) => {
  // res.sendFile(__dirname + '/public/html/login.html');
  res.json({ message: 'Hello Everyone, this is from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
