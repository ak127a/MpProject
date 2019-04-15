var header = document.getElementById("main-header");
var jsontext = document.getElementById("json");
var tablesection = document.getElementById("tableSection");
var foundIndex = null;

window.onload = function() {
  header.style.transform = "translate3d(0, 0, 0)";
  tablesection.style.display = "none";
};

function foo() {
  var enteredName = document.getElementById("name").value;
  var found = false;
  // tablesection.style.display = "block";

  for (var i = 3; i <= 6; i++) {
    if (resultArray[i][1] == enteredName) {
      found = true;
      foundIndex = i;
      break;
    }
  }

  if (found) {
    var t = "";
    // First ROW
    t += "<tr>";
    t += "<th>USN</th>";
    t += "<th>Name</th>";
    // Last Date
    t += "<th>" + resultArray[1][resultArray[1].length - 20] + "</th>";
    // Last second date
    t += "<th>" + resultArray[1][resultArray[1].length - 21] + "</th>";
    t += "</tr>";
    // Second ROW
    var tr = "<tr>";
    tr += "<td>" + resultArray[foundIndex][0] + "</td>";
    tr += "<td>" + resultArray[foundIndex][1] + "</td>";
    tr += "<td>" + resultArray[foundIndex][2] + "</td>";
    tr += "<td>" + resultArray[foundIndex][3] + "</td>";
    tr += "</tr>";
    t += tr;
    document.getElementById("dataTable").innerHTML += t;
    tablesection.style.display = "block";
  } else {
    tablesection.innerHTML += "Name not found";
    tablesection.style.display = "block";
  }
}
