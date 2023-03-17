
//above doesn't work. dunno why. fix later., it's unimportant rn.

var response;
var data;


{ //shortcut vars
var localName;
var currentWeather;
var description;
var temp;
var feelslike;
var windSpeed;
var localTime;
var humidityPercent;
var coordinates; //maybe if i have time at the end, show the location on a map? would be cool.
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
}

function setAPIShortcuts() {
    localName = data.name
    console.log(localName)

    console.log('data + weather[0].description: ' + data.weather[0].description) //this one works
    text1 = 'current conditions in sydney: ' + data.weather[0].description //html
}



//status:
