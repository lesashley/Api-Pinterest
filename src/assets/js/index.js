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
