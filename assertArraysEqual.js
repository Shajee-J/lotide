const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else 
  {
    return false;
  }
};



const assertArraysEqual = function(actual, expected){
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed");
  }
  return ''
};



// test value:

console.log (assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
