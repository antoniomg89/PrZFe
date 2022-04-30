const express = require('express');
let moment = require('moment-timezone');
const app = express();

app.set('port', (process.env.PORT || 4000));

app.get('/getFecha', (req, res) => {
  console.log('Petición de fecha.');

  res.send(getFecha());

});

app.get('/getFechayhora', (req, res) => {
  console.log('Petición de fecha y hora.');

  res.send(getFechayHora());

});

app.get('/getFechaCompleta', (req, res) => {
  console.log('Petición de fecha completa.');

  res.send(getFechaCompleta());

});

app.get('/getTimestamp', (req, res) => {
  console.log('Petición de timestamp.');

  res.send(getTimestamp());

});

app.get('/getHora', (req, res) => {
  console.log('Petición de hora.');

  res.send(getHora());

});
  
app.listen(app.get('port'), () => {
  console.log('Estado: ON');

})


function getFecha() {
  let fecha = moment().tz("Europe/Madrid").format('DD/MM/YYYY');

  return fecha;
}

function getFechayHora() {
  let fechacompleta = getFecha() + ' a las ' + getHora();

  return fechacompleta;
}

function getFechaCompleta() {
  let fechacompleta = getFecha() + ' a las ' + getHora() + ';' + getTimestamp();

  return fechacompleta;
}

function getHora() {
  let hora = moment().tz("Europe/Madrid").format('HH:mm:ss:SS');

  return hora;
}

function getTimestamp () {
  let timestamp = (moment().valueOf()).toString();

  return timestamp;
}

exports.getFechaCompleta = getFechaCompleta
