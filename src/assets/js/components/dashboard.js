'use strict';

    // var crearTablero = function(tablero) {
    //
    // }

const Dashboard = () => {

    var pin = $('<div class="row"></div>');
    var div = $('<div class="container"></div>');

      //Description: Retrieve the Pins on a Board
  $.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AVUVLtoZxB4BT1NR9CasIVZk9p01FM6ZlbrbHTZEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Cboard%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage%2Cmedia", (response) => {
       state.dashboard=response.data;


       for(var i = 0; i < state.dashboard.length; i++) {
              state.pinesID.push(state.dashboard[i].id);
              console.log(state.pinesID.length);
           var image = $('<img class="img-tablero" data-id="'+ state.dashboard[i].id+'" src="' + state.dashboard[i].image.original.url + '" alt="">');

           var nameUser = $('<span class="">' + state.nameUser + '</span>');
           var photoUser = $('<img class="img-tablero" src="' + state.photoUser + '" alt="">');
           var articleName = $("<span> " + state.dashboard[i].note + "</span>");
           // var linkTitle = $("<p> " + tablero[i].metadata[0].name + "</p>");

           pin.append(articleName);
           //pin.append(linkTitle);
           pin.append(image);
           pin.append(nameUser);
           pin.append(photoUser);
       }
  });


    div.append(pin);

    return div;
}
