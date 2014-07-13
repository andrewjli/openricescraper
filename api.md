# OpenRice Search "API" Documentation

The primary search URL for OpenRice (in English) is:

`http://www.openrice.com/english/restaurant/sr1.htm`

## Parameters
These are some of the known query parameters that can be used with the search URL.
Most of these parameters are optional, but some of them have to be used together.
These are noted

### tc
*(Optional)*  
Unknown effect.
##### Known values:
* `sr1quick`

### s
*(Optional)*  
Unknown effect.
##### Known values:
* `1`

### region
*(Optional)*  
Unknown effect. Presumably something to do with region.
##### Known values:
* `0`

### inputstrwhat
*(Optional)*  
Search keywords (e.g. restaurant name, cuisine, dishes)
##### Known values:
* `Dim Sum`
* `KFC`
* etc.

### inputstrwhere
*(Optional)*  
Location search filter
##### Known values:
* `Central`
* `Mong kok`
* etc.

### searchSort
*(Optional)*  
Sort search results
##### Values:
* `1`  -- Overall Score
* `2`  -- Smile
* `4`  -- Price
* `10` -- Cry
* `20` -- Review(s)
* `21` -- Environment
* `23` -- Value for Money
* `25` -- Taste
* `27` -- Hygiene
* `29` -- Service
* `31` -- Overall *[Default]*
* `42` -- Name

### cuisine_id
*(Optional)*  
Comma-separated list of ID numbers that specify the type(s) of cuisine to search for
##### Known values:
* `1002` -- Guangdong
* `1008` -- Sichuan
* `1010` -- Beijing
* `1011` -- Shanghai
* `1023` -- Anhui
* `1999` -- All Chinese
* `2001` -- Korean
* `2004` -- Thai
* `2009` -- Japanese
* `2999` -- All Asian
* `3006` -- Italian
* `3999` -- All European
* `4002` -- Mexican
* `4004` -- Brazilian
* `4005` -- Argentinian
* `4999` -- All North & South American
* `5001` -- African
* `5004` -- Egyptian
* `5005` -- Moroccan
* `5999` -- All Others
* `6000` -- International *[Included in 5999]*

### district_id
*(Optional)*  
Comma-separated list of ID numbers that specify the districts to search within
##### Known values:
* `1012` -- Aberdeen
* `1999` -- Hong Kong
* `2008` -- Tsim Sha Tsui

### dishes_id
*(Optional)*  
Comma-separated list of ID numbers that specify the type(s) of dishes to search for
##### Known values:
* `1001` -- Hot Pot
* `1003` -- Bakery
* `1014` -- Dessert
* `1019` -- BBQ
* `1032` -- Buffet

### amenity_id
*(Optional)*  
Comma-separated list of ID numbers that specify what type of restaurant to search for
##### Known values:
* `1005` -- Dim Sum Restaurant

### theme_id
*(Optional)*  
Comma-separated list of ID numbers that specify the occasions a restaurant needs to cater to
##### Known values:
* `1` -- Romantic Dining

### price
*(Optional)*  
Comma-separated list of ID numbers that specify a price range to search within
##### Values:
* `1` -- Below $50
* `2` -- $51-$100
* `3` -- $100-$200
* `4` -- $201-$400
* `5` -- $401-$800
* `6` -- Above $800
##### Example:
`price=1,2,3` will search for restaurants with prices below $200

### condition
*(Optional)*  
Comma-separated list of IDs that specify additional features required of a restaurant
##### Known values:
* `booking` -- Phone Reservation
* `onlinebooking` -- Online Reservation
* `wifi` -- WiFi

#### award
*(Optional)*  
Sub-category of **condition**. Specifies whether to search for award winning restaurants
##### Known values:
* `20` -- Award winner

### Co-ordinates
*(Optional)*  
A set of parameters that **have to all be specified** at the same time to provide
filtering based on exact location.

#### currentlocation=1
Enables the "Current Location" filter.
##### Values:
* `1` -- Enables Current Location

##### Example:
`currentlocation=1`

#### x
*x* coordinate
##### Example:
`x=22.3172964`

#### y
*y* coordinate
##### Example:
`y=114.16761939`

#### z
Unknown effect. Presumably the z coordinate or elevation. Exact effect is unclear
but it definitely has an effect on the search results
##### Example:
`z=10`

#### wxh
Unsure. Width by height? Not sure what this affects,
but results do change if this is different
##### Example:
`wxh=5x5`
