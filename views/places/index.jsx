const React = require('react')
const Def = require('../default')

function places(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <h1>Rest Rant(s)</h1>
            {placesFormatted}
        </Def>
    )
}

module.exports = places