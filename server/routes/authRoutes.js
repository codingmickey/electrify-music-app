const express = require('express');

const oauth = require('../controllers/oauth');
const auth = require('../controllers/auth');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(express.json());

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

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
});

// OAUTH Routes for GOOGLE, login with google
router.get('/auth/google', oauth.login);
// callback route for google to redirect
router.get('/auth/google/redirect', oauth.callback, oauth.jwtToken);

module.exports = router;
