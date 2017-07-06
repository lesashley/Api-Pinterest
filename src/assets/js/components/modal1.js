var crearModal = function (data) {
    var myModal = $('<div class="row"></div>');
    var ekis = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
    var modalDialog = $('<div class="modal-dialog"></div>');
    var modalContent = $('<div class="modal-content"></div>');
    var modalHeader = $('<div class="modal-header"><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><button type="button" class="btn btn-guardar" data-dismiss="modal"><i class="glyphicon glyphicon-pushpin"></i> Guardar</button></div>');

    var modalBody = $('<div class="modal-body"></div>');
    var imgRecibida = $('<img src="'+data+'">');
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
