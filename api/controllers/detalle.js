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

    function encontrar_nombre(url, tipo){
      var request = require('request');
      request.get({url: url}, function(error, respuesta) {
        if (error) {
          console.log(error);
        }
        else {
          var informacion = JSON.parse(respuesta.body);
          if (tipo =='films'){
            return informacion.title;
          } else if (tipo == 'people'){
            return informacion.name;
          }
        }
      });
    }


    var elemento = this.req.param('elemento').split(",");
    var tipo = elemento[0];
    var id = elemento[1];
    console.log(`Tipo : ${tipo}\nID: ${id}`);
    var request = require('request');
    request.get({url: `https://swapi.co/api/${tipo}/${id}`}, function(error, respuesta) {
      if (error) {
        console.log(error);
        return exits.success({tipo: "Error"});
      }
      else {
        var informacion = JSON.parse(respuesta.body);
        return exits.success({tipo: tipo, id: id, informacion: informacion});
      }
    });
  }


};
