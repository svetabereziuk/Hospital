module.exports = {

  attributes: {
    firstName: { type: 'string'},
    lastName: { type: 'string'},
	sex: { type: 'string'},
	birthData: { type: 'string'},
	deathData: { type: 'string'},
	phone: { type: 'string'},
	workPhone: { type: 'string'},
	email: { type: 'string'},
	house: { type: 'string'},
	street: { type: 'string'},
	city: { type: 'string'},
	zip: { type: 'string'},
	business: { type: 'string'},
	medication: { type: 'json'},
	diagnoses: { type: 'json'},
	
  },
  tableName: 'patients'
};
