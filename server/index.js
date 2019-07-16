const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/seed.js');
var app = express();
// var http = require('http');
// var httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer();

const port = 4500;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

// var gallery = 'http://localhost:4400';
// var header = 'http://localhost:4300';
// var reservation = 'http://localhost:4200';

app.get('/munch-popular', (req, res) => {
  const random = Math.floor(Math.random() * 100);
  db.Dish.find((err, Dish) => {
    if (err) return console.error(err);
    res.send(Dish);
  }).limit(10).skip(random);
});

// app.all('/munch-popular', function(req, res) {
//   console.log('I just want to see this');
//   proxy.web(req, res, {target: gallery });
// });

// app.all('/reservation', function(req, res) {
//   console.log('I just want to see this');
//   proxy.web(req, res, {target: reservation });
// });

// app.all('/munch/header', function(req, res) {
//   console.log('I just want to see this');
//   proxy.web(req, res, {target: header });
// });

app.listen(4500,() => console.log(`Example app listening on port ${port}!`));
