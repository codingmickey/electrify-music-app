const verify = require('../controllers/authVerify');

const router = require('express').Router();

router.get('/verify', verify);

module.exports = router;
