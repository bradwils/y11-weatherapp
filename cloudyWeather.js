var x = 0;
function prepareCloudyWeatherCanvas() {
    console.log('running prepareClearWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080) //clears canvas
    cloudsAnimations = setInterval(drawCloudyWeather, 1000/60) //sets cloudyAnimations to run @ 60fps
}

function drawCloudyWeather() {
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp + '°'), 100, (canvas.height - 100)) //drew text
    ctx.drawImage(standardClouds, ((canvas.width/2) - (standardClouds.width/2)), cloudY) //draws clouds
}
// prepareCloudyWeatherCanvas()

//