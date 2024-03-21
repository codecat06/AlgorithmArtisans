import { loadPlanesDataFromFile, findCallsigns, findMatchingCallsignData, printMatchingCallsignData } from '../data_retrieving/PlaneData.js'

let callsigns;
var selectedCallsign = "NOT SELECTED";
// script.js
const planes = [
    { name: "Boeing 737", id: 1 },
    { name: "Airbus A320", id: 2 },
    { name: "Boeing 777", id: 3 },
    { name: "Airbus A380", id: 4 },
    { name: "Airbus A380", id: 4 },
    { name: "Airbus A380", id: 4 },
    { name: "Airbus A380", id: 4 },
    { name: "Airbus A380", id: 4 },
    
    // Add more planes as needed
];

const planeInput = document.getElementById('planeInput');
const planeList = document.getElementById('planeList');

// Function to filter planes based on user input
function filterPlanes() {
    const searchTerm = planeInput.value.toLowerCase();
    const filteredPlanes = planes.filter(plane => plane.name.toLowerCase().includes(searchTerm));
    displayPlanes(filteredPlanes);
}

function filterCallsigns() {
    const searchTerm = planeInput.value.trim().toUpperCase(); // Convert search term to uppercase for case-insensitive comparison
    const filteredCallsigns = callsigns.filter(callsign => callsign.toUpperCase().includes(searchTerm));
    displayCallsigns(filteredCallsigns);
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

// Function to display filtered planes
function displayPlanes(planesToShow) {
    planeList.innerHTML = '';
    planesToShow.forEach(plane => {
        const li = document.createElement('li');
        li.textContent = plane.name;
        li.setAttribute('data-id', plane.id);
        planeList.appendChild(li);
    });
}

// Event listener for input change
planeInput.addEventListener('input', filterCallsigns);

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
// Get the output div element
const outputDiv = document.getElementById('output');

// Function to print content on the screen
function printOnScreen(content) {
    // Set the content of the output div
    outputDiv.textContent = content;
}

// Call the function to print something on the screen

// Initial display of all planes

//displayPlanes(planes);






// Usage: Load the data from file and process it
loadPlanesDataFromFile('../data_retrieving/planes.txt')
    .then(planesData => {
        callsign = 'N6545H'; // Example callsign to search for
        const matchingData = findMatchingCallsignData(planesData, callsign);
        printMatchingCallsignData(matchingData);
    })
    
    .catch(err => {
        console.error('Error loading planes data:', err);
    });

loadPlanesDataFromFile("../data_retrieving/planes.txt")
.then(planesData => {
    callsigns = findCallsigns(planesData);
    //console.log(callsigns);
    //displayPlanes(callsigns);
    displayCallsigns(callsigns);
    //filterCallsigns(planeInput);
})
.then(() => {
    //
});
