const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
    return false;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};





const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const demo1 = { size: "big", color: "blue"};
const demo2 = { size: "big", color: "blue"};



const eqObjects = function(obj1, obj2) {
  let result = false;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {

      if ((Array.isArray(obj1[key])) && (Array.isArray(obj2[key]))) {
        return eqArrays((obj1[key]), (obj2[key]));
      } else if (keys1[key] === keys2[key]) {
        result = true;
      } else {
        result = false;
      }
    }

  } else {
    result = false;
  }
  return result;
};

module.exports = eqObjects

// test values:

console.log(assertEqual((eqObjects(shirtObject, anotherShirtObject)), true));
console.log(assertEqual((eqObjects(shirtObject, longSleeveShirtObject)), false));
console.log(assertEqual((eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)), true));
console.log(assertEqual((eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)), false));
console.log(assertEqual((eqObjects(demo1, demo2)), true));