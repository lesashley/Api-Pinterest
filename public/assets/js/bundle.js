(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

'use strict';
const Header = () => {
  const header = $('<header class="header"></header>');
  const row = $('<div class="row"></div>');
  const topHeader = $('<div class="col-xs-12 header__top"></div>');
  const logo = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div>');
  const search = $('<div class="col-sm-9 header__top--buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div>');
  const icons = $('<div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');
  const belowHeader = $('<div class="col-xs-12 header__below"><div class ="col-xs-5"><i class="glyphicon glyphicon-share header__below--icon"></i></div><div class="col-xs-2"></div><div class="col-xs-5"><button class="header__below--seguir">Seguir tablero</button></div></div>');

  topHeader.append(logo);
  topHeader.append(search);
  topHeader.append(icons);
  row.append(topHeader);
  row.append(belowHeader);
  header.append(row);

  return header;
}

'use strict';

// $.getJSON("https://api.pinterest.com/v1/users/arabelyuska/?access_token=AVhrwnNQPhT0xkU5_77985FyoWdpFM5BKydQErFEI1kRKQBDLwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername%2Caccount_type%2Cbio%2Ccreated_at%2Ccounts%2Cimage", (response) => {
//
//     state.photoUser = response.data.image["60x60"].url;
//     state.nameUser = response.data.first_name;
// });

const getJSON = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
        }
        cb(null, xhr.response);
    });
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};

'use strict';

const render = (root) => {
    root.empty();
    root.append(Header());
    root.append(Dashboard());
};

const state = {
    totalPin : null,
    totalFollowers : null,
    pin: null,
    nameUser: null,
    photoUser: null,
    nameBoard: null
};

$(_ => {
  getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AQA6SxA52Kr8rZEppfw-TgqsLSA6FM4qoiPYYN1EI1rXoUA7AwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {
    if (err) {
        return alert(err.message);
    }
    state.pin = json;
    const root = $('.root');
    render(root);
  });

  $.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AZin6-NmjSkiQF5vo3q_W1pxBXExFM49ahQddmdEI1kRKQBDLwAAAAA&fields=id%2Cname%2Curl%2Ccreated_at%2Ccounts%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason", (response) => {
      state.nameBoard = response.data.name;
      state.totalPin = response.data.counts.pins;
      state.totalFollowers = response.data.counts.followers;
      console.log(response.data);
  });

  $.getJSON("https://api.pinterest.com/v1/users/arabelyuska/?access_token=AVhrwnNQPhT0xkU5_77985FyoWdpFM5BKydQErFEI1kRKQBDLwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername%2Caccount_type%2Cbio%2Ccreated_at%2Ccounts%2Cimage", (response) => {
      state.photoUser = response.data.image["60x60"].url;
      state.nameUser = response.data.first_name;
  });

});

},{}]},{},[1])