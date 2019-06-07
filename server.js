/*
 * Server side JS controlling page redirect and request queries 
 *
 * name:  Bryce Hahn, Michael Friesen
 * email: hahnb@oregonstate.edu, friesemi@oregonstate.edu
 */

var path = require("path");
var express = require("express"); //using express to create/manipulate server requests
var exhbs = require("express-handlebars");
var MongoClient = require("mongodb").MongoClient;

/* 
 * This function is called each time the server
 * running encounters a request package from a client.
 * The server will then identify which file was requested
 * and thus provide the requested sources.
 * Params: req as a var that holds the desired path, resp as the return value for the client
 */

var app  = express();
var port = process.env.PORT || 3000;

//This section creates the mongodb url to be used to access mongodb shell/database


var mongoHost = process.env.HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

//The actual url is here
var mongoURL = 'mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}';
var db = null;

//Set handlebars as the mainview engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Serve up all files in public
app.use(express.static('public'));

//temporary data served from scores.json
var scoreData = require("./scores");

//Defines the page that is rendered designated by the path
app.get('/', function (req, res, next) {
    res.status(200).render('gamePage');
});

app.get('/customize', function (req, res, next) {
    res.status(200).render('customizePage');
});

app.get('/rules', function (req, res, next) {
    res.status(200).render('rulesPage');
});

app.get('/scores', function (req, res, next) {
    res.status(200).render('scoresPage', { scores: scoreData });
});

app.get('*', function (req, res, next) {
    res.status(404).render('404Page');
});

// Node.js server setup
//app.listen(port, function () {
//    console.log("Server is listening on port: ", port);
//    console.log(mongoURL);
//});

//I'm leaving this commented out until database integration is ready
MongoClient.connect(mongoURL, function (err, client) {
    if (err)
        throw err;
    db = client.db(mongoDBName);
    app.listen(port, function(){
        console.log("Server is listening on port: ", port);
    });
});

