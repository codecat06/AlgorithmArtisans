import allFunctions from '../data_retrieving/PlaneData.js'
function createChart(selectedGraph, xabab, selectedCallSign) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [selectedGraph, selectedCallSign, "2", "3", "4", "5"],
            datasets: [{
                label: ['x'],
                data: xabab,
                backgroundColor: ['black'],
                borderColor: 'black',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Retrieve the selectedGraph value from the URL query parameters
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGraph = urlParams.get('selectedGraph');
    const xababArrayString = urlParams.get('xabab');
    const selectedCallSign = urlParams.get('selectedCallSign');
    const xababArray = JSON.parse(xababArrayString);
    // Call createChart with the retrieved selectedGraph value
    createChart(selectedGraph, xababArray, selectedCallSign);
});
