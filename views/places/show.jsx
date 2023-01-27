const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="rowNotBootstrap">
                    <div className='pic'>
                        <img src={data.place.pic} alt="Rest-Rant pic"></img>
                        <h4>Located in {data.place.city}, {data.place.state}</h4>
                    </div>
                    <div className='description'>
                        <h1>{data.place.name}</h1>
                        <h2 className='slightly-blue'>Rating</h2>
                        <h4>currently unrated</h4>
                        <h2 className='slightly-blue'>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                        <br></br>
                        <div className='rowNotBootstrap'>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h2 className='slightly-blue'>Comments</h2>
                <h4>No comments yet!</h4>
                <br></br>
            </main>
        </Def>
    )
}

module.exports = show