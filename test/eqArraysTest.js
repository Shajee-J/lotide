const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");




//           test code:


assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);

assertEqual(eqArrays([22, 1, 33], [22, 1, 33]), true);

assertEqual(eqArrays([1, 3, 6], [1, 2, 3]), false);