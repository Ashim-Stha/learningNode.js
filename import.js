const names = require("./export");
//alternative
const { ashim, chandrey } = require("./export");
const sayHi = require("./export1");

console.log(names);
sayHi(names.ashim);
sayHi(names.chandrey);

console.log(ashim);
