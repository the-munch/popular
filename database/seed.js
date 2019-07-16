const db = require('./index.js');
const faker = require('faker');
const mongoose = require('mongoose');

var popularDish = new mongoose.Schema({
  restuarant: {
    name: String,
    price: Number,
    revCount: Number,
    phoCount: Number,
    image: [String],
  },
});

var Dish = mongoose.model('Dish', popularDish);

var seed = function seedData() {
    var count = 1;
    var count1 = 2;
    var count2 = 3;
    var count3 = 4;
    var count4 = 5;
    var count5 = 6;
    var count6 = 7;
    var count7 = 8;
    var count8 = 9;
    var count9 = 10;
  for (let i = 1; i < 100; i++) {
    var names = faker.lorem.word();
    var image1 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count}.jpg`;
    var image2 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count1}.jpg`;
    var image3 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count2}.jpg`;
    var image4 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count3}.jpg`;
    var image5 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count4}.jpg`;
    var image6 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count5}.jpg`;
    var image7 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count6}.jpg`;
    var image8 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count7}.jpg`;
    var image9 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count8}.jpg`;
    var image10 = `https://popularlist.s3-us-west-1.amazonaws.com/munch${count9}.jpg`;
    var ranNum = function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
    var popDish = new Dish ({
      restuarant: {
        name: names,
        price: ranNum(35),
        revCount: ranNum(30),
        phoCount: ranNum(200),
        image: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10],
      },
    });
      count = count + 1;
      count1 = count1 + 2;
      count2 = count2 + 3;
      count3 = count3 + 4;
      count4 = count4 + 5;
      count5 = count5 + 6;
      count6 = count6 + 7;
      count7 = count7 + 8;
      count8 = count8 + 9;
      count9++;

      if (count >= 100|| count1 >= 100|| count2 >= 100|| count3 >= 100|| count4 >= 100|| count5 >= 100|| count6 >= 100|| count7 >= 100|| count8 >= 100) {
      count = 1;
      count1 = 2;
      count2 = 3;
      count3 = 4;
      count4 = 5;
      count5 = 6;
      count6 = 7;
      count7 = 8;
      count8 = 9;
      count10 = 10
    }

    popDish.save(function (err){
      if (err) return console.error(err);
      console.log('Saved!')
    });
  }
};
seed();

console.log('Node Running in Seed.js');
module.exports.Dish = Dish
