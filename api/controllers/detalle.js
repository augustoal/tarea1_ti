module.exports = {


  friendlyName: 'Detalle',


  description: 'Detalle del elemento especificado.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/detalle'
    }
  },


  fn: async function (inputs, exits) {
    var elemento = this.req.param('elemento');
    // All done.
    return exits.success({nombre: elemento});

  }


};
