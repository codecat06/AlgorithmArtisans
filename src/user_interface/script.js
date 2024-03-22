import { loadPlanesDataFromFile, findCallsigns, findMatchingCallsignData, printMatchingCallsignData } from '../data_retrieving/PlaneData.js'

let callsigns;
var selectedCallsign = "NOT SELECTED";
var selectedGraph = "NOT SELECTED";
// script.js
const graphs = [
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
function filterGraphs() {
    const searchTerm = graphInput.value.trim().toUpperCase(); // Retrieve the value from the input field and convert it to uppercase
    const filteredGraphs = graphs.filter(graph => graph.name.toUpperCase().includes(searchTerm));
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
function displayGraphsSelection(graphs) {
    graphList.innerHTML = ''; // Clear the previous content of graphList
    graphs.forEach(graph => {
        const li = document.createElement('li');
        li.textContent = graph.name; // Display the name of the graph
        li.setAttribute('data-id', graph.id); // Set the data-id attribute to the graph's id
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

// Usage: Load the data from file and process it
loadPlanesDataFromFile("../data_retrieving/planes.txt")
    .then(planesData => {
        callsigns = findCallsigns(planesData);
        //console.log(callsigns);
        //displayPlanes(callsigns);
        displayCallsigns(callsigns);
        displayGraphsSelection(graphs);
        //filterCallsigns(planeInput);
    })
    .then(() => {
        //
    });