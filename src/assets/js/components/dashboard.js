'use strict';
var crearTablero = function (tablero) {
  var pin = $('<div class="row board"></div>');
    for (var i = 0; i < tablero.length; i++) {
      var container = $('<div class="column-xs-2 board__item"></div>');
      var containerHover = $('<div class="board__item--hover"></div>');
      var image = $('<img class="img-tablero" src="' + tablero[i].image.original.url + '" alt="">');
      var button = $('<button class="btn-guardar"><i class="glyphicon glyphicon-pushpin"></i>Guardar</button>');
      var btnCompartir = $('<button class="btn-share"><i class="glyphicon glyphicon-share"></i></button>');
      var articleName = $("<p> " + tablero[i].note + "</p>");
      var contentUser = $('<div class="content-user"></div>');
      var photoUser = $('<img class="img-user" src="' + state.photoUser + '" alt="">');
      var nameUser = $('<span class="">' + state.nameUser + '</span>');
      // console.log(tablero[i].metadata.article);
      // console.log(tablero[i].metadata.article ==  undefined);
      if (tablero[i].metadata.article != undefined) {
        // console.log("entro");
        console.log(tablero[i].metadata.article.name);
        var linkTitle = $("<p> " + tablero[i].metadata.article.name + "</p>");
      }

      // console.log(tablero[i].metadata);
      containerHover.append(image);
      containerHover.append(btnCompartir);
      containerHover.append(button);
      containerHover.append(linkTitle);
      containerHover.append(articleName);
      contentUser.append(photoUser);
      contentUser.append(nameUser);
      containerHover.append(contentUser);
      container.append(containerHover);
      pin.append(container);
    }
    return pin;
}

const Dashboard = () => {
    var div = $('<div class="container-fluid" id="board"></div>');
    var nameDashboard = $('<div><h1>nameBoard</h1><div>');
    var pines = $('<p>pines</p>');
    var seguidores = $('<p>seguidores</p>');

    div.append(nameDashboard);
    div.append(pines);
    div.append(seguidores);
    div.append(crearTablero(state.pin.data));
    return div;
}
