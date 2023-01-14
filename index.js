//setup for express and .env
require('dotenv').config()
const express = require('express')
const app = express()

//jsx files setup
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//link back to /public setup
app.use(express.static('public'))

//link to places.js
app.use('/places', require('./controllers/places'))

//home page
app.get('/', (req, res) => {
    res.render('home')
})

//error 404 page
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

//port
app.listen(process.env.PORT, () => {
    console.log("It's working")
})
  



               