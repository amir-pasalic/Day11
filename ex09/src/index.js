function myBouncer(arr) {
  var Falsy = [false, null, 0, "", undefined, NaN];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < Falsy.length; j++) {
      if (arr[i] == Falsy[j]) {
        arr.splice(i, 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string" && isNaN(arr[i])) arr.splice(i, 1);
  }
  return arr;
}

console.log(myBouncer([7, "ate", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;
