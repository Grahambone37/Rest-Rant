require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
//MONGO_URI DOESN'T WORK UNLESS SET FROM localhost to 127.0.0.1
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("mongoose connected to:", process.env.MONGO_URI)
})

module.exports.Place = require('./places-array')