var http = require("http");
var url = require("url");
var parser = require("./parser");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var param = url.parse(request.url).search;
        if(pathname != "/favicon.ico") {
            console.log("Request received for " + pathname + " with " + param)
            if(param != null) {
                parser.start(param, response);
            } else {
                response.writeHead(416, {"Content-Type": "text/plain"});
                response.write("Bad Request");
                response.end();
            }
        }
    }
    
    http.createServer(onRequest).listen(process.env.PORT || 8888);
    console.log("Server started");
}

exports.start = start;