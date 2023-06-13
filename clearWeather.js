//setup sun animation loops

//setup frame-based animation call

//call animations

var updateSun;
var clearAnimations;

function prepareClearWeatherCanvas() {
    console.log('running prepareClearWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    // updateSun = setInterval(rotateSun, 1000/5) //SETUP THE SUN ROTATION ADJUSTMENT LOOP
    clearAnimations = setInterval(drawClearWeather, 1000/5)
    //for above; there are no animations? 
    //add fade-in for text + 

}

function drawClearWeather() {
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    sunCtx.drawImage(sun, 1500, 0) //draws sun (1 opacity)
    ctx.globalAlpha = 0.8; //changes opacity to .8
    ctx.drawImage(smallcloud, 300, 100) //draws small cloud (0.8 opacity)
    ctx.drawImage(smallcloud2, 1420, 400) //draws small cloud2 (0.8 opacity)


}