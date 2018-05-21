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

};
