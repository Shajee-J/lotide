const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};



 const countLetters = function(str) { 
  let results = {};
 
  // alternate method to isolating the letters in the string using normal for... loop:
  // for (let i = 0; i < str.length; i++) {
  //  const letter = str[i];

  for (let letter of str){
   
    if (results[letter]) {
      results[letter] += 1;
    
      } else {
        results[letter] = 1;
      }
    }
  
  return results;
};



// test values:

const trialObject = 
{
s: 1, 
h: 1, 
a: 1, 
j: 1, 
e: 2
}


console.log(assertEqual(Object.values(countLetters("shajee")).toString(), Object.values(trialObject).toString()));