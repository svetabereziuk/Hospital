
module.exports.routes = {

  'GET /': {
    view: 'pages/homepage'
  },
  'GET /patients': { action: 'patients/view-patients' },
  'POST  /patients': { action: 'patients/add-patient' },
  'POST /login': { action: 'entrance/login' }
  
};
