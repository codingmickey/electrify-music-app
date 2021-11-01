const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (
    // Auido Files
    file.mimetype === 'audio/m4a' ||
    file.mimetype === 'audio/mp3' ||
    file.mimetype === 'audio/mp4' ||
    file.mimetype === 'audio/wav' ||
    file.mimetype === 'audio/wma' ||
    file.mimetype === 'audio/flac' ||
    file.mimetype === 'audio/aac'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, filefilter });

module.exports = { upload };
