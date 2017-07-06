'use strict';

var render = (root) => {
    root.empty();
    root.append(Header());
    root.append(Dashboard());
};

var state = {
    dashboard:null,
    likeBoard: null,
    followBoard:null,
    nameUser: null,
    photoUser: null,
    nameBoard: null,
    data :null,
    pinesID:[]
};

$(_ => {
  //Description: Retrieve information about a Board
  getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AQKhzJWjrZJ8RLCYLlCNMJw-vmYUFM6Q4vneskBEI1kRKQBDLwAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason', (err, json) => {
    if (err) {
        return alert(err.message);
    }

    state.nameBoard = json.data.name;
    state.likeBoard=json.data.counts.pins;
      state.followBoard=json.data.counts.followers;

    const root = $('.root');
    render(root);
  });
});
