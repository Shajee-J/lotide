

const tail = (array1) => {
  let y = []
  for (let i = 0; i < array1.length; i++) {
    if (array1.length === 0 || array1.length === 1) {
      return [];
    }
    else {
      y.push(array1[i]);
    }
  }
  y.splice(0, 1)
  return y;
};



module.exports = tail
