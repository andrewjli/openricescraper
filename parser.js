var http = require("http");

function start(param, response) {
	//console.log(param);
	param = param.substring(1);
	var regex = /x\=22\.[0-9]*\&y\=11[3-4]\.[0-9]*/;

	if(regex.test(param)) {
		var params = param.toString().split("&");
		params[0] = params[0].toString().split("=");
		params[1] = params[1].toString().split("=");

		//var base = "http://www.openrice.com/english/restaurant/sr1.htm?"
		var base = "/english/restaurant/sr1.htm?"
		var suffix = "&z=10&wxh=5x5&currentlocation=1"

		var queryurl = base + "x=" + params[0][1] + "&y=" + params[1][1] + suffix;

		var options = {
			//hostname: queryurl,
			host: "www.openrice.com",
			headers: {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13' },
			path: queryurl
		}
		
		http.get(options, function(result) {
			var data = "";
			result.on("data", function(chunk){
				data += chunk;
			});

			result.on("end", function() {
				//console.log(data)
				
				response.writeHead(200, {"Content-Type": "text/html"});
	            response.write(data);
	            response.end();
			});
		});
	}
}


exports.start = start;