var express   = require('express'),
    passport  = require('passport'),
    router    = express.Router(),
    User      = require('../models/user.js'),
    Events    = require('../models/events.js');

// Sending the Events for the Homepage
router.get('/stuff', function(req,res){
  console.log('got some requestsssss');
  res.redirect('/');
});


router.get('/adam', function(req,res){
  var adam = new User({
    email: 'adam@adam.com',
    password: 'adam'
  });
  adam.password = adam.generateHash(adam.password);
  adam.save(function(){
    res.redirect('/');
  });
});


router.get('/getevents', function(req, res){
  Events.find(function(err, data){
    res.send(data);
  });
});



// Export
module.exports = router;
