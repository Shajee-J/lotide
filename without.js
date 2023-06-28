const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
    return false;
  }
};



const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed");
  }
  return '';
};


const without = function(source, remove) {
  let newArr = []; //source.map(x => x * 1);
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== remove[i]) {
      newArr.push(source[i]);
    }
  }
  console.log(source);
  return newArr;
};




// test value:

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
