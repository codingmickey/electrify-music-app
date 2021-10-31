const express = require('express');

const router = express.Router();

// Multer controllers and config
const { upload } = require('../config/multerConfig');
const {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
} = require('../controllers/fileUploader');

router.use(express.json());

// Music CRUD
router
  .route('/singleFile')
  .get((req, res) => {
    res.send('Upload a single file');
  })
  .post(upload.single('file'), singleFileUpload);

router
  .route('/multipleFiles')
  .get((req, res) => {
    res.send('Upload multiple files');
  })
  .post(upload.array('files'), multipleFileUpload);

router.route('/getSingleFiles').get(getallSingleFiles);
router.route('/getMultipleFiles').get(getallMultipleFiles);

module.exports = router;
