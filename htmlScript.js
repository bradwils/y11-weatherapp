var recentQueriesDiv = document.getElementById("recentQueriesDiv");
var mapDiv = document.getElementById("mapDiv");
mapDiv.style.display = 'none';


function switchDiv() {
    if (recentQueriesDiv.style.display == 'none') { //if recent queries is hidden
        recentQueriesDiv.style.display = 'block'; //show it
        mapDiv.style.display = 'none'; //hide map
    } else {
        updateMapURL() //update map when div is being shown; when it's hidden it won't update on first run, so i'll manually do it whenevr it's shown just to make sure.
        recentQueriesDiv.style.display = 'none'; //hide recent queries
        mapDiv.style.display = 'block'; //show map
    }
}

function updateMapURL() {
    document.getElementById("mapElement").src = "https://www.openstreetmap.org/export/embed.html?bbox=-178.24218750000003%2C-76.43460358351301%2C201.44531250000003%2C82.49482361179574&layer=mapnik&marker=" + LatCoordinates + "%2C" + LonCoordinates;
}