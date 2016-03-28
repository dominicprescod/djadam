var mongoose = require('mongoose');

    var eventSchema = mongoose.Schema({
      photo: String,
      description: String,
      link: String
    });


// EXPORT
module.exports = mongoose.model('Event', eventSchema);
