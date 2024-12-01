var currentCanvasWeather;
var canvas = document.querySelector('canvas');

 
var cloudY = 100

const ctx = canvas.getContext('2d');
const ctxMainText = canvas.getContext('2d')
canvas.width = 1920;
canvas.height = 1080;

ctxMainText.font = '50px Verdana' //main weather text size / font defined


//DEFINING IMAGES
const lightning1 = new Image();
const rainyClouds = new Image();
const thunderClouds = new Image();
const snowClouds = new Image();
const standardClouds = new Image();
const sun = new Image();
const snowflakes = new Image();
const snowflakes2 = new Image();
const rain = new Image();
const rain2 = new Image();
const smallcloud = new Image();
const smallcloud2 = new Image();
const drizzleRain = new Image();
const drizzleRain2 = new Image();


function loadImages() { //defines all of the images to be used
    lightning1.src = "Canvas Assets/lightning 600 2.png"  
    rainyClouds.src = "Canvas Assets/rainyclouds.png"
    thunderClouds.src = "Canvas Assets/thunderClouds.png"
    snowClouds.src = "Canvas Assets/snowclouds.png"
    standardClouds.src = "Canvas Assets/cloudy.png"
    sun.src = "Canvas Assets/sun.png"
    snowflakes.src = "Canvas Assets/snowXL.png"
    snowflakes2.src = "Canvas Assets/snowXL2.png"
    rain.src = "Canvas Assets/rain.png"
    rain2.src = "Canvas Assets/rain.png"
    smallcloud.src = "Canvas Assets/smallcloud1.png"
    smallcloud2.src = "Canvas Assets/smallcloud2.png"
    drizzleRain.src = "Canvas Assets/drizzleRain.png"
    drizzleRain2.src = "Canvas Assets/drizzleRain.png"
}


function changeWeather(weather) {
    //write code that drawClearWeathers all possible intervals (listed in the notes.txt)
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

    ctx.clearRect(0, 0, 1920, 1080) //clears the canvasß

    switch (weather) { //using the passed parameter 'weather'
        case 'Rain': //if weather = rain'
            prepareRainWeatherCanvas()
            currentCanvasWeather = 'Rain';
            break; //stop checking
        case 'Thunderstorm':
            prepareThunderWeatherCanvas()
            currentCanvasWeather = 'Thunder';
            break;
        case 'Snow':
            prepareSnowAnimations()
            currentCanvasWeather = 'Snow';
            break;
        case 'Clear':
            prepareClearWeatherCanvas()
            currentCanvasWeather = 'Clear';
            break;
        case 'Drizzle':
            prepareDrizzleRainWeatherCanvas()
            currentCanvasWeather = 'Drizzle';
            break;
        case 'Clouds':
            prepareCloudyWeatherCanvas()
            currentCanvasWeather = 'Clouds';
            break;
        default:
            currentCanvasWeather = 'Else'
            ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100))
            ctxMainText.fillText(('The weather scenario (' + currentWeather + ') is not in the scenario list.'), 100, (canvas.height - -40))

            // add another little bit of text under weather text that alerts that this weather scenrio doesn't have an animation
    }
}

loadImages()
var x = 0;
function slowCloudWobble() {
    x = x + 0.0175;
    cloudY = Math.floor(Math.cos(x)*20)
}
setInterval(slowCloudWobble, 1000/60) //sets cloud wobble loop