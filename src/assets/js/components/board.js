

$.getJSON("https://api.pinterest.com/v1/pins/523473156678884259/?access_token=AZ4qKOKulaRiiT6ep4EiSOMfLJuHFM6RDqXRCKJEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmedia%2Cboard%2Cattribution%2Cmetadata%2Ccolor%2Coriginal_link%2Ccounts%2Ccreated_at%2Ccreator", (response) => {

    state.data = response.data;
    console.log(state.data.metadata);
});
