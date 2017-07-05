'use strict';

$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AZin6-NmjSkiQF5vo3q_W1pxBXExFM49ahQddmdEI1kRKQBDLwAAAAA&fields=id%2Cname%2Curl%2Ccreated_at%2Ccounts%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason", (response) => {

    state.nameBoard = response.data.creator.first_name;
});

$.getJSON("https://api.pinterest.com/v1/users/arabelyuska/?access_token=AVhrwnNQPhT0xkU5_77985FyoWdpFM5BKydQErFEI1kRKQBDLwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername%2Caccount_type%2Cbio%2Ccreated_at%2Ccounts%2Cimage", (response) => {

    state.photoUser = response.data.image["60x60"].url;
    state.nameUser = response.data.first_name;
});

var crearTablero = function (tablero) {
    var pin = $('<div class="row"></div>');
    for (var i = 0; i < tablero.length; i++) {
        var image = $('<img class="img-tablero" src="' + tablero[i].image.original.url + '" alt="">');
        var nameUser = $('<span class="">' + state.nameUser + '</span>');
        var photoUser = $('<img class="img-tablero" src="' + state.photoUser + '" alt="">');
        var articleName = $("<span> " + tablero[i].note + "</span>");
      //var linkTitle = $("<p> " + tablero[i].metadata[0].name + "</p>");
        console.log(tablero[i].metadata);
        pin.append(articleName);
      // pin.append(linkTitle);
        pin.append(image);
        pin.append(nameUser);
        pin.append(photoUser);
    }
    return pin;
}

const Dashboard = () => {
    var div = $('<div class="container"></div>');

    div.append(crearTablero(state.pin.data));

    return div;
}
