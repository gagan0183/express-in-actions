var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));

var filePath = path.join(__dirname + "/static", "Celebssas.jpg");
app.use(function (request, response, next) {  
   response.sendFile(filePath, function(error) {
       if(error) {
           next(new Error("error sending the file"));
       }
   }); 
});

app.use(function(err, req, res, next) {
    console.log(err);
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Internal server error");
});

app.listen(9000, function() {
    console.log("server is running at port 9000");
});