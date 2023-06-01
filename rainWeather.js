var rain1y = 100;
var rain2y = 100;
var rain1Opacity = 1;
var rain2Opacity = 1;

var updateRain1;
var updateRain2;
var rainAnimations;

function rain1yAdjusment() {
    if (rain1y < 300 && rain1Opacity <1) { //threshold for when rain1 starts to fade out
        rain1Opacity = rain1Opacity + 0.05;
    } else {
        if (rain1Opacity >= 0.05) {
            rain1Opacity = rain1Opacity - 0.03;
        } else {
            rain1y = 50
        }
    }
    rain1y=rain1y + 3;
}


function rain2yAdjusment() {
    if (rain2y < 300 && rain2Opacity <1) { //threshold for when rain2 starts to fade out
        rain2Opacity = rain2Opacity + 0.05;
    } else {
        if (rain2Opacity >= 0.05) {
            rain2Opacity = rain2Opacity - 0.03;
        } else {
            rain2y = 0
        }
    }
    rain2y=rain2y + 5;
}


//there seems to be some weird flickering. aside from that it works.






//we need 1 function for defining all the elements and initiate the loops,
// another to control the drawing of any element that needs to be draw every frame for the animations.


function prepareRainWeatherCanvas() {
    console.log('running prepareRainWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    updateRain1 = setInterval(rain1yAdjusment, 1000/60) //SETUP THE RAIN1 Y ADJUSTMENT LOOP
    updateRain2 = setInterval(rain2yAdjusment, 1000/60) //SETUP THE RAIN2 Y ADJUSTMENT LOOP
    rainAnimations = setInterval(drawRainWeather, 1000/60) //SETUP THE ANIMATION LOOP
}


function drawRainWeather() { //beginning the rain animations
    ctx.clearRect(0, 0, 1920, 1080)
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100)) //drew text

    ctx.globalAlpha = rain1Opacity;
    ctx.drawImage(rain, 300, rain1y) //draw rain

    ctx.globalAlpha = rain2Opacity; //CHANGES RAIN OPACITY 
    rain2ctx.drawImage(rain2, 200, rain2y) //draw rain2
    
    ctx.globalAlpha = 1; //changes opacity for any further images to the default 0.
    ctx.drawImage(rainyClouds, 100, 0) //draw clouds
}

function animateFadeOutRainWeather() {

}
// same as animeRainWeather function, but replace the global alpha values with a value that loops every time it runs lowering the value to 0 over about 0.5 seconds.


// MAKE ANOTHER FUNCTION THAT STOPS THE ANIMATERAINWEATHER FUNCTION AND RUNS ITS OWN THAT MAKES EVERYTHING SLOWLEY TRANSPARENT INSTEAD OF THE PREDIFINED GLOBALALPHA LEVELS THAT ARE DEFINED HERE