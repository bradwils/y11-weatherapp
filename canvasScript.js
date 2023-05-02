
// draw is the context.  .fillRect just means to 'fill a rectangle shape'       x-coord 100, y-coord 100         width 100, height 100.  all in pixels.
    // draw                    .fillRect                                                   (100, 100,                      100, 100);

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var draw = canvas.getContext('2d')
var mainWeatherText = canvas.getContext('2d')

//DEFINING IMAGES
const blueCloundImg = new Image()
const lightning1 = new Image()

canvas.width = 1920;
canvas.height = 1080;
ratio = 20 / canvas.width; // these two lines make sure that when you are drawing images, the location matches up with the canvas' internal resolution, which
fontSize = 1920 * ratio    // is different to the displayed one that you see on the page. these calculations is what compensates for the error to correct it.

function getCanvasSize() {

    console.log('canvasWidth: ' + canvasWidth)
    console.log('canvasHeight: ' + canvasHeight)

}

function loadImages() {
    blueCloundImg.src = "Website Assets/bluecloud.png"

}

function updateCanvas() {
    // mainWeatherText.font = (fontSize|0) + 'px Arial'; //i dont think this is needed?
    mainWeatherText.font = "20px Arial";

    
    mainWeatherText.fillText('yo whats good champion', 1900, 100)
    ctx.drawImage(blueCloundImg, 100, 100)

    //RIGHT NOW!!!!!!!!!! THE ONLY WAY I'VE GOTTEN THE IMAGES TO LOAD IS BY PUTTING THEM ON THE PAGE (WITH 0 WIDTH AND HEIGHT SO ITS INVISBLE) AND THEN REFERENCING IT WITH THE DOCUMENT.GETLEMENTBYID THING TO PULL THE IMAGE AND ASSIGN IT TO THE CONST 'darkcloudsHTML', so i just draw that image on the canvas instead. this is a terribel strategy but it might just be what i gotta do.


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



// setInterval(doFrames, 1000/60);
// ABOVE: this will run a frame at 60fps. in that function (which ins't real yet), make it check if 'canvasRunning == true', and if so run. have another button on the page to make it false, and if it's false it'll stop the function.