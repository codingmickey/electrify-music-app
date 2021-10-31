const SingleFile = require('../models/singleSong');
const MultipleFile = require('../models/multipleSongs');

// Single File Uploading controller
const singleSongUpload = async (req, res, next) => {
  try {
    const song = new SingleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
      songTitle: req.body.title,
      artist: req.body.artist,
    });
    await song.save();
    console.log(song);
    res.status(201).send('Song uploaded successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Multiple Files Uploading controller
const multipleSongUpload = async (req, res, next) => {
  try {
    let songsArray = [];

    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      songsArray.push(file);
    });

    const multipleSongs = new MultipleFile({
      albumTitle: req.body.title,
      artist: req.body.artist,
      songs: songsArray,
    });

    await multipleSongs.save();
    console.log(multipleSongs);
    res.status(201).send('Files uploaded successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Single File Viewing controller
const getallSingleSongs = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(201).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Multiple File Viewing controller
const getallMultipleSongs = async (req, res, next) => {
  try {
    const files = await MultipleFile.find();
    res.status(201).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Changing the file size to human readable format
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return `${parseFloat((bytes / Math.pow(1000, index)).toFixed(dm))} ${
    sizes[index]
  }`;
};

module.exports = {
  singleSongUpload,
  multipleSongUpload,
  getallSingleSongs,
  getallMultipleSongs,
};
