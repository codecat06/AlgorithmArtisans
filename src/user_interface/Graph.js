import allFunctions from '../data_retrieving/PlaneData.js'
function createChart(selectedGraph, matchingData) {
    var yAxisText;
    var ctx = document.getElementById('myChart').getContext('2d');
    
    var chartData = {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 4
        }]
    };

    if(selectedGraph === "Baro Altitude - Time"){
        const data_array = allFunctions.getBaroAltitude(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Baro Altitude - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Baro Altitude";
    }
    else if(selectedGraph === "Geo Altitude - Time"){
        const data_array = allFunctions.getGeoAltitude(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Geo Altitude - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Geo Altitude";
    }
    else if(selectedGraph === "Latitude - Time"){
        const data_array = allFunctions.getLatitude(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Latitude - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Latitude";
    }
    else if(selectedGraph === "Longitude - Time"){
        const data_array = allFunctions.getLongitude(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Longitude - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Longitude";
    }
    else if(selectedGraph === "True Track - Time"){
        const data_array = allFunctions.getTrueTrack(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "True Track - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "True Track";
    }
    else if(selectedGraph === "Velocity - Time"){
        const data_array = allFunctions.getVelocity(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Velocity - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Velocity";
    }
    else if(selectedGraph === "Vertical Rate - Time"){
        const data_array = allFunctions.getVerticalRate(matchingData);
        chartData.labels = Array.from({ length: data_array.length }, (_, i) => (i*10).toString());
        chartData.datasets[0].label = "Vertical Rate - Time";
        chartData.datasets[0].data = data_array;
        yAxisText = "Vertical Rate";
    }

    var myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                x: {
                
                    type: 'linear',
                    ticks: {
                        stepSize: 0.0001,
                        precision: 4 // Adjust precision for the x-axis ticks
                    },
                    title: {

                        display: true,
    
                        text: "Time"
    
                    }
                    
                },
                y: {
                    type: 'linear',
                    ticks: {
                        stepSize: 0.0001,
                        precision: 4 // Adjust precision for the y-axis ticks
                    },
                    title: {

                        display: true,
    
                        text: yAxisText
    
                    }

                    
                    
                }
            },
            
        }
    });

    // event listener for Google Maps
    myChart.canvas.addEventListener('click', function(evt) {
        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
            var index = points[0].index;
            var latitude = allFunctions.getLatitude(matchingData)[index];
            var longitude = allFunctions.getLongitude(matchingData)[index];
            var googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            var mapWindow = window.open(googleMapsUrl, '_blank');
        }
    });


}

// Retrieve the selectedGraph value from the URL query parameters
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGraph = urlParams.get('selectedGraph');
    const xababArrayString = urlParams.get('xabab');
    const selectedCallSign = urlParams.get('selectedCallSign');
    //const xababArray = JSON.parse(xababArrayString);
    allFunctions.loadPlanesDataFromFile("../data_retrieving/planes.txt")
        .then(planesData => {
            const matchingData = allFunctions.findMatchingCallsignData(planesData, selectedCallSign);
            createChart(selectedGraph, matchingData);
        })


});


