const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String,
  role: String, // admin, user, artist
  googleId: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
