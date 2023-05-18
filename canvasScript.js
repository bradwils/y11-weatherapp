
// draw is the context.  .fillRect just means to 'fill a rectangle shape'       x-coord 100, y-coord 100         width 100, height 100.  all in pixels.
    // draw                    .fillRect                                                   (100, 100,                      100, 100);

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var draw = canvas.getContext('2d')
var mainWeatherText = canvas.getContext('2d')
var snow = canvas.getContext('2d')

//DEFINING IMAGES
const lightning1 = new Image();
const rainyClouds = new Image();
const thunderClouds = new Image();
const snowClouds = new Image();
const standardClouds = new Image();

canvas.width = 1920;
canvas.height = 1080;
ratio = 20 / canvas.width; // these two lines make sure that when you are drawing images, the location matches up with the canvas' internal resolution, which
fontSize = 1920 * ratio    // is different to the displayed one that you see on the page. these calculations is what compensates for the error to correct it.

function getCanvasSize() {

    console.log('canvasWidth: ' + canvasWidth);
    console.log('canvasHeight: ' + canvasHeight);

}

function loadImages() {
    lightning1.src = "Canvas Assets/lightning 600.png"
    rainyClouds.src = "Canvas Assets/rainyclouds.png"
    thunderClouds.src = "Canvas Assets/thunderClouds.png"
    snowClouds.src = "Canvas Assets/snowclouds.png"
    standardClouds.src = "Canvas Assets/cloudy.png"

    console.log('images loaded')
}

function updateCanvas() {
    // mainWeatherText.font = (fontSize|0) + 'px Arial'; //i dont think this is needed?
    mainWeatherText.font = "20px Arial";

    
    // mainWeatherText.fillText('yo whats good champion', 1900, 100)
    // ctx.drawImage(lightning1, 100, 100)
    // ctx.drawImage(rainyClouds, 0, 0)
    // ctx.drawImage(thunderClouds, 0, 0)
    ctx.drawImage(snowClouds, 0, 0)
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
    switch (weather) { //using the passed parameter 'weather'
        case 'rain': //if weather = rain'
            console.log('rain');
            break; //stop checking
        case 'thunder':
            console.log('thunder')
            break;
        case 'snow':
            console.log('snow')
            break;
    }
}

function snowParticles() {
    snow.fillStyle = "#000000";
    snow.beginPath();
    snow.arc(100, 200, 500, 0, 5 * Math.PI)
    snow.arc(100, 500, 1000, 0, 2 * Math.PI);



//IDK WHT NO WORKY LOOK AT THIS MAYBE https://www.w3schools.com/tags/canvas_arc.asp





//so, draw this a bunch of times ctx.arc(100, 200, 50, 0, 5 * Math.PI);
// but for each, instead of having values, have like xPos[0], xPos[1], xPos[2], etc.
// in a diff var, update the values of these (ie a for loop that for (i=0, i>4 [or however many snowflakes there are], i++) {
//      yPos[i] = yPos - 10 (or whatever amount of pixels you want it to move per frame)
//      xPos[i] = xPos - 10 (or whatever amount of pixels you want it to move per frame)
//  }
//  then, redraw the snowflakes
//  so, draw this a bunch of times ctx.arc(xPos[0], yPos[1], 50, 0, 5 * Math.PI);
// and have anm indivudal check for each to see if the height exceeds 1920, and set it back to 100 with a randomized x position.


//}




}

// setInterval(doFrames, 1000/60);
// ABOVE: this will run a frame at 60fps. in that function (which ins't real yet), make it check if 'canvasRunning == true', and if so run. have another button on the page to make it false, and if it's false it'll stop the function.

loadImages()