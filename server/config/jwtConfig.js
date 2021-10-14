const jwt = require('jsonwebtoken');

const maxTime = 3 * 24 * 60 * 60;

// Create token with max time of 3 days
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    // Time in seconds
    expiresIn: maxTime,
  });
};

exports.createToken = createToken;
exports.maxTime = maxTime;
