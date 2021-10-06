const User = require('../models/user-model');
const verify = require('../controllers/authVerify');

const router = require('express').Router();

router.get('/allUsers', verify, async (req, res) => {
  try {
    const results = await User.find();
    res.send(results);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
