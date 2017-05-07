var http = require('http');

function requestHandler(request, response) {
    if(request.url === "/") {
        response.end("Welcome to the homepage");
    }
    else if (request.url === "/about") {
        response.end("welcome to the about page");
    }
    else {
        response.end("error! file not found");
    }
}

var server = http.createServer(requestHandler);
server.listen(9000);