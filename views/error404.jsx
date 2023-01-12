const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
            <img src="https://http.cat/404" alt="Error 404, Page Not Found" width="100%"></img>
            </main>
        </Def>
    )
}

module.exports = error404