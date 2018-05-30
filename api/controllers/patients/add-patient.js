module.exports = {


  friendlyName: 'Patient add',

  description: 'Add new patient',


  inputs: {

    email: {
      required: true,
      type: 'string',
      isEmail: true
    },

    firstName:  {
      required: true,
      type: 'string'
    },
	
    lastName:  {
      required: true,
      type: 'string',
    },
	
    sex:  {
        type: 'string'
      },
    
    birthData:  {
        type: 'string'
      },
    
    deathData:  {
        type: 'string'
      },
    
    business:  {
        type: 'string'
      },
    
    city:  {
        type: 'string'
      },
    
    street:  {
        type: 'string'
      },
    
    house:  {
        type: 'string'
      },	
    
    zip:  {
        type: 'string'
      },
    
    phone:  {
        type: 'string'
      },
    
    workPhone:  {
        type: 'string'
      }
    },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided data is invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function (inputs, exits) {

    var newEmail = inputs.email.toLowerCase();

    var newUserRecord = await Patient.create(Object.assign({
      email: newEmail,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      sex: inputs.sex,
      birthData: inputs.birthData,
      deathData: inputs.deathData,
      business: inputs.business,
      city: inputs.city,
      state: inputs.state,
      street: inputs.street,
      house: inputs.house,
      zip: inputs.zip,
      phone: inputs.phone,
      workPhone: inputs.workPhone
    }, {}));

    return exits.success();

  }

};
