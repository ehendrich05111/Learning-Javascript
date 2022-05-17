const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
sayHi(data.items[0]);
sayHi(data.items[1]);
sayHi(data.singlePerson.name);
