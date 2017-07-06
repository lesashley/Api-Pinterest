'use strict';
var crearTablero =  (tablero) => {
  var pin = $('<div class="row board"></div>');
    for (var i = 0; i < tablero.length; i++) {
      var container = $('<div class="column-xs-2 board__item"></div>');
      var containerHover = $('<div class="board__item--hover"></div>');

      var image = $('<img class="img-tablero" data-id="'+tablero[i].id+'" data-toggle="modal" data-target="#myModal"  src="' + tablero[i].image.original.url + '" alt="">');
      var button = $('<button class="btn-guardar"><i class="glyphicon glyphicon-pushpin"></i>Guardar</button>');
      var btnCompartir = $('<button class="btn-share"><i class="glyphicon glyphicon-share"></i></button>');
      var articleName = $("<p class='name-pin'> " + tablero[i].note + "</p>");
      var contentUser = $('<div class="content-user"></div>');
      var photoUser = $('<img class="img-user" src="' + state.photoUser + '" alt="">');
      var nameUser = $('<span class="name-user">' + state.nameUser + '</span>');
      var nameboard = $('<p class="name-board">'+state.nameBoard+'</p>');
      if (tablero[i].metadata.article != undefined) {
        var linkTitle = $("<p><strong> " + tablero[i].metadata.article.name + "</strong></p>");
      }
      // console.log(state.pin.data[i].id);
      state.modal = i;


      image.on('click', function (e) {
        //console.log(e.target.src);
        console.log($(this).attr('data-id'));

        //.setAttribute(name, value)

        // state.pin.data.forEach(function (e) {
        //   console.log(e.id);
        $(".root").empty();
        $(".root").append(crearModal(e.target.src,$(this).attr('data-id')));
      });
      // image.on('click', () => {
      //   alert("dfsd");
      //   containerHover.append('<div>dsjkfhdjhkjds</div>');
      // });
      containerHover.append(image);
      containerHover.append(btnCompartir);
      containerHover.append(button);
      containerHover.append(linkTitle);
      containerHover.append(articleName);
      contentUser.append(photoUser);
      contentUser.append(nameUser);
      contentUser.append(nameboard);
      containerHover.append(contentUser);
      container.append(containerHover);
      pin.append(container);

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
