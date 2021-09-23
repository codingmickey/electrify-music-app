const router = require('express').Router();
const passport = require('passport');

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

router.get('/login', (req, res) => {
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
router.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.send('Hurray surpassed the authentication');
  }
);

module.exports = router;
