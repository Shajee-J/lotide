const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};



 const countLetters = function(str) { 
  let results = {};
 
  for (let i = 0; i < str.length; i++) {
   
    const letter = str[i];
   
    if (results[letter]) {
      
      results[letter] += 1;
    
      } else {
        results[letter] = 1;
      }
    }
  
 
  return results;
};



// test values:

const trialObject = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

console.log(countLetters("light"));