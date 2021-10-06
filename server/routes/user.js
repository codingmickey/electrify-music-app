const express = require('express');

const oauth = require('../controllers/oauth');
const auth = require('../controllers/auth');

const router = express.Router();
router.use(express.json());

// Home route
router.get('/api', (req, res) => {
  res.send('Home Page');
  // res.json({ msg: 'hello' });
});

// Register Route
router
  .route('/register')
  .get((req, res) => {
    res.send('Sign Up Page');
  })
  .post(auth.register);

// Login Route
router
  .route('/login')
  .get((req, res) => {
    res.send('Login Page');
  })
  .post(auth.login);

router.get('/login', (req, res, next) => {
  // const userEmail = req.body.email;
  // const userPassword = req.body.password;
  console.log('Login Route');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
});

// OAUTH Routes for GOOGLE, login with google
router.get('/auth/google', oauth.login);
// callback route for google to redirect
router.get('/auth/google/redirect', oauth.callback);

module.exports = router;
