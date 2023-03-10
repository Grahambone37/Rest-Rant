const React = require('react')
const Def = require('../default')

function newForm(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert alert-danger'>
                {data.message}
            </h4>
        )
    }
    return (
        <Def title="Add a Rest-Rant">
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' type="text" id='name' name="name" required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place pic</label>
                        <input className='form-control' type="url" id='pic' name="pic"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>Place city</label>
                        <input className='form-control' type="text" id='city' name="city"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Place state</label>
                        <input className='form-control' type="text" id='state' name="state"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Place cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name="cuisines" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className='form-control' type='number' id='founded' name='founded' defaultValue={new Date().getFullYear()}></input>
                    </div>
                    <input type="submit" value="Add Place" className='btn btn-primary'></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm