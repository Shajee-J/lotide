


const middle = function (arr) {
  let newArr = [];
  if ((arr.length === 1) || (arr.length === 2)) {
    newArr = [];
  } else if (arr.length % 2 !== 0) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor(arr.length / 2) - 1]);
    newArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return newArr;
};


module.exports = middle




