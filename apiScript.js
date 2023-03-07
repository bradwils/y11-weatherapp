var response = '';
var data = '';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=marrickville&appid=de4315905984c51cb8f1bb4c23c949c0&units=metric';
var url2 = 'https://api.mozambiquehe.re/bridge?auth=7893c4b1be496c711057b70068c92291&player=rRivals&platform=PC';

async function APIUpdate() {
    response = await fetch(url2); 
    data = await response.json(); 
    console.log(data)

    }

APIUpdate()
