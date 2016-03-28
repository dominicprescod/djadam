var express           = require('express'),
    bodyParser        = require('body-parser'),
    methodOverride    = require('method-override'),
    mongoose          = require('mongoose'),
    passport          = require('passport'),
    session           = require('express-session'),
    app               = express(),
    port              = process.env.PORT || 3000;


    app.use(express.static('public'));









    app.listen(port, function() {
        console.log('LISTEN TO ME ON PORT ' + port);
    });
