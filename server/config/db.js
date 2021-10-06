const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(
      //process.env.DB_CONNECT ||
      'mongodb://localhost:27017/electrifyUserDB',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Database Connected');
  } catch {
    console.log('Database not Connected');
  }
};
