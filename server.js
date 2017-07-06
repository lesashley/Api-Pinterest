// const express = require('express');
// const app = express();
//
// app.use('/', express.static('public'));
//
// app.listen(3000, () => {
//   console.log("Listening on 3000");
// });
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));
app.set('', __dirname + '/');
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.render('index');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
