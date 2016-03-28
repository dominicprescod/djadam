var express           = require('express'),
    bodyParser        = require('body-parser'),
    methodOverride    = require('method-override'),
    mongoose          = require('mongoose'),
    passport          = require('passport'),
    session           = require('express-session'),
    app               = express(),
    port              = process.env.PORT || 3000;


    app.use(express.static('public'));

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/djadam';
mongoose.connect(mongoUri);

// ==================================================
// passport essentials
app.use(session({secret: 'oijansoidubniausdbias'}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);
// ==================================================

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

    var routesController = require('./controllers/routes.js');
    app.use('/', routesController);


// Makes a variable login available in your templates.
app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});

var eventSeedController = require('./controllers/eventSeed.js');
app.use('/eventSeed', eventSeedController);


// Connect & Listen
mongoose.connection.once('open',function(){
  app.listen(port, function() {
      console.log('LISTEN TO ME ON PORT ' + port);
  });
});
