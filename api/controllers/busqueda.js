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

    var resultados = [];

    function buscar_naves(palabras){
      var request = require('request');
      request.get({url: `https://swapi.co/api/starships/?search=${palabras}`}, function(error, respuesta) {
        if (error) {
          console.log(error);
          return exits.success({tipo: "Error"});
        }
        else {
          var res_starships = JSON.parse(respuesta.body).results;
          for (var i = 0; i < res_starships.length; i++) {
            resultados.push(res_starships[i]);
          }
          return exits.success({resultados: resultados, busqueda: palabras});
        }
    })}

    function buscar_planetas(palabras){
      var request = require('request');
      request.get({url: `https://swapi.co/api/planets/?search=${palabras}`}, function(error, respuesta) {
        if (error) {
          console.log(error);
          return exits.success({tipo: "Error"});
        }
        else {
          var res_planets = JSON.parse(respuesta.body).results;
          for (var i = 0; i < res_planets.length; i++) {
            resultados.push(res_planets[i]);
          }
          buscar_naves(palabras);
        }
      })
    }

    function buscar_personas(palabras){
      var request = require('request');
      request.get({url: `https://swapi.co/api/people/?search=${palabras}`}, function(error, respuesta) {
        if (error) {
          console.log(error);
          return exits.success({tipo: "Error"});
        }
        else {
          var res_people = JSON.parse(respuesta.body).results;
          for (var i = 0; i < res_people.length; i++) {
            resultados.push(res_people[i]);
          }
          buscar_planetas(palabras);
        }
      })
    }

    function buscar_peliculas(palabras){
      var request = require('request');
      request.get({url: `https://swapi.co/api/films/?search=${palabras}`}, function(error, respuesta) {
        if (error) {
          console.log(error);
          return exits.success({tipo: "Error"});
        }
        else {
          var res_films = JSON.parse(respuesta.body).results;
          for (var i = 0; i < res_films.length; i++) {
            resultados.push(res_films[i]);
          }
          buscar_personas(palabras);
        }
      });
    }

    var elemento = this.req.param('search_term');
    buscar_peliculas(elemento)

  }


};
