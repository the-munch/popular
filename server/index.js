const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))
app.get('/', (req, res)=>{
    res.send('ok')
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))