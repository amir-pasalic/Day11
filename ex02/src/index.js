var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46];
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];
var temps = [monday, tuesday, wednesday, thursday, friday];
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  for (var i = 0; i < 5; i++) {
    var sum = 0;
 for (var j = 0; j < 4; j++) {
      sum += newTemps[i][j];
    }
    averageDayTemp.push(sum / 4);
  }
 return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
