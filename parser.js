var http = require("http");
var cheerio = require("cheerio");
var esprima = require("esprima")
var async = require("async")

function start(param, response) {
	//console.log(param);
	param = param.substring(1);
	var regex = /x\=22\.[0-9]*\&y\=11[3-4]\.[0-9]*/;

	if(regex.test(param)) {
		var params = param.toString().split("&");
		params[0] = params[0].toString().split("=");
		params[1] = params[1].toString().split("=");

		var base = "/english/restaurant/sr1.htm?"
		var suffix = "&z=10&wxh=5x5&currentlocation=1"
		var queryurl = base + "x=" + params[0][1] + "&y=" + params[1][1] + suffix;
		var options = {
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
				var $ = cheerio.load(data);

				var res_arr = [];

				$("div.poiblock").each(function() {
					var link = $(this).children(".ib").children(".sr1_poi_title").children(".sr1_title");
					var text = link.text();
					var href = link.attr("href");
					

					var img = $(this).children(".sr1_content").children(".PR10").children(".rel_pos").children("a").children(".sr1_doorphoto");
					var src = img.attr("style");
					console.log(src);
					src = src.substring(15, src.length-2);

					res_arr.push({ 'name': text, 'link': href, 'img': src });
				});



				var counter = 0
				async.each(res_arr, function(restaurant, callback) {
					href = restaurant.link;
					var option = {
						host: "www.openrice.com",
						headers: {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13' },
						path: href
					}

					http.get(option, function(result) {
						var data = ""
						result.on("data", function(chunk){
							data += chunk;
						});

						result.on("end", function() {
							var $$ = cheerio.load(data);
							var coords = esprima.parse($$(".pg_main > script").first().text());
							restaurant.x = coords.body[0].expression.right.value;
							restaurant.y = coords.body[1].expression.right.value;
							//console.log(restaurant.x + "," + restaurant.y);
							counter++;
							callback();
						});
					});
				}, function (err) {
					if(err) return next(err);
					//console.log(counter)

					console.log(res_arr);

					response.writeHead(200, {"Content-Type": "text/plain"});
					response.write(JSON.stringify(res_arr));
					response.end();
				});
			});
		});
	}
}

function parse(response, data) {

}


exports.start = start;