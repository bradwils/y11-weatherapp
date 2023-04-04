
// draw is the context.  .fillRect just means to 'fill a rectangle shape'       x-coord 100, y-coord 100         width 100, height 100.  all in pixels.
    // draw                    .fillRect                                                   (100, 100,                      100, 100);



var onePercentHeight;
var onePercentWidth;

var canvas = document.querySelector('canvas')

var draw = canvas.getContext('2d')


//WEATHERTEXT

var drawWeatherText = canvas.getContext('2d')
drawWeatherText.font = '20px Arial'


function getCanvasSize() {

    canvasWidth = Math.floor(canvas.getBoundingClientRect().width);
    canvasHeight = Math.floor(canvas.getBoundingClientRect().height) - 100;


    console.log('canvasWidth: ' + canvasWidth)
    console.log('canvasHeight: ' + canvasHeight)


}

// setCanvasSize()

function updateCanvas() {


drawWeatherText.fillText('yo whats good champion', 100, 100)

}



