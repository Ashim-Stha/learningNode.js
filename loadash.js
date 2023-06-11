const _ = require("lodash");
const arr = [1, [2, [3, [4]]]];
console.log(arr);
const newarr = _.flattenDeep(arr);
console.log(newarr);
