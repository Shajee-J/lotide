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

const middle = function (arr) {
let newArr = []
  if ((arr.length === 1) || (arr.length === 2)) {
    newArr = []
  }
  else if (arr.length % 2 !== 0) {
    newArr.push(arr[Math.floor(arr.length / 2)])
  }
  else if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor(arr.length / 2) -1])   
    newArr.push(arr[Math.floor(arr.length / 2)])   
  }
return newArr
};

// test value:

console.log (assertArraysEqual([1, 2, 3], [1, 2, 3]), true);

console.log (assertArraysEqual((middle([1])), []));
console.log (assertArraysEqual((middle([1, 2])), []));

console.log (assertArraysEqual((middle([1, 2, 3])), [2]));
console.log (assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]));

console.log (assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]));
console.log (assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]));






