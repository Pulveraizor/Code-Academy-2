const   http = require('http'),
        url = require('url'),
        path = require('path'),
        fs = require('fs');


module.exports = http.createServer(function(request,response) {
    response.end('The server is now running you douche');
}).on('listening', function() {
    console.log(`Started at ${this.address().port} port`)
});