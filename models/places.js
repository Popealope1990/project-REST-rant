const mongoose =  require('mongoose')

const placeSchema = new mongoose.Schema({
  name:{type: String, required: true},
  pic: {type: String, default: `./public/images/default-picture.jpg`},
  cuisines:{type: String, required: true},
  city:{type: String, default: 'Nowhereville'},
  state:{type: String, default: 'Merica'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)