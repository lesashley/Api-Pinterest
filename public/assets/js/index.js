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
        // var linkTitle = $("<p> " + tablero[i].metadata[0].name + "</p>");
        console.log(tablero[i].metadata);
        pin.append(articleName);
        //pin.append(linkTitle);
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

'use strict';
const Header = () => {
    const header = $('<header></header>');
    const row = $('<div class="row"></div>');
    const content = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div><div class="col-sm-9 buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div><div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');

    row.append(content);
    header.append(row);

    return header;
}

'use strict';


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
});
