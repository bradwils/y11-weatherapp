
// draw is the context.  .fillRect just means to 'fill a rectangle shape'       x-coord 100, y-coord 100         width 100, height 100.  all in pixels.
    // draw                    .fillRect                                                   (100, 100,                      100, 100);

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var draw = canvas.getContext('2d')
var mainWeatherText = canvas.getContext('2d')

//DEFINING IMAGES
const blueCloundImg = new Image();
const lightning1 = new Image();
const rainyClouds = new Image();
const thunderClouds = new Image();

canvas.width = 1920;
canvas.height = 1080;
ratio = 20 / canvas.width; // these two lines make sure that when you are drawing images, the location matches up with the canvas' internal resolution, which
fontSize = 1920 * ratio    // is different to the displayed one that you see on the page. these calculations is what compensates for the error to correct it.

function getCanvasSize() {

    console.log('canvasWidth: ' + canvasWidth)
    console.log('canvasHeight: ' + canvasHeight)

}

function loadImages() {
    blueCloundImg.src = "Canvas Assets/bluecloud.png"
    lightning1.src = "Canvas Assets/lightning 600.png"
    rainyClouds.src = "Canvas Assets/rainyclouds.png"
    thunderClouds.src = "Canvas Assets/thunderClouds.png"

    console.log('images loaded')
}

function updateCanvas() {
    // mainWeatherText.font = (fontSize|0) + 'px Arial'; //i dont think this is needed?
    mainWeatherText.font = "20px Arial";

    
    // mainWeatherText.fillText('yo whats good champion', 1900, 100)
    // ctx.drawImage(blueCloundImg, 100, 100)
    // ctx.drawImage(lightning1, 100, 100)
    // ctx.drawImage(rainyClouds, 0, 0)
    ctx.drawImage(thunderClouds, 0, 0)

    console.log('canvas updated')
}



function changeWidth(newWidth) {
    oldHeight = canvas.height;
    canvas.width = newWidth;
    if (oldHeight !== canvas.height) {
        console.log('height changed from ' + oldHeight + ' to ' + canvas.height)
    } else {
        console.log('same height: ' + canvas.height)
    }
}



function changeWeather(weather) {
    console.log('changing weather to ' + weather)
}

// setInterval(doFrames, 1000/60);
// ABOVE: this will run a frame at 60fps. in that function (which ins't real yet), make it check if 'canvasRunning == true', and if so run. have another button on the page to make it false, and if it's false it'll stop the function.

loadImages()