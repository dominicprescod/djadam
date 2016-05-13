var mongoose = require('mongoose');

var soundSchema = mongoose.Schema({
  embeded: {type: String, required: true}
},{collection: 'sound'});

var Sound = mongoose.model('Sound', soundSchema);

module.exports = Sound;
