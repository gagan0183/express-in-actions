var fs = require('fs');

var options = {encoding: "UTF-8"};
fs.readFile('file.txt', options, function(err, data) {
    if(err) {
        console.log("error while reading it");
        return;
    }
    console.log(data.match(/x/gi).length + " letter x's");
});
