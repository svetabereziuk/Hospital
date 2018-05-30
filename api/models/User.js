const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
      username: {
        type: 'string',
        required: true,
        unique: true
      },
      password: {
        type: 'string',
        required: true
      }
  },

  tableName: 'users',

  customToJSON: function() {
      return _.omit(this, ['password'])
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if(err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }

};