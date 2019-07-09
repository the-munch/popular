var mongoose = require('mongoose');
var faker = require('faker');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/munch-popular', {useNewUrlParser: true});



db.on('error', console.error.bind(console, 'connection error:'));

var popularDish = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    revCount: Number,
    phoCount:Number
  });


  var Dish = mongoose.model('Dish', popularDish);

module.exports.Dish = Dish