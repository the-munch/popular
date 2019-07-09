var db = require('./index.js');
var faker = require('faker');
var mongoose = require('mongoose');

// var popularDish = new mongoose.Schema({
//     name: String,
//     image: String,
//     price: Number,
//     revCount: Number,
//     phoCount:Number
//   });


//   var Dish = db.model('Dish', popularDish);

  var seed = function seedData(){ 

    for (var i = 0 ; i < 100; i++) {
        var names = faker.lorem.word();
        var image = `https://popularlist.s3-us-west-1.amazonaws.com/munch${i}.jpg`;
        var ranNum = function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
            };

        var popDish = new Dish ({
            name: names,
            image: image,
            price: ranNum(35),
            revCount: ranNum(30),
            phoCount: ranNum(200),
        })

        popDish.save(function (err) {
        if (err) return console.error(err);
        console.log('Saved!')
            });
        }
    }
    seed()
