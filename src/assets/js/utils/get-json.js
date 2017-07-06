'use strict';
// Return a user's information
$.getJSON("https://api.pinterest.com/v1/users/arabelyuska/?access_token=AVhrwnNQPhT0xkU5_77985FyoWdpFM5BKydQErFEI1kRKQBDLwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername%2Caccount_type%2Cbio%2Ccreated_at%2Ccounts%2Cimage", (response) => {

    state.photoUser = response.data.image["60x60"].url;
    state.nameUser = response.data.first_name;
});
$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AVUVLtoZxB4BT1NR9CasIVZk9p01FM6ZlbrbHTZEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Cboard%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage%2Cmedia", (response) => {
     state.dashboard=response.data;
    console.log("el valor linea 10"+response.data);

});

console.log("getjson"+state.dashboard);

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
