var header = document.getElementById("main-header");
var jsontext = document.getElementById("json");
var tablesection = document.getElementById("tableSection");
var foundIndex = null;

document.getElementById("main-form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Submit");
  updateTable();
});

// TESTING

function updateTable() {
  console.log("Documnet loaded");

  // newRow += "<div class='table-element'>Name</div>";
  // newRow += "<div class='table-element'>" + 1 + "</div>";
  // newRow += "<div class='table-element'>" + 2 + "</div>";
  // newRow += "</div>";
}

function updateTable() {
  var enteredName = document.getElementById("name").value;
  var found = false;
  var tableContainer = document.getElementsByClassName("table-container");

  for (var i = 3; i <= 7; i++) {
    if (resultArray[i][1] == enteredName) {
      found = true;
      foundIndex = i;
      break;
    }
  }

  // TESTING ---- replace found by true
  if (found) {
    var newElement;
    var newRow;

    console.log(tableContainer);

    newRow = document.createElement("div");
    newRow.className = "table-row";
    var itemname = null;
    for (var i = 0; i < 4; i++) {
      newElement = document.createElement("div");
      newElement.className = "table-element";
      switch (i) {
        case 0:
          itemname = "USN";
          break;
        case 1:
          itemname = "Name";
          break;
        case 2:
          itemname = resultArray[1][resultArray[1].length - 21];
          break;
        case 3:
          itemname = resultArray[1][resultArray[1].length - 22];
          break;
      }

      newElement.innerHTML = i;
      newRow.appendChild(newElement);
      tableContainer[0].appendChild(newRow);
    }
    for (var i = 0; i < 4; i++) {
      newElement = document.createElement("div");
      newElement.className = "table-element";
      newElement.innerHTML = resultArray[foundIndex][i];
      newRow.appendChild(newElement);
      tableContainer[0].appendChild(newRow);
    }
  } else {
    tableContainer.innerHTML = "Item Not Found";
  }

  tablesection.style.display = "block";

  // if (found) {
  //   var t = "";
  //   // First ROW
  //   t += "<tr>";
  //   t += "<th>USN</th>";
  //   t += "<th>Name</th>";
  //   // Last Date
  //   t += "<th>" + resultArray[1][resultArray[1].length - 21] + "</th>";
  //   // Last second date
  //   t += "<th>" + resultArray[1][resultArray[1].length - 22] + "</th>";
  //   t += "</tr>";
  //   // Second ROW
  //   var tr = "<tr>";
  //   tr += "<td>" + resultArray[foundIndex][0] + "</td>";
  //   tr += "<td>" + resultArray[foundIndex][1] + "</td>";
  //   tr += "<td>" + resultArray[foundIndex][2] + "</td>";
  //   tr += "<td>" + resultArray[foundIndex][3] + "</td>";
  //   tr += "</tr>";
  //   t += tr;
  //   document.getElementById("dataTable").innerHTML += t;
  //   tablesection.style.display = "block";
  // } else {
  //   tablesection.innerHTML += "Name not found";
  //   tablesection.style.display = "block";
  // }
}
