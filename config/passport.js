const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt-nodejs'),
JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

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

var opts = {};

opts.secretOrKey = "db620e63d161cc1aaf78203d70c4944e";;
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