const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

const results1 = takeUntil(data1, x => x < 0);  //  function(x) { if (x < 0){ return x} };  ===   x => x < 0;
console.log(assertArraysEqual(results1, ([ 1, 2, 5, 7, 2 ])));

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, (["I've" , "been" , "to", "Hollywood"])));