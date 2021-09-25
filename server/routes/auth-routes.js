const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// auth login
router.get('/register', (req, res) => {
  // const userName = req.body.name;
  // const userEmail = req.body.email;
  // const userMobileNumber = req.body.mobileNumber;
  // const userRole = req.body.role;
  // const userPassword = req.body.password;

  // const newUser = new User({
  //   name: userName,
  //   email: userEmail,
  //   mobileNumber: userMobileNumber,
  //   role: userRole,
  // });
  // newUser.save();
  res.send('User Saved!');
});

router.get('/login', (req, res, next) => {
  // const userEmail = req.body.email;
  // const userPassword = req.body.password;
  console.log('Login Route');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
});

// login with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// callback route for google to redirect
router.get('/google/redirect', (req, res) => {
  passport.authenticate(
    'google',
    {
      session: false,
      failureRedirect: '/auth/login',
    },
    (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user,
        });
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }

        // Generate a signed jwt token with contents of user object

        const token = jwt.sign(user, keys.jwt.secret);
        return res.json({ user, token });
      });
    }
  )(req, res);
  res.send('Hurray surpassed the authentication');
});

module.exports = router;
