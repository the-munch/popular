const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/seed.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/munch-popular', (req, res) => {
  db.Dish.find((err, Dish) => {
    if (err) return console.error(err);
    res.send(Dish);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
