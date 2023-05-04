var recent = [];
var recentInput;
var recentDisplay = document.getElementById("recentResult");


function clearRecent() {
    document.getElementById("recentResult").disabled = true;
    for (i = 0; i < 10; i++) {
        recent[i] = "";
    }
}

function getBar() {
    recentInput = document.getElementById("searchbar").value;
    
    recent[9] = recent[8];
    recent[8] = recent[7];
    recent[7] = recent[6];
    recent[6] = recent[5];
    recent[5] = recent[4];
    recent[4] = recent[3];
    recent[3] = recent[2];
    recent[2] = recent[1];
    recent[1] = recent[0];
    recent[0] = recentInput;

    recentDisplay.innerHTML = "Recent searches ----> " +
    "\n" + " " + recent[0] +
    "\n" + " " + recent[1] +
    "\n" + " " + recent[2] +
    "\n" + " " + recent[3] +
    "\n" + " " + recent[4] +
    "\n" + " " + recent[5] +
    "\n" + " " + recent[6] +
    "\n" + " " + recent[7] +
    "\n" + " " + recent[8] +
    "\n" + " " + recent[9];
}

// clearRecent();