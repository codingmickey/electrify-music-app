const passport = require('passport');
const { createToken, maxTime } = require('../config/jwtConfig');

exports.login = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.callback = passport.authenticate('google');

exports.jwtToken = async (req, res) => {
  console.log(req.user);
  const token = createToken(req.user._id);
  console.log(token);
  res.cookie('jwt', token);
  res.json({ msg: req.user._id });
};
