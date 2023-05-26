var currentCanvasWeather;

// var rainFrameUpdateLoop = setTimeout(rainWeatherCanvas, 500)
// ^^^^^^^^^^ does not work kekw


// FUNCTION: START RAIN WEATHER (NOT A LOOP)
//draw text
//draw rain
//draw clouds

//  loop (while currentCanvasWeather = 'rain'){
//      if (snowy < bottom of page) {        
//          snowy = snowy++;
//
//          another if loop, if snow1 is mroe than a certain amount then spawn and start using snow2.
//
//      }
//  }


function rainWeatherCanvas() {
    console.log('running rainWeatherCanvas()')
    //draw text
    //draw rain
    //draw clouds
    ctxMainText.font = '100px Verdana'
    ctxMainText.fillText('text', 100, (canvas.height - 100))

    ctx.drawImage(rain, 0, 0)
    // ctx.drawImage(rain2, (canvas.width - rain2.width), 0)


    ctx.drawImage(rainyClouds, 100, 0)

}

setTimeout(rainWeatherCanvas, 100)