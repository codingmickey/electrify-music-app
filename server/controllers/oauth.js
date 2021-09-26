const passport = require('passport');

exports.login = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.callback = passport.authenticate('google');

// {
//     session: false,
//     failureRedirect: '/auth/login',
//   },
//   (err, user, info) => {
//     if (err || !user) {
//       return res.status(400).json({
//         message: 'Something is not right',
//         user: user,
//       });
//     }

//     req.login(user, { session: false }, (err) => {
//       if (err) {
//         res.send(err);
//       }

//       // Generate a signed jwt token with contents of user object

//       const token = jwt.sign(user, keys.jwt.secret);
//       return res.json({ user, token });
//     });
//   }
