# OpenRice Scraper

This is a basic node app that scrapes data off [OpenRice](http://www.openrice.com.hk/)
search results based on RESTful requests provided to the server. This was written
primarily by [@andrewjli](https://github.com/andrewjli), with input from [@tomtau](https://github.com/tomtau),
at the Codeaholics July 2014 Hackathon for Wearables in less than 48 hours.

The app was written alongside [andrewjli/openriceglass](https://github.com/andrewjli/openriceglass)
and is designed to retrieve only the necessary information for that glassware.
Additional information will require you to modify the parser.

## Installation
1. `git clone https://github.com/andrewjli/openricescraper.git`
2. `npm install`
3. `node index.js`

### Dependencies
As you'd expect of a node app, this requires you to have [node.js](http://nodejs.org/)
and [npm](https://www.npmjs.org/) (hopefully you installed that when you installed node).

The app also has a number of additional dependencies that npm should automatically
install when you run `npm install`.
* [async](https://github.com/caolan/async)
* [cheerio](https://github.com/cheeriojs/cheerio)
* [esprima](https://github.com/ariya/esprima)

## Running
The app is running on [Heroku](http://openricescraper.herokuapp.com/), but if
you wish to run your own instance, you can run it (after installing it) with
`node index.js`. The app runs on `localhost:8888` by default, but you can modify
the port in `server.js`.

## Usage
The app responds to HTTP GET requests. In order to get a response, you have to use
the right parameters. Here's an example query:

`http://openricescraper.herokuapp.com/?x=22.3172964&y=114.16761939&keyword=dim%20sum`

`x` and `y` are required, and `keyword` is entirely optional. The values for `x`
and `y` need to be somewhat close to Hong Kong, otherwise the app will return an
error.

The data that is returned by the server is in the form of an array of JSON objects,
with each object containing 5 key-pair values:

1. `name`     -- The name of the restaurant
1. `link`     -- The path of the restaurant's OpenRice page (mainly for internal use)
1. `img`      -- The URL of the restaurant's OpenRice door image (if any)
1. `address`  -- The address of the restaurant
1. `score`    -- The overall score for the restaurant on OpenRice (if any)
1. `x`        -- The x coordinate of the restaurant
1. `y`        -- The y coordinate of the restaurant
1. `distance` -- The distance (in kilometres) between the requested coordinates and the coordinates of the restaurant.

The data returned for the above query should look something like this:
```JSON
[
  {
    "name": "Ming Court",
    "link": "/english/restaurant/sr2.htm?shopid=12120&tc=sr1",
    "img": "http://static2.orstatic.com/userphoto/photo/0/LN/0049W8C8974CE8D28C6C4An.jpg",
    "address": "6/F, Langham Place Hotel Hong Kong, 555 Shanghai Street, Mong Kok",
    "score": 3.9,
    "x": "22.3181403808015",
    "y": "114.168135523796",
    "distance": 0.1078
  },
  {
    "name": "珍心素食豆漿豆腐花專門店",
    "link": "/english/restaurant/sr2.htm?shopid=25920&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/3/2XO/00KVF7E9279BF3D5F50D31n.jpg",
    "address": "Shop C, G/F, 124-128 Portland Street, Mong Kok",
    "score": 3.7,
    "x": "22.3152833",
    "y": "114.1695491",
    "distance": 0.2992
  },
  ...
  {
    "name": "文財包點",
    "link": "/english/restaurant/sr2.htm?shopid=51309&tc=sr1",
    "img": "/images/v4/previewimg/NoAvatar_restaurant.png",
    "address": "G/F, 22 Argyle Street, Mong Kok",
    "score": null,
    "x": "22.3193214667426",
    "y": "114.170233011246",
    "distance": 0.3507
  }
]
```

## License
MIT License. See [LICENSE](./LICENSE) for the exact details.
