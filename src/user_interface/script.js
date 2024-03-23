import { loadPlanesDataFromFile, findCallsigns, findMatchingCallsignData, printMatchingCallsignData, getGeoAltitude, getValidProperties} from '../data_retrieving/PlaneData.js'

let callsigns;
let planesData_tmp;
let validProperties;
let xabab;
let xababArrayString;
let selectedCallsign = "NOT SELECTED";
let selectedGraph = "NOT SELECTED";
// script.js
loadPlanesDataFromFile("../data_retrieving/planes.txt")
    .then(planesData => {
        planesData_tmp = planesData;
        callsigns = findCallsigns(planesData);

        xabab = [15,15,15,15,5,9];
        xababArrayString = JSON.stringify(xabab);
        //xabab = getGeoAltitude(findMatchingCallsignData(planesData, selectedCallsign));
        //xaba = getGeoAltitude(findMatchingCallsignData(planesData, selectedCallsign));
        //console.log(callsigns);
        //displayPlanes(callsigns);
        displayCallsigns(callsigns);
        displayGraphsSelection(validProperties);
        //filterCallsigns(planeInput);
    })
let graphs = [
    { name: "Baro Altitude-time", id: 1 },
    { name: "Geo Altitude-time", id: 2 },
    { name: "Latitude-time", id: 3 },
    { name: "longitude-time", id: 4 },
    { name: "Velocity-time", id: 5 },
    { name: "x-time", id: 6 },
    { name: "y-time", id: 7 },
    { name: "z-time", id: 8 },

];

const planeInput = document.getElementById('planeInput');
const planeList = document.getElementById('planeList');

const graphInput = document.getElementById('graphInput');
const graphList = document.getElementById('graphList');


// Function to filter planes based on user input
function filterCallsigns() {
    const searchTerm = planeInput.value.trim().toUpperCase(); // Convert search term to uppercase for case-insensitive comparison
    const filteredCallsigns = callsigns.filter(callsign => callsign.toUpperCase().includes(searchTerm));
    displayCallsigns(filteredCallsigns);
}
function filterGraphsBasedOnCallSigns(){
    graphs = validProperties;
}
function filterGraphs() {
    const searchTerm = graphInput.value.trim().toUpperCase(); // Retrieve the value from the input field and convert it to uppercase
    const filteredGraphs = validProperties.filter(property => property.toUpperCase().includes(searchTerm));
    displayGraphsSelection(filteredGraphs); // Call the function to display the filtered graphs
}
// Function to display filtered callsigns
function displayCallsigns(callsignsToShow) {
    planeList.innerHTML = '';
    callsignsToShow.forEach(callsign => {
        const li = document.createElement('li');
        li.textContent = callsign;
        planeList.appendChild(li);
    });
}
function displayGraphsSelection(validProperties) {
    graphList.innerHTML = ''; // Clear the previous content of graphList
    validProperties.forEach(property => {
        const li = document.createElement('li');
        li.textContent = property; // Display the name of the graph

        graphList.appendChild(li); // Append the list item to the graphList
    });
}

// Event listener for input change
planeInput.addEventListener('input', filterCallsigns);
graphInput.addEventListener('input', filterGraphs);
// Event listener for plane selection
planeList.addEventListener('click', (event) => {
    selectedCallsign = event.target.textContent;
    printOnScreen(selectedCallsign);
    planeInput.placeholder = `${selectedCallsign}`;
    validProperties = getValidProperties(findMatchingCallsignData(planesData_tmp, selectedCallsign));
    displayGraphsSelection(validProperties);
    /*const selectedPlaneId = event.target.getAttribute('data-id');
    if (selectedPlaneId) {
        // Redirect to the page with selected plane data
        window.location.href = `plane-info.html?id=${selectedPlaneId}`;
    }*/
});

graphList.addEventListener('click', (event) => {
    selectedGraph = event.target.textContent;
    printOnScreen2(selectedGraph);
    graphInput.placeholder = `${selectedGraph}`;
    /*const selectedPlaneId = event.target.getAttribute('data-id');
    if (selectedPlaneId) {
        // Redirect to the page with selected plane data
        window.location.href = `plane-info.html?id=${selectedPlaneId}`;
    }*/
});

// Get the output div element
const outputDiv = document.getElementById('output');
const output2Div = document.getElementById('output2');
// Function to print content on the screen
function printOnScreen(content) {
    // Set the content of the output div
    outputDiv.textContent = content;
}
function printOnScreen2(content) {
    // Set the content of the output div
    output2Div.textContent = content;
}


/*function displayGraph(selectedCallsign, selectedGraph){


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


}*/






// Usage: Load the data from file and process it


const button = document.getElementById('upperButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the window location to the new HTML file
    //displayGraph(selectedCallsign, selectedGraph);

    window.location.href = `GoToGraph.html?selectedGraph=${selectedGraph}&xabab=${xababArrayString}&selectedCallSign=${selectedCallsign}`;
    createChart(selectedGraph);
});
