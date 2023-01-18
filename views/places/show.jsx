const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div className="row">
                    <div className='pic'>
                        <img src={data.place.pic} alt="Rest-Rant pic"></img>
                    </div>
                    <div className='description'>
                        <h2>Rating</h2>
                        <h4>currently unrated</h4>
                        <h2>Description</h2>
                        <h4>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h4>
                    </div>
                </div>
                <hr></hr>
                
            </main>
        </Def>
    )
}

module.exports = show