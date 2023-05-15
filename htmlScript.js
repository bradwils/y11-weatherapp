
//above doesn't work. dunno why. fix later., it's unimportant rn.

var response;
var data;


{ //shortcut vars
var localName;
var currentWeather;
var description;
var icon;
var minTemp;
var maxTemp;
var currentTemp;
var feelslike;
var windSpeed;
var windDir;
var localTime;
var humidityPercent;
var LatCoordinates;
var LonCoordinates;

//maybe if i have time at the end, show the location on a map? would be cool.
}

var response = '';
var data = '';
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric';
var urlPart1 = 'https://api.openweathermap.org/data/2.5/weather?q='
var urlPart2 = '&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric'


// var url = 'https://api.openweathermap.org/data/2.5/weather?q=jgbuifgh&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric';



async function APIUpdate(location) { //needs search functionality
    console.log('APIUpdate started')
    apiURL = urlPart1 + location + urlPart2;
    console.log('apiURL: '+ apiURL)
    response = await fetch(apiURL);  //fetchs the info from api, and it's been 'promised' a response from the api, and waits for it. when it's been recieved, it will continue to the next line.
    data = await response.json() //await means that it has been 'promised' a response of data, which is currently being converted form plain text into a json format (readable by computer)e
    console.log('data gotten') //now that it's progressed to this line, the 'promise' has been fulfilled, and the data is ready.

    if (data.cod == 404) {
        console.log('404 error') 
        alert('Invalid location. Please check the spelling and try again.')
        document.getElementById('searchBtn').value = ''
        //here, figure out how to change the placeholder in the text bar to 'check spelling for errors!'
    } else { //IF NO ERROR CODE, IE THE REQUEST IS SUCCESSFUL
        for (i=0; i < 9; i++) {  // 10 times (for earch history array entry)
            //check above logic another time i feel like its off
            if (recentInput.toLowerCase() == recent[i].toLowerCase()) { //if they are equal (make lowercase to make sure caps arent an issue)
                break; //break
            }  
        }
        if (i == 9) { //if it has run 9 times (ie it's run everytime without breaking due to a match)
            updateRecentList() //update recent list
        }
        setAPIShortcuts()
        console.log('APIUpdate finished')
        // logApiShortcuts()
    }
}

function setAPIShortcuts() {
    localName = data.name;
    currentWeather = data.weather[0].main;
    description = data.weather[0].description;
    icon = data.weather[0].icon;
    minTemp = data.main.temp_min;
    maxTemp = data.main.temp_max;
    currentTemp = data.main.temp;
    feelslike = data.main.feels_like;
    windSpeed = data.wind.speed;
    windDir = data.wind.deg;
    localTime = data.dt;
    humidityPercent = data.main.humidity;
    LatCoordinates = data.coord.lat;
    LonCoordinates = data.coord.lon;
}

function logApiShortcuts() {
    console.log('localName: ' + localName);
    console.log('currentWeather: ' + currentWeather);
    console.log('description: ' + description);
    console.log('icon: ' + icon);
    console.log('minTemp: ' + minTemp);
    console.log('maxTemp: ' + maxTemp);
    console.log('currentTemp: ' + currentTemp);
    console.log('feelslike: ' + feelslike);
    console.log('windSpeed: ' + windSpeed);
    console.log('windDir: ' + windDir);
    console.log('localTime: ' + localTime);
    console.log('humidityPercent: ' + humidityPercent);
    console.log('LatCoordinates: ' + LatCoordinates);
    console.log('LonCoordinates: ' + LonCoordinates);
}
//status:
