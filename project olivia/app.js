var express = require('express');
var path = require('path');
var apiRouter = require('./routes/api_router');

var app = express();

var staticPath = path.resolve(__dirname, "static");
app.use("/image ", express.static(staticPath));

app.use("/api", apiRouter);

app.listen(9000, function() {
    console.log("server is running at 9000");
});