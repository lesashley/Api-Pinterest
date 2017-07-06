// console.log(state.pinesID.length);
var item='523473156664921590';

// for (var i = 0; i <state.data.length; i++) {
// state.data[i]
// }

$.getJSON("https://api.pinterest.com/v1/pins/"+item+"/?access_token=AWRwPAI2kL0bx9lF9nybb8GcnDgdFM6gaE1AuhBEI1kRKQBDLwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmetadata%2Ccolor%2Coriginal_link%2Cboard%2Ccreated_at%2Ccounts%2Cimage%2Ccreator%2Cmedia", (response) => {

    state.data = response.data;

    console.log(state.data.note);
    console.log(state.data.board.name);
    console.log(state.data.creator.first_name);

if(state.data.attribution!==undefined){
  console.log(state.data.attribution.title);
  console.log(state.data.attribution.provider_name);
    console.log(state.data.attribution.provider_favicon_url);
    console.log(state.data.attribution.author_name);
}
//a veces de por si esta vacio metadata
  if (state.data.metadata.link!==undefined) {
    console.log(state.data.metadata.link.favicon);
    console.log(state.data.metadata.link.site_name)
    console.log(state.data.metadata.link.title);
    console.log(state.data.metadata.link.description);
  }else {
    if(state.data.metadata.product!==undefined) {
      console.log(state.data.metadata.product.name);

  }
  }
   // a veces en vez de tener article tiene product

  if(state.data.metadata.article!==undefined){
    console.log(state.data.metadata.article.name);
   console.log(state.data.metadata.article.published_at);
     console.log(state.data.metadata.article.description);
  }




});
