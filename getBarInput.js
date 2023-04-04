// gets search bar input, and based of that we'll make it run commands. this is for testing purposes with the canvas.
// it automatically CONVERTS THE INPUT into LOWERCASE, so MAKE SURE to write you 'checks' in LOWERCASE.

var cmds = ['help', 'canvas size', 'api']

function getBar() {

    barInput = (document.getElementById('searchbar').value).toLowerCase();
    console.log('barInput: ' + barInput)

    if (barInput == 'help') {
        help();
    }
    else if (barInput == 'canvas size') {
        getCanvasSize();
    } 
    else if (barInput == 'api') {
        APIUpdate();
    }


    document.getElementById('searchbar').value = '';
}


function help() {
    console.log('commands: ' + cmds)
}