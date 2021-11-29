// const os = require('os');
// const cpu = os.cpus()[0].model;
// const cpuCount = os.cpus().length;
// console.log(cpu, 'Number of cores is - ', cpuCount);

const   http = require('http'),
        url = require('url'),
        path = require('path'),
        fs = require('fs');

// let app = http.createServer((req, res) => {
//     res.end('Hello World!');
// });
//
// app.listen('80', '127.0.0.1');
// console.log('Success');

http.createServer(function(request,response) {
}).on('listening', function() {
    console.log(`Started at ${this.address().port} port`)
});