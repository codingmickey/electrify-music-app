const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // user already there
          console.log('User Already there!');
        } else {
          // Create new user
          new User({
            name: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log(`New user created: ${newUser}`);
            });
        }
      });
    }
  )
);
