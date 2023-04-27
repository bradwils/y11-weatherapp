// gets search bar input, and based of that we'll make it run commands. this is for testing purposes with the canvas.
// it automatically CONVERTS THE INPUT into LOWERCASE, so MAKE SURE to write you 'checks' in LOWERCASE.

var cmds = ['help', 'canvas size', 'api', 'update canvas']
var barInput;

function getBar() {

    barInput = (document.getElementById('searchbar').value).toLowerCase();
    splitInput = barInput.split(' ');
    console.log('barInput: ' + barInput)

    if (barInput == 'help') {
        help();
        console.log('ran help')
    }
    else if (barInput == 'size') {
        getCanvasSize();
        console.log('ran canvas size')
    } 
    else if (barInput == 'api') {
        APIUpdate();
        console.log('ran api')
    }
    else if (barInput == 'update canvas') {
        updateCanvas();
    }
    else if (barInput == 'stylewidth') {
        styleWidth();
        console.log('ran stylewidth')
    }
    else if (barInput == 'newframe') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('ran newframe')
    }

    else if (splitInput[0] == 'width') {
        changeWidth(splitInput[1]);
        console.log('ran width')
    }

    document.getElementById('searchbar').value = '';
}


function help() {
    console.log('commands: ' + cmds)
}