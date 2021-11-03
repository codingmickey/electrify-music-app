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

uploadRouter
  .route('/singleFile')
  // C - Upload single song
  .get(getallSingleSongs)
  // R - Get all single songs
  .post(upload.single('file'), singleSongUpload);

uploadRouter
  .route('/multipleFiles')
  // C - Upload multiple songs
  .get(getallMultipleSongs)
  // R - Get all single songs
  .post(upload.array('files'), multipleSongUpload);

// U - Update

// D - Delete

module.exports = uploadRouter;
