var express = require('express');

var ALLOWED_IPS = [
        "127.0.0.1"
];

var api = express.Router();
api.use(function (req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if(!userIsAllowed) {
        res.status(401).send("Not authorize");
    }
    else {
        next();
    }   
});

api.get("/users", function (req, res) {
    console.log("api is users");
});

api.post("/user", function (req, res) {
   console.log("api is user"); 
});

api.get("/messages", function (req, res) {
   console.log("api is messages"); 
});

api.post("/message", function (req, res) {
   console.log("api is message"); 
});

module.exports = api;