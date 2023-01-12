const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>page title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def