const passport = require('passport');
const jwt = require('jwt-simple');

module.exports = {

  friendlyName: 'login',
  description: 'login',


  inputs: {

    username: {
      required: true,
      type: 'string'
    },

    password:  {
      required: true,
      type: 'string'
    }

  },

  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided data is invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    }

  },

  fn: async function (inputs, exits) {
    const res = this.res,
      req = this.req;

	  passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) return res.send({ message: info.message, user });
      req.login(user, function (err) {	
        var token = jwt.encode(user, sails.config.session.secret);
        return res.json({ success: true, token: `Bearer ${token}`, user:{token: `Bearer ${token}`, username: user.username }});
      });
    })(req, res);
	
  }

};
