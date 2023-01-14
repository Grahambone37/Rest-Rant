const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>page title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
            </head>
            <body>
                {html.children}
                <a href="/">Back To Home</a>
            </body>
        </html>
    )
}

module.exports = Def