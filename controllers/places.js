const router = require('express').Router()
//commenting out stuff instead of deleting for now
const db = require('../models')
//lodash helps with the post route
const _ = require('lodash')

router.get('/', (req, res) => {
    db.Place.find()
        .then(places => {
            res.render("places/index", { places })
            console.log(places)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})  

router.post('/', (req, res) => {
    // lodash makes it so each value thats undefined in the form gets the default value
    req.body = _.mapValues(req.body, v => v == ''? undefined: v)
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
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
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