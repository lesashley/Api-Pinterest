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
