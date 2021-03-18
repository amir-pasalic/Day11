var myNestedArray = [];

function myNestedFunction(arr) {
  myNestedArray.push(...arr);
  return myNestedArray;
}
console.log(myNestedFunction([["Toblerone", 5],["Milka", 3],]));
module.exports = myNestedFunction;
