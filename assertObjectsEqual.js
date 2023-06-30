const eqObjects = function(obj1, obj2) {
  let result = false;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {

      if ((Array.isArray(obj1[key])) && (Array.isArray(obj2[key]))) {
        return eqArrays((obj1[key]), (obj2[key]))
        }
      
      else if (keys1[key] === keys2[key]) {
        result = true; } 
        
        else {
        result = false;
      }
    }

  } else {
    result = false;
  }
  return result;
};


const assertObjectsEqual = function(actual, expected) {
  console.log("reading objects in just a sec :D!")
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
  console.log(`✅✅✅ Assertion Passed: Actual:[${inspect(actual)}] === Expected:[${inspect(expected)}]`);
} else if (!eqObjects(actual, expected)) {
  console.log(`🛑🛑🛑 Assertion Failed: Actual[:${inspect(actual)}] !== Expected:[${inspect(expected)}]`);
}
return '';
};



const pets = {bird: "Chi", cat: "Lenny", turtle: "lawrence"} 
const pets2 = {cat: "Lenny", bird: "Chi",  turtle: "lawrence"} 

assertObjectsEqual(pets, pets2)