var express = require('express');
var logger = require('morgan');
var http = require('http');

var path = require('path');

var app = express();

app.use(logger('short'));
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.set('views', path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(function(request, response, next) {
//     var minute = (new Date()).getMinutes();
//     if(minute % 2 === 0) {
//         next();
//     }
//     else {
//         response.statusCode = 403;
//         response.end("not authorize");
//     }
// });

app.get("/", function (request, response) {
    response.render("index", {
        "message": "Hey everyone this is my web page"
    });
});

app.get("/about", function (request, response) {  
    response.end("welcome to about page");
});

app.get("/weather", function (request, response) {  
    response.end("The current weather");
});

app.get("/hello/:who", function (request, response) {  
    response.end("Hello " + request.params.who);
});

app.use(function (request, response) {  
    response.statusCode = 404;
    response.end("404");
});

app.listen(9000);