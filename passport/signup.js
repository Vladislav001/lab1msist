const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

  passport.use('signup', new LocalStrategy({
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, email, password, done) {
      let accountNumber = req.body.account_number;

      findOrCreateUser = function () {

        User.findOne({'account_number': accountNumber }, function (err, user) {
          if (err) {
            console.log('Error in SignUp: ' + err);
            return done(err);
          }

          if (user) {
            console.log('User already exists with account number: ' + accountNumber);
            return done(null, false, req.flash('message', 'Пользователь уже существует с этим номером счета'));
          } else {

            let newUser= new User();

            newUser.email = email;
            newUser.password = createHash(password);
            newUser.account_number = accountNumber;

            newUser.save(function (err) {
              if (err) {
                console.log('Error in Saving user: ' + err);
                throw err;
              }
              console.log('User Registration succesful');

              return done(null, newUser);
            });
          }
        });
      };

      process.nextTick(findOrCreateUser);
    })
  );

  const createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }

};
