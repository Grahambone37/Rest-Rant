const router = require('express').Router()
//commenting out stuff instead of deleting for now
const db = require('../models')
//lodash helps with the post route
const _ = require('lodash')

router.get('/', (req, res) => {
    db.Place.find()
        .then(places => {
            res.render("places/index", { places })
            //console.log(places)
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
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
        })
})
   
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
      
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedPlace => {
            console.log(updatedPlace)
            res.redirect(`/places/${req.params.id}`)
        })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(deletedRestRant => {
            console.log(deletedRestRant)
            res.redirect('/places')
        })
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(foundPlace => {
            res.render('places/edit', { place: foundPlace })
        })
})
   
//not sure what these are for yet
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router