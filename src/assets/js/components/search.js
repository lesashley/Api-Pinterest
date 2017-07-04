'use strict';
var crearTablero=function (tablero){
var total=$('<div class="row"></div>');

  for (var i = 0; i <tablero.length; i++) {

  var  image = $('<img class="img-tablero" src="'+ tablero[i].image.original.url+ '" alt="">');
total.append(image);

  }
 return total;
}

const Search = () => {
    var div = $('<div class=""></div>');

   div.append(crearTablero(state.pin.data));
   
   return div;
}
