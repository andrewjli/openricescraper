var http = require("http");
var url = require("url");
var parser = require("./parser");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var param = url.parse(request.url).search;
        if(pathname != "/favicon.ico") {
            console.log("Request received for " + pathname)

            parser.start(param, response);
        }
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start = start;