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
    var graphqlRequest = require('graphql-request');
    var peliculas;
    const query = `{
                    allFilms{
                      totalCount
                      films{
                        title
                        episodeID
                        director
                        producers
                        releaseDate
                      }
                    }
                  }`;
    graphqlRequest.request('https://swapi-graphql-integracion-t3.herokuapp.com', query).then(
      function (data) {return exits.success({peliculas: data.allFilms.films})}
    );
    //return exits.success({peliculas: peliculas.films})
    //return exits.success({peliculas: data.films})

    // var request = require('request');
    //
    // request.get({url: 'https://swapi.co/api/films'}, function(error, respuesta) {
    //   if (error) {
    //     console.log(error);
    //     var peliculas = null;
    //     return exits.success({peliculas: peliculas});
    //   }
    //   else {
    //     var peliculas = JSON.parse(respuesta.body).results;
    //     return exits.success({peliculas: peliculas});
    //   }
    // });

  }


};
