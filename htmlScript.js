var recentQueriesDiv = document.getElementById("recentQueriesDiv");
var mapDiv = document.getElementById("mapDiv");
mapDiv.style.display = 'none';


function switchDiv() {
 //can either be 'div' or 'recent'.
    if (recentQueriesDiv.style.display == 'none') {
        recentQueriesDiv.style.display = 'block';
        mapDiv.style.display = 'none';
    } else {
        recentQueriesDiv.style.display = 'none';
        mapDiv.style.display = 'block';
    }
}

function updateMapURL() {
    //whenever the src URL is updated, the iframe automatically refreshes.
    document.getElementById('mapElement').src = "https://www.openstreetmap.org/export/embed.html?bbox=33.9004497%2C-76.43460358351301%2C201.44531250000003%2C82.49482361179574&amp;layer=mapnik&amp;marker=-33.9004497%2C151.19218";

}