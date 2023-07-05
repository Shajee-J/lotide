const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};




const countOnly = function (allItems, itemsToCount) {
  // to store new arr
  let num = {};
  // to loop accross allItems array
  for (let i = 0; i < allItems.length; i++) {
    // since objects cant directly use an index, but can use strings as "keys"
    const item = allItems[i];
    // will rotate the "key" item value as the for loop itterates over the given array until something fits.
    // whenever "key" value corralates to a property in the object that has the value "true"...the if statement will be read as true and activate.
    if (itemsToCount[item]) {

      //** request assitance **/
      // an empty object is read as truthy and will activate. "item" or rather value at the current index of allItems is also added to the num array

      if (num[item]) {
        // every time a duplicate of an element in the arr triggers, 1 will be added the qty of that item being read.
        num[item] += 1;
        // if no duplicates are triggered, that it will be assumed there is at least 1 of said item.
      } else {
        num[item] = 1;
      }
    }
  }
  // return new oject, with vlaues stating how many times its respective "key" was read in the array
  return num;
};



module.exports = countOnly


// testing values

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);