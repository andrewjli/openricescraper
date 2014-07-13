# OpenRice Scraper

This is a basic node app that scrapes data off [OpenRice](http://www.openrice.com.hk/)
search results based on RESTful requests provided to the server. This was written
at the Codeaholics July 2014 Hackathon for Wearables in less than 48 hours.

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
`node index.js`

## Usage
The app responds to HTTP GET requests. In order to get a response, you have to use
the right parameters. Here's an example query:

`http://openricescraper.herokuapp.com/?x=22.3172964&y=114.16761939&keyword=dim%20sum`

`x` and `y` are required, and `keyword` is entirely optional. The values for `x`
and `y` need to be somewhat close to Hong Kong, otherwise the app will return an
error.

The data that is returned by the server is in the form of an array of JSON objects,
with each object containing 5 key-pair values:

1. `name` -- The name of the restaurant
2. `link` -- The path of the restaurant's OpenRice page (mainly for internal use)
3. `img`  -- The restaurant's door image (if any)
4. `x`    -- The x coordinate of the restaurant
5. `y`    -- The y coordinate of the restaurant

The data returned for the above query should look something like this:
```JSON
[
  {
    "name": "Ming Court",
    "link": "/english/restaurant/sr2.htm?shopid=12120&tc=sr1",
    "img": "http://static2.orstatic.com/userphoto/photo/0/LN/0049W8C8974CE8D28C6C4An.jpg",
    "x": "22.3181403808015",
    "y": "114.168135523796"
  },
  {
    "name": "珍心素食豆漿豆腐花專門店",
    "link": "/english/restaurant/sr2.htm?shopid=25920&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/3/2XO/00KVF7E9279BF3D5F50D31n.jpg",
    "x": "22.3152833",
    "y": "114.1695491"
  },
  {
    "name": "The Dining Room",
    "link": "/english/restaurant/sr2.htm?shopid=135154&tc=sr1",
    "img": "http://static3.orstatic.com/userphoto/photo/4/3NZ/00Q2JTACE6073F14F2C691n.jpg",
    "x": "22.318055",
    "y": "114.168665"
  },
  {
    "name": "Pier 88",
    "link": "/english/restaurant/sr2.htm?shopid=3540&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/0/8/0001O24345B8B502714608n.jpg",
    "x": "22.317596",
    "y": "114.169356"
  },
  {
    "name": "Little Sheep",
    "link": "/english/restaurant/sr2.htm?shopid=12826&tc=sr1",
    "img": "http://static3.orstatic.com/userphoto/photo/3/2J1/00HZCZ23B12A7E27C3C6B8n.jpg",
    "x": "22.3191130405381",
    "y": "114.168945550919"
  },
  {
    "name": "London Restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=7509&tc=sr1",
    "img": "http://static3.orstatic.com/userphoto/photo/2/1T6/00CVFD30D6F6863BA8ECA1n.jpg",
    "x": "22.317306",
    "y": "114.170133"
  },
  {
    "name": "Majesty Chinese Restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=42540&tc=sr1",
    "img": "http://static4.orstatic.com/userphoto/photo/1/1GF/00ACTEFEAE3AF3DB266C5Fn.jpg",
    "x": "22.318535",
    "y": "114.169269"
  },
  {
    "name": "奇華美食中心",
    "link": "/english/restaurant/sr2.htm?shopid=89299&tc=sr1",
    "img": "http://static2.orstatic.com/userphoto/photo/4/3NZ/00Q2M8E9900F917F9D6176n.jpg",
    "x": "22.318647",
    "y": "114.167989"
  },
  {
    "name": "Cheers Restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=10586&tc=sr1",
    "img": "/images/v4/previewimg/NoAvatar_restaurant.png",
    "x": "22.317962",
    "y": "114.169282"
  },
  {
    "name": "Maxim's MX",
    "link": "/english/restaurant/sr2.htm?shopid=17263&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/0/X/0006OX807A360CBB55EFDDn.jpg",
    "x": "22.318647",
    "y": "114.169964"
  },
  {
    "name": "Foo Lum Restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=9365&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/0/I/0003OA86C892E7C8E95EB6n.jpg",
    "x": "22.316257",
    "y": "114.169732"
  },
  {
    "name": "Fuk Yuen Hotpot Seafood Restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=9902&tc=sr1",
    "img": "http://static4.orstatic.com/userphoto/photo/0/J/0003TE047E5E8B14D087DCn.jpg",
    "x": "22.318647",
    "y": "114.169964"
  },
  {
    "name": "Foo Lum",
    "link": "/english/restaurant/sr2.htm?shopid=14066&tc=sr1",
    "img": "http://static1.orstatic.com/userphoto/photo/1/14W/0082Y0541B769B51FF39BBn.jpg",
    "x": "22.317604",
    "y": "114.169354"
  },
  {
    "name": "Mr. Beef Seafood restaurant",
    "link": "/english/restaurant/sr2.htm?shopid=2376&tc=sr1",
    "img": "http://static3.orstatic.com/userphoto/photo/2/1T0/00CU8T8AF2239372071020n.jpg",
    "x": "22.317256",
    "y": "114.168276"
  },
  {
    "name": "文財包點",
    "link": "/english/restaurant/sr2.htm?shopid=51309&tc=sr1",
    "img": "/images/v4/previewimg/NoAvatar_restaurant.png",
    "x": "22.3193214667426",
    "y": "114.170233011246"
  }
]
```
