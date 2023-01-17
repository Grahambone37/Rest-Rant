const router = require('express').Router()
const placesArray = require('../models/places-array.js')


router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    res.render('places/index',
        {
            places: placesArray
        }
    )
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = '/images/default-food.jpg'
    }
    if (!req.body.city) {
        req.body.city = "Anytown"
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    placesArray.push(req.body)
    res.redirect('/places')
})

module.exports = router