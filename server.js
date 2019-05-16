/*
 * Server side JS controlling page redirect and request queries 
 *
 * name:  Bryce Hahn
 * email: hahnb@oregonstate.edu
 */

var http = require("http");	//initiallize the server to require node.js http functions

/* 
 * This function is called each time the server
 * running encounters a request package from a client.
 * The server will then identify which file was requested
 * and thus provide the requested sources.
 * Params: req as a var that holds the desired path, resp as the return value for the client
 */
function requestHandler(req, resp) {
	console.log("Server received a request: ", req.method);
	console.log("Path: ", req.url);

	//send a request responce.
	resp.statusCode = 200;
	resp.setHeader('Content-Type', 'text/html');
	resp.write('public/index.html');

	resp.end();
}


function listenHandler() {

}

// Node.js server setup.
var server = http.createServer(requestHandler);
server.listen(3000, listenHandler);	//open port 3000, if this port is used, try 3001, 3002, ect..