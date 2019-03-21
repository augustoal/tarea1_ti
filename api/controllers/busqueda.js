module.exports = {


  friendlyName: 'Busqueda',


  description: 'Busqueda sobre el término ingresado.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/busqueda'
    }
  },


  fn: async function (inputs, exits) {
    var elemento = this.req.param('elemento');
    // All done.
    return exits.success({elemento:elemento});

  }


};
