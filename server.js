/*
 * Server side JS controlling page redirect and request queries 
 *
 * name:  Bryce Hahn, Michael Friesen
 * email: hahnb@oregonstate.edu, friesemi@oregonstate.edu
 */

var path = require("path");
var express = require("express"); //using express to create/manipulate server requests
var exhbs = require("express-handlebars");

/* 
 * This function is called each time the server
 * running encounters a request package from a client.
 * The server will then identify which file was requested
 * and thus provide the requested sources.
 * Params: req as a var that holds the desired path, resp as the return value for the client
 */
//function requestHandler(req, resp) {
//	console.log("Server received a request: ", req.method);
//	console.log("Path: ", req.url);

//	fs.readFile("./public/index.html", function(err, html) {
//		if (err) {
//			throw err;
//		}
//		//send a request responce.
//		resp.writeHeader(200, {"Content-Type": "text/html"});
//		resp.write(html);
//		resp.end();
//	});
//}

var app  = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.status(200).render('gamePage');
});

app.get('/customize', function (req, res, next) {
    res.status(200).render('customizePage');
})

app.get('/rules', function (req, res, next) {
    res.status(200).render('rulesPage');
})

app.get('*', function (req, res, next) {
    res.status(404).render('404Page');
});

// Node.js server setup.
//var server = http.createServer(requestHandler);
//server.listen(3000, listenHandler);	//open port 3000, if this port is used, try 3001, 3002, ect..
app.listen(port, function () {
    console.log("Server is listening on port: ", port);
});