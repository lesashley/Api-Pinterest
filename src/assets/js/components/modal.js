$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AZin6-NmjSkiQF5vo3q_W1pxBXExFM49ahQddmdEI1kRKQBDLwAAAAA&fields=id%2Cname%2Curl%2Ccreated_at%2Ccounts%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason", (response) => {

    state.nameBoard = response.data.creator.first_name;
});

$.getJSON("https://api.pinterest.com/v1/users/arabelyuska/?access_token=AVhrwnNQPhT0xkU5_77985FyoWdpFM5BKydQErFEI1kRKQBDLwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername%2Caccount_type%2Cbio%2Ccreated_at%2Ccounts%2Cimage", (response) => {

    state.photoUser = response.data.image["60x60"].url;
    state.nameUser = response.data.first_name;
});

var crearModal = function (deberia recibir la imagen a la que le hizo click) {
    var myModal = $('<div class="row"></div>');
    var ekis = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
    var modalDialog = $('<div class="modal-dialog"></div>');
    var modalContent = $('<div class="modal-content"></div>');
    var modalHeader = $('<div class="modal-header"><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><button type="button" class="btn btn-guardar" data-dismiss="modal"><i class="glyphicon glyphicon-pushpin"></i> Guardar</button></div>');
    
    var modalBody = $('<div class="modal-body"></div>');
    var imgRecibida = $('<img src="'+Aqui debe ir la imagen a la cual se le dio click+'">');
    var divGuardadoDesde = $ ('<div class="border"><div class="row"><div class="col-xs-1"><img src="'+aqui debe ir el icono de donde se guardo+'"></div><div class="col-xs-9"><p>Guardado desde <br><strong>'+Behance+'</strong></p></div><div class="col-xs-2"><button type="button" class="btn" data-dismiss="modal">Visitar</button></div></div></div>');
    var divUsuario = $('<div class="border"><div class="row"><div class="col-xs-2"><img src="'+aqui debe ir el icono de donde se guardo+'"></div><div class="col-xs-10"><p><strong>'+Arabela(nombre de usuario)+'</strong> lo ha guardado en <strong>'+Web UI+'</strong></p></div></div></div>');    
    var comentarios = $('<h4><strong>Comentarios</strong></h4>');
    
    modalBody.append(imgRecibida);
    modalBody.append(divGuardadoDesde);
    modalBody.append(divUsuario);
    modalBody.append(comentarios);
    
    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    
    modalDialog.append(modalContent);
    
    myModal.append(ekis);
    myModal.append(modalDialog);
    

    return myModal;
}

/*const Modal = () => {
    var div = $('<div class="container"></div>');
    div.append(crearModelo(state.pin.data));
    return div;
}*/


