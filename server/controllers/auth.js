const bcrypt = require('bcrypt');
const User = require('../models/user-model');
const jwt = require('jsonwebtoken');

const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

const maxTime = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    // Time in seconds
    expiresIn: maxTime,
  });
};

// Register User
exports.register = (req, res) => {
  const { name, email, mobileNumber, role, password } = req.body;

  try {
    // Find user in db and save if not present
    User.findOne({ email: email }, async (err, user) => {
      if (err) throw err;
      if (user) res.json({ msg: 'This email is already registered' });
      if (!user) {
        const newUser = new User({ name, email, mobileNumber, role, password });

        try {
          const { error } = await registerSchema.validateAsync({
            name,
            password,
            email,
          });
          if (error) {
            res.status(400).json(error.details[0]);
            return;
          } else {
            newUser.password = await bcrypt.hash(password, 10);
            await newUser.save();
            // Sending the jwt token in a cookie🍪
            const token = createToken(newUser._id);
            res.cookie('jwt', token, {
              httpOnly: true,
              maxAge: maxTime * 1000,
            });
            res.json({ msg: 'New user registered successfully' });
          }
        } catch (error) {
          res.status(500).send(error.details[0].message);
        }
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

  // Sending the jwt token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    // Time in seconds
    expiresIn: maxTime,
  });
  res.header('auth-token', token).send(token);
};
