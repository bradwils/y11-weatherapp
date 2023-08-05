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
    barInput = (document.getElementById('searchbar').value).toLowerCase();
    if (barInput.split(' ')[0] == 'override') { //this is the 'override' code for demonstration purposes


        if (currentCanvasWeather == 'Rain') {
            clearInterval(updateRain1)
            clearInterval(updateRain2)
            clearInterval(rainAnimations)
        } else if (currentCanvasWeather == 'Thunder') {
            clearInterval(updateThunderRain1);
            clearInterval(updateThunderRain2);
            clearInterval(thunderAnimations);
            clearInterval(lightningAnimation);
        } else if (currentCanvasWeather == 'Snow') {
            clearInterval(updateSnow);
            clearInterval(snowAnimations);
        } else if (currentCanvasWeather == 'Clear') {
            clearInterval(clearAnimations);
        } else if (currentCanvasWeather == 'Drizzle') {
            clearInterval(updateDrizzleRain1);
            clearInterval(updateDrizzleRain2);
            clearInterval(drizzleAnimations);
        } else if (currentCanvasWeather == 'Clouds') {
            clearInterval(cloudsAnimations);
        }

        switch (barInput.split(' ')[1]) { //using the passed parameter 'override'
            case 'rain': //if weather = rain'
                prepareRainWeatherCanvas()
                currentCanvasWeather = 'Rain';
                break; //stop checking
            case 'thunderstorm':
                prepareThunderWeatherCanvas()
                currentCanvasWeather = 'Thunder';
                break;
            case 'snow':
                prepareSnowAnimations()
                currentCanvasWeather = 'Snow';
                break;
            case 'clear':
                prepareClearWeatherCanvas()
                currentCanvasWeather = 'Clear';
                break;
            case 'drizzle':
                prepareDrizzleRainWeatherCanvas()
                currentCanvasWeather = 'Drizzle';
                break;
            case 'clouds':
                prepareCloudyWeatherCanvas()
                currentCanvasWeather = 'Clouds';
                break;
            default:
                currentCanvasWeather = 'Else'
                ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100))
        }
        //end of override code
    } else {
        apiUpdate(barInput); //send bar content (search term) for api request 
        recentInput = document.getElementById("searchbar").value; //for recent searches
        document.getElementById('searchbar').value = ''; //last action is the searchbar being cleared.
}
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