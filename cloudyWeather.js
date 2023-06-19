function prepareClearWeatherCanvas() {
    console.log('running prepareClearWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    clearAnimations = setInterval(drawCloudyWeather, 1000/5)
}

function drawCloudyWeather() {
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    ctx.drawImage(standardClouds, ((canvas.width/2) - (standardClouds.width/2)), 100) //draws clouds
}
