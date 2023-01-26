const mongoose = require('mongoose')

const { Schema } = mongoose

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type: String, default: "/images/default-food.jpg" },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown" },
    state: { type: String, default: "USA" },
    founded: { type: Number, default: new Date().getFullYear() }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place