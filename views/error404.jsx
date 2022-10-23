const React = require('react')

const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                <img src="/images/404-photo.jpg" alt="Good Vibes Only Photo" />
                <div>
                  Photo By: <a href="https://unsplash.com/@markadriane">Mark Adriane</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404