const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  console.log(req.header());
  const token = req.header('jwt');
  console.log(`token at verify ${token}`);
  if (!token) res.status(403).json({ msg: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.json({ msg: err });
  }
};
