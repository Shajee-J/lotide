const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else 
  {
    return false;
  }
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}] `);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
  return '';
};

// test value:

console.log (assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
