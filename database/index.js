var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// mongoose.connect('mongodb://172.17.0.2/munch-popular', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));