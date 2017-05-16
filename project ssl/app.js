var express = require('express'),
    http = require('http'),
    https = require('https'),
    fs = require('fs');

var app = express();

app.get('/', function (req, res) {
    res.send("This is the page");
});

var httpsOptions = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

http.createServer(app).listen(80, function() {
    console.log("listening to 80 port");
});

https.createServer(httpsOptions, app).listen(443, function () {
    console.log("listening to 443 port");
});