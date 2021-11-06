const url = `https://ruse-water-monitoring.herokuapp.com/spreadsheet`;
const xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        const response = JSON.parse(xmlHttp.responseText);
        const day = new Date().getDay();
        const isWeekend = day === 0 || day === 6;
        document.getElementById("number").innerHTML = isWeekend ? "N/A (WEEKENDS)" : response.values[0][0];
        // if its a weekend, show "N/A (WEEKENDS)" otherwise use the response
    }
}
xmlHttp.open("GET", url, true);
xmlHttp.send(null);
