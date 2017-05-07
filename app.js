var express = require('express');

var app = express();


app.get("/", function(request, response) {
    response.send("Hello world");
});

app.listen(9000, function() {
    console.log("App start succcessfully");
});