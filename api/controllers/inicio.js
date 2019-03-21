module.exports = {


  friendlyName: 'Inicio',


  description: 'Busca la información de la API para mostrarla en la página de inicio.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    }
  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success();

  }


};
