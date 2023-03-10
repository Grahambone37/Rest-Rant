const mongoose = require('mongoose')

const { Schema } = mongoose

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type: String, default: "/images/default-food.jpg" },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown" },
    state: { type: String, default: "USA" },
    founded: { type: Number, default: new Date().getFullYear(), min: [1673, "Surely not that old?!"], max: [new Date().getFullYear(), "Hey, this year is in the future!"] },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})
              
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
        
const Place = mongoose.model('Place', placeSchema)

module.exports = Place