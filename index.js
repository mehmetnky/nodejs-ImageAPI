var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Task = require('./api/models/imageModel'), //created model loading here
MongoClient = require('mongodb');
bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
const connection = mongoose.createConnection('mongodb+srv://admin:admin@cluster0-owkna.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
mongoose.connect('mongodb+srv://admin:admin@cluster0-owkna.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }); 

const uri = "mongodb+srv://admin:admin@cluster0-owkna.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.send("Hello worldssss!");
  });

var qRoutes = require('./api/routes/imageRoutes'); //importing route
//var uRoutes = require('./api/routes/userRoutes'); //importing route
qRoutes(app); //register the route
//uRoutes(app);
app.use(session({
    secret: 'imageApp',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
    mongooseConnection: connection
    })
}));

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Authentication Learning | User Login RESTful API server started on: ' + port);