module.exports = {


  friendlyName: 'View patients',


  description: 'Display "Patients" page.',


  exits: {

    success: {
	  description: 'patients'
    }

  },
  
  fn: async function (inputs, exits) {
    const res = this.res;
    Patient.find(function (err, users) {
      if (err) { return res.serverError(err); }
      return res.json(users);
    });
  }

  /*fn: async function (inputs, exits) {
    //return exits.success();
  //return this.res.send('Hi there!');
    return this.res.json(User);
	//return this.res.json({ user: 'tobi' })
  }*/


};
