var user_input;
//var matchingData;
function getInput() {

    user_input = document.getElementById("myTextbox").value;
  
    alert("You entered: " + user_input);
    return user_input;
}

function createChart() {
    var matchingData = findMatchingData(datas, user_input);
    // JavaScript code to create the chart
    document.getElementById('fileContents').textContent = "Number of planes: " + (matchingData.altitude);
    var ctx = document.getElementById('myChart').getContext('2d');
    var whichGraph = 1;
    var type;
    if(whichGraph == 1){
        type = 'bar';
    }else{
        type = 'pie';
    }
    var myChart = new Chart(ctx, {
        type: type, // Change this to the type of chart you want (bar, line, pie, etc.)
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
document.getElementById('createChartButton').addEventListener('click', function () {
    // Clear the previous chart if exists
    var previousChart = Chart.getChart("myChart");
    if (previousChart) {
        previousChart.destroy();
    }
    // Create a new chart
    console.log();
    getInput();
    createChart();
});
// Initialize the array to store the data

var datas = [];
var planeCounter;

// Read the contents of the file

fetch('exampleabab.txt')

  .then(response => response.text())

  .then(contents => {

    // Split the content into lines

    var lines = contents.split('\n');


    // Create an array of objects from the lines

    datas = lines.map(line => {

      var parts = line.split(' ');

      return {

        name: parts[0],

        altitude: parseInt(parts[1]),

        passengers: parseInt(parts[2])

      };

    });
    planeCounter = datas.length -1;
    //document.getElementById('fileContents').textContent = "Number of planes: " + (planeCounter);
    matchingData = findMatchingData(datas, user_input);

  })

  .catch(error => {

    console.error('Error reading file:', error);

  });

  function findMatchingData(datas, user_input) {

    return datas.find(data => data.name === user_input);
    //document.getElementById('fileContents').textContent = matchingData.name;

  }
  /*const button = document.getElementById('a');
  button.addEventListener('click', fetch);*/
  // Function to handle button click
  
