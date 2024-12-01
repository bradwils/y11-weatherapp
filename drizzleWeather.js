var drizzleRain1y = 150; // --> drizzleRain1y
var drizzleRain2y = 300; // --> drizzleRain2y
var drizzleRain1Opacity = 1; // --> drizzleRain1Opacity
var drizzleRain2Opacity = 1; // --> drizzleRain2Opacity

var updateDrizzleRain1; // --> updateDrizzleRain1
var updateDrizzleRain2; // --> updateDrizzleRain2
var drizzleAnimations; // --> drizzleAnimations

function drizzleRain1yAdjustment() { // --> drizzleRain1yAdjustment
    console.log('run')
    if (drizzleRain1y < 600 && drizzleRain1Opacity < 1) { //threshold for when rain1 starts to fade out
        drizzleRain1Opacity = drizzleRain1Opacity + 0.05; //up opacity by 0.05
    } else {
        if (drizzleRain1Opacity >= 0.05) { //if opacity is greater than 0.05
            drizzleRain1Opacity = drizzleRain1Opacity - 0.03; //down by 0.03
        } else {
            drizzleRain1y = 150 //reset rain1 y
        }
    }
    drizzleRain1y = drizzleRain1y + 3; //move rain y by +1 every time regardless
}


function drizzleRain2yAdjustment() { // --> drizzleRain2yAdjustment
    if (drizzleRain2y < 500 && drizzleRain2Opacity < 1) { //threshold for when rain2 starts to fade out
        drizzleRain2Opacity = drizzleRain2Opacity + 0.05; //up opacity by 0.05
    } else {
        if (drizzleRain2Opacity >= 0.05) {
            drizzleRain2Opacity = drizzleRain2Opacity - 0.03; //down by 0.03
        } else {
            drizzleRain2y = 250
        }
    }
    drizzleRain2y = drizzleRain2y + 3; //move rain y by +1 every time regardless
}


function prepareDrizzleRainWeatherCanvas() {
    ctx.clearRect(0, 0, 1920, 1080) //clear canvas
    updateDrizzleRain1 = setInterval(drizzleRain1yAdjustment, 1000 / 60) //SETUP THE RAIN1 Y ADJUSTMENT LOOP
    updateDrizzleRain2 = setInterval(drizzleRain2yAdjustment, 1000 / 60) //SETUP THE RAIN2 Y ADJUSTMENT LOOP
    drizzleAnimations = setInterval(drawDrizzleRainWeather, 1000 / 60) //SETUP THE ANIMATION LOOP
}


function drawDrizzleRainWeather() { //beginning the rain animations
    ctx.clearRect(0, 0, 1920, 1080)
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp + '°'), 100, (canvas.height - 100)) //draw text

    ctx.globalAlpha = drizzleRain1Opacity;
    ctx.drawImage(drizzleRain, 200, drizzleRain1y) //draw rain

    ctx.globalAlpha = drizzleRain2Opacity; //CHANGES RAIN OPACITY 
    ctx.drawImage(drizzleRain2, 800, drizzleRain2y) //draw rain2

    ctx.globalAlpha = 1; //changes opacity for any further images to the default 0.
    ctx.drawImage(rainyClouds, 100, cloudY) //draw clouds
}