var currentCanvasWeather;
var canvas = document.querySelector('canvas');

var currentCanvasWeather;

const ctx = canvas.getContext('2d');
const snow1ctx = canvas.getContext('2d');
const snow2ctx = canvas.getContext('2d');
const rain1ctx = canvas.getContext('2d');
const rain2ctx = canvas.getContext('2d');
const ctxMainText = canvas.getContext('2d')

const mainWeatherText = canvas.getContext('2d') //this will be for the main text, like the temperature.
const snow = canvas.getContext('2d')

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

canvas.width = 1920;
canvas.height = 1080;
ratio = 20 / canvas.width; // these two lines make sure that when you are drawing images, the location matches up with the canvas' internal resolution, which
fontSize = 1920 * ratio    // is different to the displayed one that you see on the page. these calculations is what compensates for the error to correct it.
//idk if the above 2 are needed. test and delete if needed.


function getCanvasSize() {

    console.log('canvasWidth: ' + canvasWidth);
    console.log('canvasHeight: ' + canvasHeight);

}

function loadImages() {
    lightning1.src = "Canvas Assets/lightning 600.png"
    rainyClouds.src = "Canvas Assets/rainyclouds.png"
    thunderClouds.src = "Canvas Assets/thunderClouds.png"
    snowClouds.src = "Canvas Assets/snowclouds.png"
    standardClouds.src = "Canvas Assets/cloudy.png"
    sun.src = "Canvas Assets/sun.png"
    snowflakes.src = "Canvas Assets/snowXL.png"
    snowflakes2.src = "Canvas Assets/snowXL2.png"
    rain.src = "Canvas Assets/rain.png"
    rain2.src = "Canvas Assets/rain.png"

    console.log('images loaded')
}

function updateCanvas() {
    // mainWeatherText.font = (fontSize|0) + 'px Arial'; //i dont think this is needed?
    mainWeatherText.font = "20px Arial";

    
    // mainWeatherText.fillText('yo whats good champion', 1900, 100)
    // ctx.drawImage(lightning1, 100, 100)

    // ctx.drawImage(rainyClouds, 0, 0)

    // ctx.drawImage(rain, 0, 0)

    // ctx.drawImage(rain2, 0, 0)

    // ctx.drawImage(thunderClouds, 0, 0)

    // ctx.drawImage(snowClouds, 0, 0)

    // ctx.drawImage(standardClouds, 0, 0)

    // ctx.drawImage(sun, 1500, 0)

    // ctx.drawImage(snowflakes, 0, 0)
    // ctx.globalAlpha = 0.5;               // SETS OPACITY TO 50%

    // ctx.drawImage(snowClouds, 0, 0)

    console.log('canvas updated')
    // for (i=0; i>3600; i++) {
        setInterval(moveSnow, 1000/60)
    // }
}



function changeWidth(newWidth) {
    oldHeight = canvas.height;
    canvas.width = newWidth;
    if (oldHeight !== canvas.height) {
        console.log('height changed from ' + oldHeight + ' to ' + canvas.height)
    } else {
        console.log('same height: ' + canvas.height)
    }
}


//TEMP FUNCTION BELOW
var snowY = 400
var snowX = 0
function moveSnow() {
    console.log('running moveSnow')
    ctx.clearRect(0, 0, 1920, 1080)
    ctx.drawImage(snowflakes, snowX, snowY);
    ctx.drawImage(snowClouds, 0, 0)
    // snowX = snowX + 1;
    snowY = snowY + 1;
}



function changeWeather(weather) {
    //write code that clears all possible intervals (listed in the notes.txt)
    if (currentCanvasWeather == 'rain') {
        clearInterval(updateRain1)
        clearInterval(updateRain2)
        clearInterval(rainAnimations)
        console.log('CLEARED RAIN INTERVALS')

    } //CLEARS RAIN INTERVALS IF CURRENTLY RUNNING


    switch (weather) { //using the passed parameter 'weather'
        case 'rain': //if weather = rain'
            console.log('weather = rain');
            prepareRainWeatherCanvas()
            currentCanvasWeather = 'rain';
            break; //stop checking
        case 'thunder':
            console.log('thunder')
            break;
        case 'snow':
            console.log('snow')
            break;
    }
}

// setInterval(doFrames, 1000/60);
// ABOVE: this will run a frame at 60fps. in that function (which ins't real yet), make it check if 'canvasRunning == true', and if so run. have another button on the page to make it false, and if it's false it'll stop the function.

loadImages()