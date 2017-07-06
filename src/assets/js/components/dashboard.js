'use strict';

    // var crearTablero = function(tablero) {
    //
    // }

const Dashboard = () => {
  //Description: Retrieve the Pins on a Board
    var pin = $('<div class="row"></div>');
    var div = $('<div class="container"></div>');
  $.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AVUVLtoZxB4BT1NR9CasIVZk9p01FM6ZlbrbHTZEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Cboard%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage%2Cmedia", (response) => {
       state.dashboard=response.data;
       console.log(state.dashboard);

       for(var i = 0; i < state.dashboard.length; i++) {
         console.log(state.dashboard[i].image.original.url);
           var image = $('<img class="img-tablero" src="' + state.dashboard[i].image.original.url + '" alt="">');
           console.log(state.dashboard[i].image.original.url);
           var nameUser = $('<span class="">' + state.nameUser + '</span>');
           var photoUser = $('<img class="img-tablero" src="' + state.photoUser + '" alt="">');
           var articleName = $("<span> " + state.dashboard[i].note + "</span>");
           // var linkTitle = $("<p> " + tablero[i].metadata[0].name + "</p>");
           console.log(state.dashboard[i].metadata);
           pin.append(articleName);
           //pin.append(linkTitle);
           pin.append(image);
           pin.append(nameUser);
           pin.append(photoUser);
       }
  });

    console.log(state.photoUser);
    console.log("asas"+state.dashboard);


    console.log("en el  dashboard"+state.dashboard);

    div.append(pin);

    return div;
}
