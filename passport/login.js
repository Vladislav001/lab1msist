const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');
const User = require('../models/user');

module.exports = function (passport) {

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
    function (req, email, password, done) {
      User.findOne({ 'email': email },
        function (err, user) {
          if (err)
            return done(err);
            let data = {};
            data.data = req.body;

          if (!user) {
            console.log('User Not Found with email ' + email);
            return done(null, false, req.flash('message', 'Введен неверный email или пароль'));
          }

          if (!isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false, req.flash('message', 'Введен неверный email или пароль'));
          }

          return done(null, user);
        }
      );
    })
  );


  const isValidPassword = function (user, password) {
    return bCrypt.compareSync(password, user.password);
  }

};
