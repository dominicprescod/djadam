var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  comment: {type: String, required: true}
},{collection: 'contact'});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
