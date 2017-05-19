var express = require('express');
var path = require('path')
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var options = {
    index: "index.html"
};

app.use('/', express.static(rootPath + '/app', options));

app.listen(8000);
console.log('Listening on port 8000...');