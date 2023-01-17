const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def title="Rest-Rant Home-Page">
            <main>
                <h1>Home-Page</h1>
                <div>
                    <img src="/images/pasta-egg-flour.jpg" alt="cooking ingredients"></img>
                </div>
                <a href="/places">
                    <button className='btn btn-primary'>Rest-Rant(s)</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home