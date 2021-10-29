const express = require('express');

const router = express.Router();

const { upload } = require('../helper/filehelper');
const { singleFileUpload } = require('../controllers/fileUploader');

router.use(express.json());

// Music CRUD
router
  .route('/')
  .get((req, res) => {
    res.send('Sign Up Page');
  })
  .post(upload.single('file'), singleFileUpload);

module.exports = router;
