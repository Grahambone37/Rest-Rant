const React = require('react')
const Def = require('../default')

function newForm() {
    return (
        <Def title="Add a Rest-Rant">
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor='name'>Place Name</label>
                        <input type="text" id='name' name="name" required></input>
                    </div>
                    <div>
                        <label htmlFor='pic'>Place pic</label>
                        <input type="url" id='pic' name="pic"></input>
                    </div>
                    <div>
                        <label htmlFor='city'>Place city</label>
                        <input type="text" id='city' name="city"></input>
                    </div>
                    <div>
                        <label htmlFor='state'>Place state</label>
                        <input type="text" id='state' name="state"></input>
                    </div>
                    <div>
                        <label htmlFor='cuisines'>Place cuisines</label>
                        <input type="text" id='cuisines' name="cuisines" required></input>
                    </div>
                    <input type="submit" value="Add Place" ></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm