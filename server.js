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
    var randIdx = 0;
    var renderedDie = [];
    var diceCollection = db.collection('dice');
    var diceArray = diceCollection.find();
    diceArray.drop();
    loadDice(diceCollection);
    diceArray = diceCollection.find().toArray(function (err, diceArr) {
        if (err)
            res.status(500).send({ error: "Couldn't find the dice" });
        else {
            for (var i = 0; i < diceArr.length ; i++) {
                randIdx = (Math.floor(Math.random() * 6));
                renderedDie.push(diceArr[randIdx]);
                console.log(diceArr[i]);
            }
            console.log("==Here are the dice to be rendered: ", renderedDie);
            res.status(200).render('gamePage', {renDice: renderedDie});
        }
    });
});

//render rules page
app.get('/rules', function (req, res, next) {
    res.status(200).render('rulesPage');
});

//makes a collection of the scores and generates score page based on scores
app.get('/scores', function (req, res, next) {
    var scoreCollection = db.collection('scores');
    var scoreArray = scoreCollection.find();
    scoreArray.toArray(function (err, scoreArr) {
        if (err)
            res.status(500).send({ error: "couldn't retrieve the scores" });
        else {
            res.status(200).render('scoresPage', { scores: scoreArr });
        }
    });
});

//adds the final score
app.post('/scores/addScore', function (req, res, next) {
    if (req.body && req.body.name) {
        var scoreCollection = db.collection('scores');
        var finalScore = {
            name: "21",
            score: req.body.score
        };
        scoreCollection.insertOne({
            $push: {scores: finalScore}
        });
        console.log("==Added score is: ", finalScore);
    }
    else
        next();
});

app.get('*', function (req, res, next) {
    res.status(404).render('404Page');
});

//this will manually load the dice into the collection
function loadDice(diceCollection) {
    //value is set to value-1 for index
    diceCollection.insertMany([
            {
                "value": "1",
                "image": "https://imgur.com/dNYSOcQ"
            },
            {
                "value": "2",
                "image": "https://imgur.com/a/OhF2s6K"
            },
            {
                "value": "3",
                "image": "https://imgur.com/a/yO6w2Du"
            },
            {
                "value": "4",
                "image": "https://imgur.com/a/Pc6EYZ6"
            },
            {
                "value": "5",
                "image": "https://imgur.com/a/fmM667F"
            },
            {
                "value": "6",
                "image": "https://imgur.com/a/M9BeygM"
            }
    ]);
}

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