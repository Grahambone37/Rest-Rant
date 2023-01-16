const router = require('express').Router()
const placesArray = require('../models/places-array')


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
    placesArray.push(req.body)
    res.redirect('/places')
})

module.exports = router