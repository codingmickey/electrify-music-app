const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) res.json({ msg: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    // req.user = verified;
    next();
  } catch (err) {
    res.json({ msg: err });
  }
};
