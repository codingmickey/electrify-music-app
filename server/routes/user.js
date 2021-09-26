const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

const keys = require('../config/keys');
const User = require('../models/user-model');

const oauth = require('../controllers/oauth');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

// Home route
router.get('/', (req, res) => {
  res.send('Home Page');
});

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

// OAUTH Routes for GOOGLE, login with google
router.get('/auth/google', oauth.login);
// callback route for google to redirect
router.get('/auth/google/redirect', oauth.callback);

module.exports = router;
