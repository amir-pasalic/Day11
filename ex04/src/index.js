var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];

  for (var i = 0; i < 3; i++) {
    var temp = [];
    temp.push(newMonitorsList[i], i + 1);

    monitorsList.push(temp);
  }

  return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
