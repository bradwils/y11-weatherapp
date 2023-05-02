// gets search bar input, and based of that we'll make it run commands. this is for testing purposes with the canvas.
// it automatically CONVERTS THE INPUT into LOWERCASE, so MAKE SURE to write you 'checks' in LOWERCASE.

var cmds = ['help', 'size', 'update canvas', 'stylewidth', 'newframe', "width (don't bother with it rn)" ]
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
    else {
        APIUpdate(barInput)
        console.log('APIUpdate ran')
    }

    document.getElementById('searchbar').value = '';
}


function help() {
    console.log('commands: ' + cmds)
}

barInput = document.getElementById("searchbar")
barInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('searchBtn').click();
      }
});