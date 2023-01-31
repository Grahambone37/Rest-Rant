const React = require('react')
const Def = require('../default')

function show(data) {
    let commentList = []
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        //console.log(data.place.comments)
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        commentList = data.place.comments.map(comment => {
            return (
                <div className='border' key={comment.id}>
                    <h2 className='rant'>{comment.rant ? 'Rant! (╯°□°）╯︵ ┻━┻' : 'Rave! (⌐■_■)'}</h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                </div>
            )
        })
    } else {
        console.log(data.place.comments)
        commentList = (
            <h3 className='inactive'>
                No comments yet!
            </h3>
        )
    }
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
                        {rating}
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
                <h4>{commentList}</h4>
                <br></br>
                <div>
                    <h2 className='slightly-blue'><u>Add A Comment!</u></h2>
                    <form method="POST" action={`/places/${data.place.id}/rant`}>
                        <div className='form-group'>
                            <label htmlFor='author'>Comment Author Name</label>
                            <input className='form-control' type="text" id="author" name="author"></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Comment</label>    
                            <textarea className='form-control' type="text" id="content" name="content"></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='stars'>Star Rating (low/high)</label> 
                            <input className='rating' type="range" id="stars" name="stars" step="0.5" min="0" max="5"></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='rant'>Rant?</label> 
                            <input type="checkbox" id="rant" name="rant"></input>
                        </div>
                        <input type="submit" className="btn btn-primary" defaultValue="Add Comment"></input>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show