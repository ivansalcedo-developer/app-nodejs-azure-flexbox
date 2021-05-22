const morgan = require('morgan');
const express = require('express');
const app = express();
const path = require('path');

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs') //configuracion  de motor de plantillas
app.engine('html', require('ejs').renderFile); //cambiar la terminacion ejs por html


// app.use(express.static('/routes'));
app.use(require('./routes'));



//static files
// app.use('/public');
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
