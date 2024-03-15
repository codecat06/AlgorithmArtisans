function createChart() {
    // JavaScript code to create the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line', // Change this to the type of chart you want (bar, line, pie, etc.)
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'x',
                data: [12, 19, 3, 5, 2, 3, 9, 20, 15, 16],
                backgroundColor: [
                    'black'
                ],
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

// Add event listener to the button
document.getElementById('createChartButton').addEventListener('click', function () {
    // Clear the previous chart if exists
    var previousChart = Chart.getChart("myChart");
    if (previousChart) {
        previousChart.destroy();
    }
    // Create a new chart
    createChart();
});
