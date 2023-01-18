const React = require('react')
const Def = require('../default')

function places(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>
                    <a href={`/places/${index}`} >
                        {place.name}
                    </a>
                </h2>
                <p>
                    {place.cuisines}
                </p>
                <img className='rest-rant-pic' src={place.pic} alt={place.name}></img>
                <p>
                    Located in {place.city}, {place.state}
                </p>
                <hr></hr>
            </div>
        )
    })
    return (
        <Def title="Rest-Rant(s)">
            <main>
                <h1>Rest Rant(s)</h1>
                <hr></hr>
                <div className='rest-rants'>
                    {placesFormatted}
                </div>
                <div>
                    <a href="/places/new">
                        <button className='btn btn-primary'>Add a Rest-Rant</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = places