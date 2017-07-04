'use strict';

const render = (root) => {
  console.log("entra en ruth");
    root.empty();
    root.append(Search());
};

const state = {
    pin: null,
    /*selectedPokemon: null*/
};

$(_ => {

    getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AQA6SxA52Kr8rZEppfw-TgqsLSA6FM4qoiPYYN1EI1rXoUA7AwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {

        if (err) {
            return alert(err.message);
        }

        state.pin = json;
/*        console.log(state.pin.data[0].metadata.article.name);
        console.log(state.pin.data[0].image.original.url);
        console.log(state.pin.data[0].image.original.);
        console.log(state.pin.data[0].metadata.article.description);
        console.log(state.pin.data[0].image.original.url);*/

        const root = $('.root');
        render(root);
    });

});
