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
      if (tablero[i].metadata.article != undefined) {
        // console.log(tablero[i].metadata.article.name);
        var linkTitle = $("<p> " + tablero[i].metadata.article.name + "</p>");
      }

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

      containerHover.on('click', () => {
        container.append(crearModal(tablero[i].image.original.url));
      });
    }
    return pin;
}

const Dashboard = () => {
    var div = $('<div class="container-fluid" id="board"></div>');
    var title = $('<div class="row header-board"></div>');
    var nameDashboard = $('<div class=" col-xs-4  col-xs-offset-3"><h1 class="header-board__title">'+state.nameBoard+'</h1><div>');
    var pines = $('<p class="header-board__info"><strong>'+state.totalPin+'</strong> Pines</p>');
    var seguidores = $('<p class="header-board__info"><strong>'+state.totalFollowers+'</strong> Seguidores</p>');
    var user = $('<div class="col-xs-3"><img src="'+state.photoUser+'" class="header-board__photo"/></div>');

    nameDashboard.append(pines);
    nameDashboard.append(seguidores);
    // nameDashboard.append(user);
    title.append(nameDashboard);
    title.append(user);

    div.append(title);
    div.append(crearTablero(state.pin.data));
    return div;
}
