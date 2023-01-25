const router = require('express').Router()
//commenting out stuff instead of deleting for now
//const placesArray = require('../models/places-array.js')
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
        .then(places => {
            res.render("places/index", { places: places })
            console.log(places)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})  

// need if !req.body.etc to all be undefined to get default
router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = undefined
    }
    if (!req.body.city) {
        req.body.city = undefined
    }
    if (!req.body.state) {
        req.body.state = undefined
    }
    if (!req.body.founded) {
        req.body.founded = undefined
    }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    /*let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        res.render('places/show', { place: placesArray[id], id })
    }*/
    res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
    /*let id = Number(req.params.id)
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
    }*/
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    /*let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        placesArray.splice(id, 1)
        res.redirect('/places')
    }*/
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    /*let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!placesArray[id]) {
        res.render('error404')
    } else {
        res.render('places/edit', {place: placesArray[id], id})
    }*/
    res.send('GET edit form stub')
})

//not sure what these are for yet
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router