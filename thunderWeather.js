//this will use a modified copy of the drizzle weather file; as thunder usually has some form of rain, but not always pouring? it's a good compromise.
var thunderRain1y = 100; // --> thunderRain1y
var thunderRain2y = 300; // --> thunderRain2y
var thunderRain1Opacity = 1; // --> thunderRain1Opacity
var thunderRain2Opacity = 1; // --> thunderRain2Opacity

var updateThunderRain1; // --> updateThunderRain1
var updateThunderRain2; // --> updateThunderRain2
var thunderAnimations; // --> thunderAnimations

var activeLightning = false;
var lightningX;
var lightningOpacity = 1;
                                                                                          
//RAIN ANIMATION LOOPS:                                                                                          


function rndNum(max) {
    return(Math.floor(Math.random() * max));
}

function ThunderRain1yAdjustment() { // --> 
    if (thunderRain1y < 600 && thunderRain1Opacity <1) { //threshold for when rain1 starts to fade out
        thunderRain1Opacity = thunderRain1Opacity + 0.04;
    } else {
        if (thunderRain1Opacity >= 0.05) {
            thunderRain1Opacity = thunderRain1Opacity - 0.03;
        } else {
            thunderRain1y = 150
        }
    }
    thunderRain1y=thunderRain1y + 3;
}


function ThunderRain2yAdjustment() { // --> drizzleRain2yAdjustment
    if (thunderRain2y < 500 && thunderRain2Opacity <1) { //threshold for when rain2 starts to fade out
        thunderRain2Opacity = thunderRain2Opacity + 0.03;
    } else {
        if (thunderRain2Opacity >= 0.05) {
            thunderRain2Opacity = thunderRain2Opacity - 0.03;
        } else {
            thunderRain2y = 250
        }
    }
    thunderRain2y=thunderRain2y + 3;
}


//LIGHTNING RANDOMIZER

function randomLightningX() {
    return((Math.floor(Math.random() * 700)) + 250 + 1); //gives random number between (inclusive) 1-10.
}

function callLightning() {
    lightningOpacity = 1;
    activeLightning = true;
    lightningX = randomLightningX();
}
//if random number = x, then change opacity of lightning.


function prepareThunderWeatherCanvas() {
    console.log('running prepareThunderWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    updateThunderRain1 = setInterval(ThunderRain1yAdjustment, 1000/60) //SETUP THE RAIN1 Y ADJUSTMENT LOOP
    updateThunderRain2 = setInterval(ThunderRain2yAdjustment, 1000/60) //SETUP THE RAIN2 Y ADJUSTMENT LOOP
    thunderAnimations = setInterval(drawThunderWeather, 1000/60)
    lightningAnimation = setInterval(callLightning, 1000/.5) //every 2000ms (2 seconds)
}


function drawThunderWeather() { //beginning the rain animations
    ctx.clearRect(0, 0, 1920, 1080)
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp + '°'), 100, (canvas.height - 100)) //drew text

    ctx.globalAlpha = thunderRain1Opacity;
    ctx.drawImage(drizzleRain, 200, thunderRain1y) //draw rain

    ctx.globalAlpha = thunderRain2Opacity; //CHANGES RAIN OPACITY 
    ctx.drawImage(drizzleRain2, 800, thunderRain2y) //draw rain2
    
    ctx.globalAlpha = 1; //changes opacity for any further images to the default 0.
    ctx.drawImage(thunderClouds, 100, cloudY) //draw clouds

    if (activeLightning == true) {
        if (lightningOpacity < 0.05) {
            activeLightning = false;
        } else {
            lightningOpacity = lightningOpacity - 0.1
            ctx.globalAlpha = lightningOpacity;
            ctx.drawImage(lightning1, lightningX, thunderClouds.height - 100)
            ctx.globalAlpha = 1;
        }
    }


    // ctx.drawImage(lightning1, randomLightningX(), (thunderClouds.height - 100)) //draw rain
}