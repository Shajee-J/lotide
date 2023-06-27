const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log( `🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};



const head = (x, y) => {
  if (x === []) {
    return undefined
  } else {
  return x[0] 
  }
};




//           test code:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, -1);
assertEqual("working", "working");


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


