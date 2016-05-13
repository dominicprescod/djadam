var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  link: {type: String, required: true},
  pic: {type: String, required: true}
},{collection: 'client'});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
