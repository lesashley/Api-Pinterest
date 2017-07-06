'use strict';
const Dashboard = () => {

    var pin = $('<div class="row"></div>');
    var div = $('<div class="container"></div>');

      //Description: Retrieve the Pins on a Board
    getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AVUVLtoZxB4BT1NR9CasIVZk9p01FM6ZlbrbHTZEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Cboard%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage%2Cmedia", (err, json) => {
      if (err) {
          return alert(err.message);
      }
       state.dashboard=json.data;


       for(var i = 0; i < state.dashboard.length; i++) {

                getJSON("https://api.pinterest.com/v1/pins/" + state.dashboard[i].id+ "/?access_token=AWRwPAI2kL0bx9lF9nybb8GcnDgdFM6gaE1AuhBEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Coriginal_link%2Cboard%2Ccreated_at%2Ccounts%2Cimage%2Ccreator%2Cmedia", (err, json)  => {
                  if (err) {
                      return alert(err.message);
                  }
            console.log(json.data);
                  state.data = json.data;
                  console.log(state.data.note);
                  console.log(state.data.board.name);
                  console.log(state.data.creator.first_name);

                  if (state.data.attribution !== undefined ) {
                      console.log(state.data.attribution.title);
                      console.log(state.data.attribution.provider_name);
                      console.log(state.data.attribution.provider_favicon_url);
                      console.log(state.data.attribution.author_name);
                  }
                  //a veces de por si esta vacio metadata
                  if (state.data.metadata.link !== undefined) {
                      console.log(state.data.metadata.link.favicon);
                      console.log(state.data.metadata.link.site_name)
                      console.log(state.data.metadata.link.title);
                      console.log(state.data.metadata.link.description);
                  } else {
                      if (state.data.metadata.product !== undefined) {
                          console.log(state.data.metadata.product.name);

                      }
                  }
                  // a veces en vez de tener article tiene product

                  if (state.data.metadata.article !== undefined) {
                      console.log(state.data.metadata.article.name);
                      console.log(state.data.metadata.article.published_at);
                      console.log(state.data.metadata.article.description);
                  }

});
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
