let http = require('http');
let dt = require('./myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.write('The date and time currently :' +dt.myDateTime());
    res.end('Hello World');
}).listen(8000);
