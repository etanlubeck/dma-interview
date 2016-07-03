var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', express.static( path.join(__dirname, 'static') ));

app.listen(app.get('port'), function(){
  if (process.env.NODE_ENV === 'development'){
    console.log('Listening on port: ' + app.get('port'));
  } else {
    console.log('Server Running');
  }
});
