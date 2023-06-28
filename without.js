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

const included = function(elm, arr) {
let result = false
  for (i = 0; i < arr.length; i++){
  if (elm === arr[i]){
result = true
  }
}
return result
};




const without = function(source, remove) {
  let newArr = [];                                                                
  for (let i = 0; i < source.length; i++) {
  if (!included(source[i], remove)) 
  newArr.push(source[i])  
  }
  console.log(source);
  return newArr;
};




// test value:

console.log(assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []));
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));


