const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <div>
                    <h1>Error 404: Page Not Found</h1>
                    <img src="/images/cat-in-carpet.jpg" alt="cat-under-carpet"></img>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404