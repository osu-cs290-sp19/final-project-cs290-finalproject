/*
 * Server side JS controlling page redirect and request queries
 *
 * name:  Bryce Hahn, Michael Friesen
 * email: hahnb@oregonstate.edu, friesemi@oregonstate.edu
 */

var path        = require("path");
var express     = require("express"); //using express to create/manipulate server requests
var exhbs       = require("express-handlebars");
var MongoClient = require("mongodb").MongoClient;
var bodyParser  = require("body-parser");
//var cards       = require("./public/cards.js");
//var cards       = require("cardsJS");
//var $           = require("jQuery");

/*
 * This function is called each time the server
 * running encounters a request package from a client.
 * The server will then identify which file was requested
 * and thus provide the requested sources.
 * Params: req as a var that holds the desired path, resp as the return value for the client
 */

var app  = express();
var port = process.env.PORT || 3090;

//This section creates the mongodb url to be used to access mongodb shell/database
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

//The actual url is here
var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.use(bodyParser.json());

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
    var collection = db.collection('dice');
    collection.find({}).toArray(function (err, dice) {
        if (err)
            res.status(500).send({ error: "couldn't find the dice" });
        else {
            console.log(dice);
        }
    });
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

//mongo connection is created and server is started here
MongoClient.connect(mongoUrl, function (err, client) {
    if (err) {
        throw err;
    }
    db = client.db(mongoDBName);
    app.listen(port, function () {
        console.log("== Server listening on port", port);
    });
});
