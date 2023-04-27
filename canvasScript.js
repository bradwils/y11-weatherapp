
// draw is the context.  .fillRect just means to 'fill a rectangle shape'       x-coord 100, y-coord 100         width 100, height 100.  all in pixels.
    // draw                    .fillRect                                                   (100, 100,                      100, 100);

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var draw = canvas.getContext('2d')

var drawWeatherText = canvas.getContext('2d')

canvas.width = 1920;
canvas.height = 1080;

function getCanvasSize() {

    canvasWidth = Math.floor(canvas.getBoundingClientRect().width); //THESE ARE RELATIVE TO HTML, NOT THE ACTUAL CANVAS' CALCULATING DIMENSIONS
    canvasHeight = Math.floor(canvas.getBoundingClientRect().height); //THESE ARE RELATIVE TO HTML, NOT THE ACTUAL CANVAS' CALCULATING DIMENSIONS

    console.log('canvasWidth: ' + canvasWidth)
    console.log('canvasHeight: ' + canvasHeight)

}

function updateCanvas() {

    ratio = 20 / canvas.width;
    fontSize = 1920 * ratio

    drawWeatherText.font = (fontSize|0) + 'px Arial';
    drawWeatherText.font = "20px Arial";

drawWeatherText.fillText('yo whats good champion', 500, 100)

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



setInterval(doFrames, 1000/60);
// ABOVE: this will run a frame at 60fps. in that functio (which ins't real yet), make it check if 'canvasRunning == true', and if so run. have another button on the page to make it false, and if it's false it'll stop the function.