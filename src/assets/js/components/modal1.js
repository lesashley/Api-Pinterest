//
// const crearModal = (src,id) => {
//   console.log(id);
//
//   getJSON("https://api.pinterest.com/v1/pins/" +id+ "/?access_token=AWRwPAI2kL0bx9lF9nybb8GcnDgdFM6gaE1AuhBEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Coriginal_link%2Cboard%2Ccreated_at%2Ccounts%2Cimage%2Ccreator%2Cmedia", (err, json)  => {
//     if (err) {
//         return alert(err.message);
//     }
//     state.data = json.data;
//                   console.log(state.data.note);
//                   console.log(state.data.board.name);
//                   console.log(state.data.creator.first_name);
//     });
//   const myModal = $('<div class="row"></div>');
//   const ekis = $('<button type="button" class="close btn-close" data-dismiss="modal"> &times;</button>');
//   const modalDialog = $('<div class="modal-dialog"></div>');
//   const modalContent = $('<div class="modal-content"></div>');
//   const modalHeader = $('<div class="modal-header"><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><img width="34" src="assets/img/more.png" /><button type="button" class="btn btn-guardar" data-dismiss="modal"><i class="glyphicon glyphicon-pushpin"></i> Guardar</button></div>');
//
//   const modalBody = $('<div class="modal-body"></div>');
//   const imgRecibida = $('<img src="'+src+'" class="img-responsive">');
//   const divGuardadoDesde = $('<div class="border"><div class="row"><div class="col-xs-1"><img src=""></div><div class="col-xs-9"><p>Guardado desde <br><strong> '+state.nameBoard+'</strong></p></div><div class="col-xs-2"><button type="button" class="btn" data-dismiss="modal">Visitar</button></div></div></div>');
//   const divUsuario = $('<div class="border"><div class="row"><div class="col-xs-2"><img src=""></div><div class="col-xs-10"><p><strong>'+state.nameUser+'</strong> lo ha guardado en <strong>'+"Web UI"+'</strong></p></div></div></div>');
//   const comentarios = $('<h4><strong>Comentarios</strong></h4>');
//
//   ekis.on("click", ()=>{
//     $('.root').empty();
//     $('.root').append(Header());
//     $(".root").append(Dashboard());
//   })
//
//   modalBody.append(imgRecibida);
//   modalBody.append(divGuardadoDesde);
//   modalBody.append(divUsuario);
//   modalBody.append(comentarios);
//
//   modalContent.append(modalHeader);
//   modalContent.append(modalBody);
//
//   modalDialog.append(modalContent);
//
//   myModal.append(ekis);
//   myModal.append(modalDialog);
//
//   return myModal;
// }
