/**
	 * AuthController
	 *
	 * @description :: Server-side actions for handling incoming requests.
	 * @help        :: See https://sailsjs.com/docs/concepts/actions
	 */
const passport = require('passport');
const jwt         = require('jwt-simple');
module.exports = {
  //Login function
  login: function (req, res) {
  
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) return res.send({ message: info.message, user });
      req.login(user, function (err) {	
	  var token = jwt.encode(user, "4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM");
		return res.json({success: true, token: token});
        //return res.redirect('/');
      });
    })(req, res);
  }
  //Logout function
  /*logout: function (req, res) {
    req.logout();
    res.redirect('/');
  },
  //Register function
  register: function (req, res) {
    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      description: req.body.description
    }
    User.create(data).fetch().exec(function (err, user) {
      if (err) return res.negoiate(err);

      req.login(user, function (err) {
        if (err) return res.negotiate(err);
        sails.log('User ' + user.id + ' has logged in.');
        return res.redirect('/');
      })
    })
  }*/
};