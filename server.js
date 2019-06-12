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

//Defines the page that is rendered designated by the path
app.get('/', function (req, res, next) {
    res.status(200).render('gamePage');
    var diceCollection = db.collection('dice');
    var diceArray = diceCollection.find({});
    diceArray.toArray(function (err, diceArr) {
        if (err)
            res.status(500).send({ error: "couldn't find the dice" });
        else {
            for (var i = 0; i < diceArr.length ; i++) {
                console.log("==The dice are ", diceArr[i]);
            }
            //render 6 random dice
        }
    });
});

app.get('/rules', function (req, res, next) {
    res.status(200).render('rulesPage');
});

//makes a collection of the scores and generates score page based on scores
app.get('/scores', function (req, res, next) {
    var scoreCollection = db.collection('scores');
    var scoreArray = scoreCollection.find({});
    scoreArray.toArray(function (err, scoreArr) {
        if (err)
            res.status(500).send({ error: "couldn't retrieve the scores" });
        else {
            for(var i = 0; i < scoreArr.length; i++){
                console.log("==Scores are: ", scoreArr[i]);
            }
            res.status(200).render('scoresPage', scoreArr);   //scores might need to be an object
        }
    });
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
