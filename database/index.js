var mongoose = require('mongoose');
var faker = require('faker');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/popular', {useNewUrlParser: true});



db.on('error', console.error.bind(console, 'connection error:'));


module.exports = db