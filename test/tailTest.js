
const tail = require("../tail")
const assert = require('chai').assert;




//               Test Case: 


const words = ["Yo Yo", "Lighthouse", "Labs"]

const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {

  it("should return a length of 3", () => {
    assert.deepEqual(words.length, 3);
  });

  it("should return first elemnent as 'Lighthouse'", () => {
    assert.deepEqual(tail(words)[0], 'Lighthouse');
  });

  it("should return second element as 'Labs'", () => {
    assert.deepEqual(tail(words)[1], 'Labs');
  });

  it("should return a length of 2", () => {
    assert.deepEqual(result.length, 2);
  });

  it("should return first elemnent as 'Lighthouse'", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });

  it("should return second element as 'Labs'", () => {
    assert.deepEqual(result[1], 'Labs');
  });

});