var clearAnimations; //defines clearAnimations glboally so it can be called elsewhere

function prepareClearWeatherCanvas() {
    ctx.clearRect(0, 0, 1920, 1080) //clears canvas
    clearAnimations = setInterval(drawClearWeather, 1000/30) //sets animation to run @ 30fps
}

function drawClearWeather() {
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp + '°'), 100, (canvas.height - 100)) //drew text
    ctx.drawImage(sun, (canvas.width - sun.width), 0) //draws sun
}

