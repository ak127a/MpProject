var header = document.getElementById("main-header");
var jsontext = document.getElementById("json");
var tablesection = document.getElementById("tableSection");
var foundIndex = null;

document.getElementById("main-form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Submit");
  updateTable();
});

function updateTable() {
  var enteredName = document.getElementById("name").value;
  var found = false;
  var tableContainer = document.getElementsByClassName("table-container");

  if (tableContainer[0].innerHTML != null) {
    console.log("nothing there");
  }

  for (var i = 3; i <= 8; i++) {
    if (resultArray[i][1].toLowerCase() == enteredName.trim().toLowerCase()) {
      found = true;
      foundIndex = i;
      break;
    }
  }

  if (found) {
    var newElement;
    var newRow;

    // TESTING !!!!
    if (tableContainer[0].innerHTML != null) {
      tableContainer[0].innerHTML = null;
    }

    console.log(tableContainer);

    newRow = document.createElement("div");
    newRow.className = "table-row";
    var itemname = "";
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
          itemname = resultArray[1][resultArray[1].length - 14];
          break;
        case 3:
          itemname = resultArray[1][resultArray[1].length - 13];
          break;
      }
      console.log(itemname);
      newElement.innerHTML = itemname;
      newRow.appendChild(newElement);
    }
    tableContainer[0].appendChild(newRow);

    var date23 = resultArray[1].length - 14;

    newRow = document.createElement("div");
    newRow.className = "table-row";
    var tableContainer = document.getElementsByClassName("table-container");
    for (var i = 0; i < 4; i++) {
      newElement = document.createElement("div");
      newElement.className = "table-element";
      if (i == 2) {
        newElement.innerHTML = resultArray[foundIndex][date23];
      } else if (i == 3) {
        newElement.innerHTML = resultArray[foundIndex][date23 - 1];
      } else {
        newElement.innerHTML = resultArray[foundIndex][i];
      }
      newRow.appendChild(newElement);
    }
    tableContainer[0].appendChild(newRow);
  } else {
    tableContainer[0].innerHTML = "Item Not Found";
  }

  tablesection.style.display = "block";
}
