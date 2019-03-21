function atras(){
  window.history.back();
}

function cambiar_nombre(id, nombre){
  $(`#${id}`).text(nombre);
}

function encontrar_nombre(elemento){
  $.get(elemento.text(), function(informacion, status){
    elemento.text(informacion.name);
  })
}

function encontrar_titulo(elemento){
  $.get(elemento.text(), function(informacion, status){
    elemento.text(informacion.title);
  })
}

$(document).ready(function(){
  $('.people').each(function(){
    encontrar_nombre($(this));
  })
  $('.planets').each(function(){
    encontrar_nombre($(this));
  })
  $('.starships').each(function(){
    encontrar_nombre($(this));
  })
  $('.films').each(function(){
    encontrar_titulo($(this));
  })

});
