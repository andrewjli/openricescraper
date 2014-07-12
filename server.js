var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var param = url.parse(request.url).search;
        console.log("Request received for " + pathname)
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start = start;