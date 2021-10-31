const express = require('express');

const uploadRouter = express.Router();

// Multer controllers and config
const { upload } = require('../config/multerConfig');
const {
  singleSongUpload,
  multipleSongUpload,
  getallSingleSongs,
  getallMultipleSongs,
} = require('../controllers/songUploader');

uploadRouter.use(express.json());

// Music CRUD

// C - Upload single song
uploadRouter
  .route('/singleFile')
  .get((req, res) => {
    res.send('Upload a single file');
  })
  .post(upload.single('file'), singleSongUpload);

// C - Upload multiple songs
uploadRouter
  .route('/multipleFiles')
  .get((req, res) => {
    res.send('Upload multiple files');
  })
  .post(upload.array('files'), multipleSongUpload);

// R - Get all songs
uploadRouter.route('/getSingleFiles').get(getallSingleSongs);
uploadRouter.route('/getMultipleFiles').get(getallMultipleSongs);

// U - Update

// D - Delete

module.exports = uploadRouter;
