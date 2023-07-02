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



// testt arrays:
const fullName = [`John`, `Jacob`, `Smith`,] 

const serialCode = [`2xa1`, `3xa1`, `4xa1`]

const members = [`Ruby`, `Weiss`, `Blake`, `Yang`]







const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);


// test values:

const intials = map(fullName, word => word[0]);
console.log(assertArraysEqual((intials), ([`J`, `J`, `S`])));

const batchNumber = map(serialCode, word => word[0]);
console.log(assertArraysEqual((batchNumber), ([`2`, `3`, `4`])));

const teamName = map(members, word => word[0]);
console.log(assertArraysEqual((teamName), ([`R`, `W`, `B`, `Y`])));







