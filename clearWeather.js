//setup sun animation loops

//setup frame-based animation call

//call animations
var clearAnimations;

function prepareClearWeatherCanvas() {
    console.log('running prepareClearWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    clearAnimations = setInterval(drawClearWeather, 1000/30)
    //for above; there are no animations? 
    //add fade-in for text + 

}

function drawClearWeather() {
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100)) //drew text
}

