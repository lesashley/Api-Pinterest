'use strict';
var crearTablero=function (tablero){
  var busqueda=$('<div class="col-lg-3"></div>');
  for (var i = 0; i <tablero.length; i++) {
    var image = $('<img class="img-tablero" src="'+ tablero[i].image.original.url+ '" alt="">');
    state.pin.data[0].image.original.url;
busqueda.append(image);
  }
 return busqueda;
}

const Search = () => {
  /*  const div = $('<div></div>');
    const titulo = $('<h3 class="red-text text-darken-2">Pokédex</h3>');
    header.append(titulo);
    return header;*/
    var div = $('<div class="row"></div>');

   div.append(crearTablero(state.pin.data));
   console.log(div);
   return div;
}
