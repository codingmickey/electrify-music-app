require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user-model');

const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, cb) => {
      // check if user already exists in our db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // user already there
          console.log('User Already there!');
          cb(null, profile);
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
          cb(null, profile);
        }
      });
    }
  )
);

// passport.use(
//   new JWTStrategy(
//     {
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//       secretOrKey: keys.jwt.secret,
//     },
//     (jwtPayload, cb) => {
//       User.findById;
//     }
//   )
// );
