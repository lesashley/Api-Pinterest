const crearModal = (id) => {

  const myModal = $('<div class="row"></div>');
  const ekis = $('<button type="button" class="close" data-dismiss="modal"> &times;</button>');
  const modalDialog = $('<div class="modal-dialog"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><button type="button" class="btn btn-guardar" data-dismiss="modal"><i class="glyphicon glyphicon-pushpin"></i> Guardar</button></div>');

  const modalBody = $('<div class="modal-body"></div>');
  const imgRecibida = $('<img src="">');
  const divGuardadoDesde = $('<div class="border"><div class="row"><div class="col-xs-1"><img src=""></div><div class="col-xs-9"><p>Guardado desde <br><strong>Behance</strong></p></div><div class="col-xs-2"><button type="button" class="btn" data-dismiss="modal">Visitar</button></div></div></div>');
  const divUsuario = $('<div class="border"><div class="row"><div class="col-xs-2"><img src=""></div><div class="col-xs-10"><p><strong>'+"Arabela(nombre de usuario)"+'</strong> lo ha guardado en <strong>'+"Web UI"+'</strong></p></div></div></div>');
  const comentarios = $('<h4><strong>Comentarios</strong></h4>');

  ekis.on("click", ()=>{
    $('.root').empty();
    $('.root').append(Header());
    $(".root").append(Dashboard());
  });

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
