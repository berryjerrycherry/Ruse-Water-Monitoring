const url = `https://ruse-water-monitoring.herokuapp.com/spreadsheet`;
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        const json = JSON.parse(xmlHttp.responseText);
        const number = json.values[0][0];
        document.getElementById("number").innerHTML = number;
    }
}
xmlHttp.open("GET", url, true);
xmlHttp.send(null);