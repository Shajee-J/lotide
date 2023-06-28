const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else 
  {
    return false;
  }
};


console.log(eqArrays([1, 2, 3], [1, 2, 3]), true);
