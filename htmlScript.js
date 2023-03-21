
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
var windDir
var localTime;
var humidityPercent;
var LatCoordinates;
var LonCoordinates;
//maybe if i have time at the end, show the location on a map? would be cool.
}


var response = '';
var data = '';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=marrickville&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric';

async function APIUpdate() { //needs search functionality
    console.log('APIUpdate started')
    response = await fetch(url);  //fetchs the info from api
    data = await response.json() //parses it into a json format in the code
    console.log(data.weather[0].description)
    setAPIShortcuts()
    document.getElementById('text1').innerHTML = 'weather: ' + data.weather[0].description;
    console.log('APIUpdate finished')
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
