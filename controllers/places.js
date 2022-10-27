const router = require('express').Router()
const places = require('../models/places.js')

//Index
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

//New
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place: places[id], id})
  }
})


//Create
router.post('/', (req, res) => {
  if (!req.body.pic) {
    //Default image if on is not provided
    req.body.pic = 'images/default-picture.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'NowhereVille'
  }
  if (!req.body.state) {
    req.body.state = 'Merica'
  }
  places.push(req.body)
  res.redirect('/places')
})

//Delete
router.delete('/:id', (req, res) => {
  let id= Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
  res.redirect('/places')
  }
})

// Edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/edit',{ place: places[id], id})
  }
})

//Update
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      if (!req.body.pic) {
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})





module.exports = router