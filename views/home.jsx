const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/BBQ-Picture.jpg" alt="BBQ Picture" className="home-picture" />
                <div>
                  Photo By: <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home