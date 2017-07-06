'use strict';

const crearModal = (src,id) => {
  console.log(id);

  getJSON("https://api.pinterest.com/v1/pins/" +id+ "/?access_token=AWRwPAI2kL0bx9lF9nybb8GcnDgdFM6gaE1AuhBEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Coriginal_link%2Cboard%2Ccreated_at%2Ccounts%2Cimage%2Ccreator%2Cmedia", (err, json)  => {
    if (err) {
        return alert(err.message);
    }
    state.data = json.data;
                  console.log(state.data.note);
                  console.log(state.data.board.name);
                  console.log(state.data.creator.first_name);
    });
  const myModal = $('<div class="row"></div>');
  const ekis = $('<button type="button" class="close btn-close" data-dismiss="modal"> &times;</button>');
  const modalDialog = $('<div class="modal-dialog"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><button type="button" class="btn btn-guardar" data-dismiss="modal"><i class="glyphicon glyphicon-pushpin"></i> Guardar</button></div>');

  const modalBody = $('<div class="modal-body"></div>');
  const imgRecibida = $('<img src="'+src+'" class="img-responsive">');
  const divGuardadoDesde = $('<div class="border"><div class="row"><div class="col-xs-1"><img src=""></div><div class="col-xs-9"><p>Guardado desde <br><strong> '+state.nameBoard+'</strong></p></div><div class="col-xs-2"><button type="button" class="btn" data-dismiss="modal">Visitar</button></div></div></div>');
  const divUsuario = $('<div class="border"><div class="row"><div class="col-xs-2"><img src=""></div><div class="col-xs-10"><p><strong>'+state.nameUser+'</strong> lo ha guardado en <strong>'+"Web UI"+'</strong></p></div></div></div>');
  const comentarios = $('<h4><strong>Comentarios</strong></h4>');

  ekis.on("click", ()=>{
    $('.root').empty();
    $('.root').append(Header());
    $(".root").append(Dashboard());
  })

  modalBody.append(imgRecibida);
  modalBody.append(divGuardadoDesde);
  modalBody.append(divUsuario);
  modalBody.append(comentarios);

  modalContent.append(modalHeader);
  modalContent.append(modalBody);

  modalDialog.append(modalContent);

  myModal.append(ekis);
  myModal.append(modalDialog);

  return myModal;
}

var crearTablero =  (tablero) => {
  var pin = $('<div class="row board"></div>');
    for (var i = 0; i < tablero.length; i++) {
      var container = $('<div class="column-md-2 column-xs-5 board__item"></div>');
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

        $(".root").empty();
        $(".root").append(crearModal(e.target.src,$(this).attr('data-id')));
      });
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
