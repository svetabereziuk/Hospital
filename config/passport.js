const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt-nodejs');
  
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  User.findOne({ id }, function (err, user) {
    cb(err, user);
  });
});

passport.use(new LocalStrategy({
  usernameField: 'username',
  passportField: 'password'
}, function (username, password, cb) {
  User.findOne({ username: username }, function (err, user) {
    if (err) return cb(err);
    if (!user) return cb(null, false, { message: 'Username not found' });
    bcrypt.compare(password, user.password, function (err, res) {
      if (!res) return cb(null, false, { message: 'Invalid Password' });
      return cb(null, user, { message: 'Login Succesful' });
    });
  });
}));


var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};

opts.secretOrKey = "4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM";
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findOne({ username: jwt_payload.username }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
  
}));
