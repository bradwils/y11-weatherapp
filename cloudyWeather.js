var cloudY = 100
var x = 0;
function prepareCloudyWeatherCanvas() {
    console.log('running prepareClearWeatherCanvas')
    ctx.clearRect(0, 0, 1920, 1080)
    clearAnimations = setInterval(drawCloudyWeather, 1000/60)
    cloudyCouldAnimations = setInterval(slowCloudWobble, 1000/60)
}

function slowCloudWobble() {
    x = x + 0.0175;
    cloudY = Math.floor(Math.cos(x)*20)
    console.log(cloudY)
    console.log('x: ' + x) 

    //find a way to make x local but still declaring it as 0 at the start of the function only running once (check if nan like super quick check probably)
}


function drawCloudyWeather() {
    ctx.globalAlpha = 1; //makes sure everything is fully visible
    ctx.clearRect(0, 0, 1920, 1080) //clears the canvas
    ctx.drawImage(standardClouds, ((canvas.width/2) - (standardClouds.width/2)), cloudY) //draws clouds
}
// prepareCloudyWeatherCanvas()

//