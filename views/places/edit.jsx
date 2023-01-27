const React = require('react')
const Def = require('../default')

function edit_form(place) {
    return (
        <Def title="Edit Rest-Rant">
            <main>
                <h1>Edit a Place</h1>
                <form method="POST" action={`/places/${place.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' type="text" id='name' name="name" defaultValue={place.place.name} required></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place pic</label>
                            <input className='form-control' type="text" id='pic' name="pic" defaultValue={place.place.pic}></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>Place city</label>
                            <input className='form-control' type="text" id='city' name="city" defaultValue={place.place.city}></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>Place state</label>
                            <input className='form-control' type="text" id='state' name="state" defaultValue={place.place.state}></input>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Place cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name="cuisines" defaultValue={place.place.cuisines} required></input>
                    </div>
                    <input type="submit" defaultValue="Edit Place" className='btn btn-primary'></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form