const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const db = require('../database/index.js')
var bodyParser = require('body-parser')
var morgan = require('morgan')

//console.log

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, '..', 'client','dist')))




app.get('/munch-popular', (req, res)=>{
        db.Dish.find((err, Dish) => {
        if (err) return console.error(err);
        res.send(Dish)
    })
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))