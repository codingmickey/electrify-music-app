const mongoose = require('mongoose');

const multipleFileSchema = new mongoose.Schema(
  {
    albumTitle: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    songs: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model('MultipleFile', multipleFileSchema);
