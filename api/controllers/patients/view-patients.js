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
	//const token = getToken(req.headers);
	
	console.log('token');
	console.log(this.req.headers.token);
	
    Patient.find(function (err, users) {
      if (err) { return res.serverError(err); }
      return res.json(users);
    });
  }

};
