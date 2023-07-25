var snowY = 200
var copySnowY = 300

var snowOpacity = 1;
var snowCopyOpacity = 1;

var snowState;
var snowCopyState; //does not need to be global; only is rn for testing purposes.

var snowAnimations;
var updateSnow;

function moveSnow() {
    console.log('running moveSnow')
    snowY = snowY + 1;
    copySnowY = copySnowY + 1 
    //moves both snows at 1 pixel per frame
    if (snowY == 500) { //this controls the y value that the snow begins the fadeout
        fadeInSnow = setInterval(snowFade, 1000/30);
        snowState = 'fadeout';
    } //once the snow hits a certain threshold, it calls in the fade funtion 'loop'.

    if (copySnowY == 550) { //this controls the y value that the snow begins the fadeout
        fadeInSnowCopy = setInterval(snowCopyFade, 1000/30);
        snowCopyState = 'fadeout';
    } //same as above.
}

function snowFade() {
//FADE + MOVE THEN FADEIN
    //FADEOUT
    if (snowState == 'fadeout') { //checks for fadeoutstate
        snowOpacity = snowOpacity - 0.03; //lowers opacity
        if (snowOpacity <= 0) { //if no longer visible
            snowOpacity = 0; //set to 0 (flat number = nice)
            //MOVE
            snowY = 200; //change y
            snowState = 'fadein'; //change snowstate to stop this loop from running anymore.
        }
    }
    //FADEIN
    if (snowState == 'fadein') { //check for fadein snowState
        snowOpacity = snowOpacity + 0.03; //increase opacity
        if (snowOpacity > 1) { //if visibility is greater than 1
            clearInterval(fadeInSnow) //stop effect
            snowOpacity = 1; //set to 1 (flat num)
        }
    }
} 

//the below is IDENTICAL CODE, but just setup so it affects the second snow sprite.

function snowCopyFade() { 
//FADE + MOVE THEN FADEIN
    //FADEOUT
    if (snowCopyState == 'fadeout') { //checks for fadeoutstate
        snowCopyOpacity = snowCopyOpacity - 0.03; //lowers opacity
        if (snowCopyOpacity <= 0) { //if no longer visible
            snowCopyOpacity = 0; //set to 0 (flat number = nice)
            copySnowY = 300; //change y
            snowCopyState = 'fadein'; //change snowstate to stop this loop from running anymore.
        }
    }
    //FADEIN
    if (snowCopyState == 'fadein') { //check for fadein snowCopyState
        snowCopyOpacity = snowCopyOpacity + 0.03; //increase opacity
        if (snowCopyOpacity > 1) { //if visibility is greater than 1
            clearInterval(fadeInSnowCopy) //stop effect
            snowCopyOpacity = 1; //set to 1 (flat num)
        }
    }
} 

//upon snow being called, it runs this.
function prepareSnowAnimations() {
    console.log('running prepareSnowAnimations')
    ctx.clearRect(0, 0, 1920, 1080) //clears canvas
    updateSnow = setInterval(moveSnow, 1000/60) //starts the snow movement loop.
    snowAnimations = setInterval(drawSnowAnimation, 1000/30) //starts the frame-drawing loop.
}



function drawSnowAnimation() {

    ctx.clearRect(0, 0, 1920, 1080)
    ctxMainText.fillText((localName + ': ' + currentWeather + ', ' + currentTemp), 100, (canvas.height - 100)) //drew text
    ctx.globalAlpha = snowOpacity;
    ctx.drawImage(snowflakes, 200, snowY); //SNOW
    ctx.globalAlpha = snowCopyOpacity;
    ctx.drawImage(snowflakes, 650, copySnowY); //COPYSNOW
    
    ctx.globalAlpha = 1;

    // ctx.clearRect(0,0,1920,200)

    ctx.drawImage(snowClouds, 0, 0)

    // ctx.fillText('snowY: ' + snowY, 0, 900) //debugtext
    // ctx.fillText('copySnowY: ' + copySnowY, 0, 950) //debugtext
    // ctx.fillText('snowOpacity: ' + snowOpacity, 0, 1000) //debugtext
    // ctx.fillText('snowCopyOpacity: ' + snowCopyOpacity, 0, 1050) //debugtext
}