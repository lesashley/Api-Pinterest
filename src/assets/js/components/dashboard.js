'use strict';

var crearTablero = function (tablero) {
    var pin = $('<div class="row"></div>');
    for (var i = 0; i < tablero.length; i++) {
        var image = $('<img class="img-tablero" src="' + tablero[i].image.original.url + '" alt="">');

        pin.append(image);
    }
    return pin;
}

const Dashboard = () => {
    var div = $('<div class="container"></div>');
    div.append(crearTablero(state.pin.data));

    return div;
}
