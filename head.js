const assertEqual = require('./assertEqual');



const head = (x) => {
  if (x === []) {
    return undefined;
  } else {
    return x[0];
  }
};




module.exports = head;


