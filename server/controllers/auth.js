const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user-model');

const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

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
          console.log(`This is the error`);
          const { error } = await registerSchema.validateAsync({
            name,
            password,
            email,
          });
          console.log(error);

          if (error) {
            console.log(error);
            res.status(400).json(error.details[0]);
            return;
          } else {
            newUser.password = await bcrypt.hash(password, 10);
            await newUser.save();
            res.json({ msg: 'New user registered successfully' });
          }
        } catch (error) {
          console.log(`this is the ${error}`);
          -res.status(500).send(error.details[0].message);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// const userName = req.body.name;
// const userEmail = req.body.email;
// const userMobileNumber = req.body.mobileNumber;
// const userRole = req.body.role;
// const userPassword = req.body.password;

// const newUsesr = new User({
//   name: userName,
//   email: userEmail,
//   mobileNumber: userMobileNumber,
//   role: userRole,
// });
// newUser.save();
