const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const eqArrays = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

















//           test code:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, -1);
assertEqual("working", "working");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);