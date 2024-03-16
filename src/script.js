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

async function loadPlanesDataFromFile(filename) {

    const response = await fetch(filename);
  
    const text = await response.text();
  
    const planesData = text.split('\n').filter(line => line.trim().length > 0).map(JSON.parse);
  
    return planesData;
  
}

function findMatchingCallsignData(planesData, callsign) {
    return planesData.filter(planeData => planeData.callsign.trim() === callsign.trim());
}
function findCallsigns(planesData) {
    const callsigns = new Set();
    planesData.forEach(planeData => {
        callsigns.add(planeData.callsign.trim());
    });
    return [...callsigns];
}



function printMatchingCallsignData(matchingData) {
    matchingData.forEach(data => {
        console.log(`baro_altitude: ${data.baro_altitude}`);
        console.log(`category: ${data.category}`);
        console.log(`geo_altitude: ${data.geo_altitude}`);
        console.log(`icao24: ${data.icao24}`);
        console.log(`last_contact: ${data.last_contact}`);
        console.log(`latitude: ${data.latitude}`);
        console.log(`longitude: ${data.longitude}`);
        console.log(`on_ground: ${data.on_ground}`);
        console.log(`origin_country: ${data.origin_country}`);
        console.log(`position_source: ${data.position_source}`);
        console.log(`sensors: ${data.sensors}`);
        console.log(`spi: ${data.spi}`);
        console.log(`squawk: ${data.squawk}`);
        console.log(`time_position: ${data.time_position}`);
        console.log(`true_track: ${data.true_track}`);
        console.log(`velocity: ${data.velocity}`);
        console.log(`vertical_rate: ${data.vertical_rate}`);

        // converting string values to number values
        console.log(`geo_altitude as number: ${Number(data.geo_altitude)}`)
        console.log("");
    });
}

// Usage: Load the data from file and process it
loadPlanesDataFromFile('planes.txt')
    .then(planesData => {
        callsign = 'N6545H'; // Example callsign to search for
        const matchingData = findMatchingCallsignData(planesData, callsign);
        printMatchingCallsignData(matchingData);
    })
    
    .catch(err => {
        console.error('Error loading planes data:', err);
    });

loadPlanesDataFromFile("planes.txt")
.then(planesData => {
    callsigns = findCallsigns(planesData);
    console.log(callsigns);
    //displayPlanes(callsigns);
    displayCallsigns(callsigns);
    //filterCallsigns(planeInput);
})
.then(() => {
    //
});
