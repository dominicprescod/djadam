var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
  embeded: {type: String, required: true}
},{collection: 'video'});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;
