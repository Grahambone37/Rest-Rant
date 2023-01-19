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

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        res.render('places/edit', {place: placesArray[id], id})
    }
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        res.render('places/show', { place: placesArray[id], id })
    }
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

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        if (!req.body.pic) {
            req.body.pic = '/images/default-food.jpg'
        }
        if (!req.body.city) {
            req.body.city = "Anytown"
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        placesArray[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        placesArray.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router