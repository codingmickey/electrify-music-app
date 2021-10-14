const bcrypt = require('bcrypt');
const User = require('../models/user-model');

const { createToken, maxTime } = require('../config/jwtConfig');

// Register User
exports.register = (req, res) => {
  const { name, email, mobileNumber, role, password } = req.body;

  try {
    // Find user in db and save if not present
    User.findOne({ email: email }, async (err, user) => {
      if (err) throw err;
      if (user)
        res.status(400).json({ msg: 'This email is already registered' });
      if (!user) {
        const newUser = new User({ name, email, mobileNumber, role, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        // Sending the jwt token in a cookie🍪
        const token = createToken(newUser._id);
        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: maxTime * 1000,
        });
        res.status(201).json({ user: newUser._id });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Checking of the email id
  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: 'Incorrect Email ID' });

  // Checking of the password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.json({ msg: 'Incorrect Password' });

  // Sending the jwt token in a cookie🍪
  const token = createToken(user._id);
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: maxTime * 1000,
  });
  res.status(201).json({ msg: 'Login Successfull' });
};
