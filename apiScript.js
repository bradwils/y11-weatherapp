var response; //the raw response from api
var data; //the data from the api, in json format


{ //shortcut vars
var localName; //local name of location
var currentWeather; //current weather of the location
var description; //description of weather at location
var minTemp; //minimum temperature of location
var maxTemp; //maximum temperature of location
var currentTemp; //current temperature of location
var feelslike; //the temperature that it feels like at the location
var windSpeed; //the speed of the wind at the location
var windDir; //the direction of the wind at the location
var localTime; //the local time at the location
var humidityPercent; //the humidity percentage at the location
var LatCoordinates; //the latitude coordinates of the location
var LonCoordinates; //the longitude coordinates of the location

//maybe if i have time at the end, show the location on a map? would be cool.
}

var response = '';
var data = '';
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric'; //default url for testing probably not needed
var urlPart1 = 'https://api.openweathermap.org/data/2.5/weather?q=' //first half of URL
var urlPart2 = '&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric' //second half of URL
// the reason for two parts in the url is because in the middle, the user's location query will be placed. This makes sure that it's in the right format for the APi to handle it.

async function apiUpdate(location) { //needs search functionality
    console.log('APIUpdate started') //DEBUG
    apiURL = urlPart1 + location + urlPart2; //URl p1/2 and query to create the full URL that is queried
    console.log('apiURL: '+ apiURL) //DEBUG
    response = await fetch(apiURL);  //fetchs the info from api, and it's been 'promised' a response from the api, and waits for it. when it's been recieved, it will continue to the next line.
    data = await response.json() //await means that it has been 'promised' a response of data, which is currently being converted form plain text into a json format (readable by computer)
    console.log('data gotten') //DEBUG

    if (data.cod == 404) { //if the error code is 404 (ie the location is invalid)
        console.log('404 error') 
        alert('Invalid location. Please check the spelling and try again.')
    } else { //IF NO ERROR CODE, IE THE REQUEST IS SUCCESSFUL
        for (i=0; i < 9; i++) {  // 10 times (for earch history array entry)
            if (recentInput.toLowerCase() == recent[i].toLowerCase()) { //if they are equal (make lowercase to make sure caps arent an issue)
                break; //exit loop, no more adding to i
            }  
        }
        if (i == 9) { //if it has run 9 times (ie it's run everytime without breaking due to a match)
            updateRecentList() //update recent list
        } //otherwise it won't, as the result has matched one of the recent inputs.
        setAPIShortcuts() //sets API shortcuts (binds them to vars)
        console.log('APIUpdate finished')
        logApiShortcuts() //DEBUG
        changeWeather(currentWeather)
        updateMapURL()
    }
}

function setAPIShortcuts() {
    localName = data.name;
    currentWeather = data.weather[0].main;
    description = data.weather[0].description;
    minTemp = data.main.temp_min;
    maxTemp = data.main.temp_max;
    currentTemp = data.main.temp;
    feelslike = data.main.feels_like;
    windSpeed = data.wind.speed;
    windDir = data.wind.deg
    localTime = data.dt;
    humidityPercent = data.main.humidity;
    LatCoordinates = data.coord.lat;
    LonCoordinates = data.coord.lon;
}

function logApiShortcuts() {
    console.log('localName: ' + localName);
    console.log('currentWeather: ' + currentWeather);
    console.log('description: ' + description);
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
