// gets search bar input, and based of that we'll make it run commands. this is for testing purposes with the canvas.
// it automatically CONVERTS THE INPUT into LOWERCASE, so MAKE SURE to write you 'checks' in LOWERCASE.

var barInput; //can be made local
var recent = [];
var recentInputSplit = [];
var recentInputCount;
var recentInput;
var recentDisplay = document.getElementById("recentResult");

function clearRecent() { //clears all recent results
    document.getElementById("recentResult").disabled = true;
    for (i = 0; i < 10; i++) {
        recent[i] = "";
    }
}

function barQuery() {
    var overrideWeather;
    barInput = (document.getElementById('searchbar').value).toLowerCase();
    console.log('barInput: ' + barInput)
    if (barInput.split(' ')[0] == 'override') {
        console.log('override! ' + barInput.split(' ')[1])

        switch (barInput.split(' ')[1]) { //using the passed parameter 'weather'
            case 'Rain': //if weather = rain'
                prepareRainWeatherCanvas()
                currentCanvasWeather = 'rain';
                break; //stop checking
            case 'Thunderstorm':
                prepareThunderWeatherCanvas()
                console.log('thunder')
                currentCanvasWeather = 'thunder';
                break;
            case 'Snow':
                console.log('snow')
                prepareSnowAnimations()
                currentCanvasWeather = 'snow';
                break;
            case 'Clear':
                prepareClearWeatherCanvas()
                console.log('clear')
                currentCanvasWeather = 'clear';
                break;
            case 'Drizzle':
                prepareDrizzleRainWeatherCanvas()
                console.log('drizzle')
                currentCanvasWeather = 'drizzle';
                break;
            case 'Clouds':
                prepareCloudyWeatherCanvas()
                console.log('cloudy')
                currentCanvasWeather = 'clouds';
                break;
            default:
                currentCanvasWeather = 'else'
                ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100))

                //just make it so then it shows the wearther thing, and specify that it needs to be refreshed between different weather ocnditioncs cuz im not runnign all the bullshit clearinterval stuff
        }

        changeWeather(overrideWeather) //if the first character is a slash 
    console.log('slash')
    } else {
        apiUpdate(barInput);
        recentInput = document.getElementById("searchbar").value; //for recent searches
        document.getElementById('searchbar').value = ''; //last action is the searchbar being cleared.
}
}

function THIS_PEIEC_OF_TEXT_STOPS_DEBUG_BAR_FROM_WORKING_AND_YOU_CAN_REMOVE_IT_WHEN_YOU_HAVE_A_REGULER_BAR_WORKING_debugGetBar() { //old debug bar
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
    } else {
        APIUpdate(barInput)
        console.log('APIUpdate ran')
    }
    recentInput = document.getElementById("searchbar").value; //for recent searches
    document.getElementById('searchbar').value = ''; //last action is the searchbar being cleared.

}

function updateRecentList() { /* defines the function to update the recent searches. Leaving this here since 
    it's most relevent (instead of cluttering the htmlscript), but it gets called on the htmlscript after a 
    successful request is sent through */

    recentInputSplit = barInput.split(''); //splits each character of user's search into an array
    recentInputSplit[0] = recentInputSplit[0].toUpperCase(); //sets first letter of array to upper case
    recentInputCount = recentInputSplit.length; //gets the length of user's input

    for (i = 0; i < recentInputCount; i++) { //captialises the start of each letter
        if (recentInputSplit[i] == ' ') {
            recentInputSplit[i + 1] = recentInputSplit[i + 1].toUpperCase();
        }
    }

    recentInput = recentInputSplit.join(""); //joins the array together into one string

    recent[9] = recent[8]; //sets user's input into first element of array and pushes the user's previous searches across the array
    recent[8] = recent[7];
    recent[7] = recent[6];
    recent[6] = recent[5];
    recent[5] = recent[4];
    recent[4] = recent[3];
    recent[3] = recent[2];
    recent[2] = recent[1];
    recent[1] = recent[0];
    recent[0] = recentInput;

    recentDisplay.innerHTML = "Recent searches" + //displays recent search results
    "\n" + "  " + recent[0] +
    "\n" + "  " + recent[1] +
    "\n" + "  " + recent[2] +
    "\n" + "  " + recent[3] +
    "\n" + "  " + recent[4] +
    "\n" + "  " + recent[5] +
    "\n" + "  " + recent[6] +
    "\n" + "  " + recent[7] +
    "\n" + "  " + recent[8] +
    "\n" + "  " + recent[9];
}

barInput = document.getElementById("searchbar")//barINput shortcut 
barInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { //if enter key is pressed
        document.getElementById('searchBtn').click(); //just clicks the search button
      }
});