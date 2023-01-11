require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('The Home Page')
})


app.get('*', (req, res) => {
    res.send('Page Not Found')
})

app.listen(process.env.PORT, () => {
    console.log("It's working")
})





