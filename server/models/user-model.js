const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobileNumber: String,
  role: String, // admin, user, artist
  googleId: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
