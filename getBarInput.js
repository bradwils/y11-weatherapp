// gets search bar input, and based of that we'll make it run commands. this is for testing purposes with the canvas.
// it automatically CONVERTS THE INPUT into LOWERCASE, so MAKE SURE to write you 'checks' in LOWERCASE.

var cmds = ['help', 'size', 'update', 'stylewidth', 'newframe', "width (don't bother with it rn)" ]
var barInput; //this is the input put into LOWERCASE
var recent = [];
var recentInput;
var recentDisplay = document.getElementById("recentResult");

function clearRecent() {
    document.getElementById("recentResult").disabled = true;
    for (i = 0; i < 10; i++) {
        recent[i] = "";
    }
}

function debugGetBar() {
    barInput = (document.getElementById('searchbar').value).toLowerCase();
    splitInput = barInput.split(' ');
    console.log('barInput: ' + barInput)

    if (barInput == 'help') {
        help();
        console.log('ran help')
    }
    else if (barInput == 'size') {
        getCanvasSize();
        console.log('ran canvas size')
    } 
    else if (barInput == 'update') {
        updateCanvas();
    }
    else if (barInput == 'stylewidth') {
        styleWidth();
        console.log('ran stylewidth')
    }
    else if (barInput == 'newframe') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('ran newframe')
    }
    else if (splitInput[0] == 'width') {
        changeWidth(splitInput[1]);
        console.log('ran width')
    }
    else if (splitInput[0] == 'weather') {
        changeWeather(splitInput[1]);
        console.log('ran changeWeather with the param ' + splitInput[1])
    }
    
    //TEMPORARY ENTRY WHILE I GET SNOW TO WORK

    else if (barInput == 'snow') {
        snowParticles()
        console.log('ran snowParticles')
    } else {
        APIUpdate(barInput)
        console.log('APIUpdate ran')
    }
    recentInput = document.getElementById("searchbar").value; //for recent searches
    document.getElementById('searchbar').value = ''; //last action is the searchbar being cleared.

}

function help() {
    console.log('commands: ' + cmds)
}

function updateRecentList() { //defines the function to update the recent searches. Leaving this here since it's most relevent (instead of cluttering the htmlscript), but it gets called on the htmlscript after a successful request is sent through.
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

barInput = document.getElementById("searchbar")
barInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { //if enter key is pressed
        document.getElementById('searchBtn').click(); //just clicks the search button
      }
});