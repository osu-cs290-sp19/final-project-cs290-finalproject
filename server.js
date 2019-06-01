/*
 * Server side JS controlling page redirect and request queries 
 *
 * name:  Bryce Hahn, Michael Friesen
 * email: hahnb@oregonstate.edu, friesemi@oregonstate.edu
 */

var path = require("path");
//var http = require("http");	//initiallize the server to require node.js http functions
var express = require("express"); //using express to create/manipulate server requests
//var fs      = require("fs");
//var html    = "";

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

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    console.log("This is serving the file");
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('*', function (req, res, next) {
    console.log("Something done went wrong");
});


function listenHandler() {

}

// Node.js server setup.
//var server = http.createServer(requestHandler);
//server.listen(3000, listenHandler);	//open port 3000, if this port is used, try 3001, 3002, ect..
app.listen(port, function () {
    console.log("Server is listening on port: ", port);
});