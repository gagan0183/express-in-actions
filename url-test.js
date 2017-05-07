var url = require('url');


var parsedUrl = url.parse('http://www.example.com/profile?name=barry');
console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.query);