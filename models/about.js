var mongoose = require('mongoose');

var aboutSchema = mongoose.Schema({
  info: {type: String, required: true},
  pic: {type: String, required: true}
},{collection: 'about'});

var About = mongoose.model('About', aboutSchema);

module.exports = About;
