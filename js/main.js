var header = document.getElementById("main-header");
var jsontext = document.getElementById("json");

var resultArray = null;

function makeApiCall() {
  var params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: "15RChmLHTfliVKDI-jg0U9HlnEen9FQte7u8nWyJ7OZ0", // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: "Class 1" // TODO: Update placeholder value.
  };

  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(
    function(response) {
      // TODO: Change code below to process the `response` object:
      console.log(response.result.values);
      resultArray = response.result.values;
      jsontext.innerHTML = resultArray[2][1];
    },
    function(reason) {
      console.error("error: " + reason.result.error.message);
    }
  );
}

function initClient() {
  var API_KEY = "AIzaSyCTl88VlMbAgcuw1rHyYjgkf4zGPSZwHyg"; // TODO: Update placeholder with desired API key.

  var CLIENT_ID =
    "10664250996-pihcdpkiok54iptrj9s0dm1529sdeoej.apps.googleusercontent.com"; // TODO: Update placeholder with desired client ID.

  // TODO: Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  var SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";

  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(function() {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function updateSignInStatus(isSignedIn) {
  makeApiCall();
}

window.onload = function() {
  header.style.transform = "translate3d(0, 0, 0)";
};
