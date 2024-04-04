import allFunctions from '../data_retrieving/PlaneData.js'

let callsigns;
let planesData_tmp;
let validProperties;
let xabab;
let xababArrayString;
let selectedCallsign = "NOT SELECTED";
let selectedGraph = "NOT SELECTED";
// script.js
allFunctions.loadPlanesDataFromFile("../data_retrieving/planes.txt")
    .then(planesData => {
        planesData_tmp = planesData;
        callsigns = allFunctions.findCallsigns(planesData);

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
    validProperties = allFunctions.getValidProperties(allFunctions.findMatchingCallsignData(planesData_tmp, selectedCallsign));
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


// Function to display plane properties
function displayPlaneProperties(callsign) {
    const planeData = allFunctions.findMatchingCallsignData(planesData_tmp, callsign);
    if (planeData) {
        // Set innerHTML of each property span with corresponding value
        document.getElementById('originCountry').innerHTML = allFunctions.getOriginCountry(planeData);
        document.getElementById('icao').innerHTML = allFunctions.getIcao(planeData)[0];
        document.getElementById('onGround').innerHTML = allFunctions.getOnGround(planeData)[0];
        document.getElementById('category').innerHTML = allFunctions.getCategory(planeData)[0];
    } else {
        // If no data found for the selected callsign
        console.log("No data found for the selected plane.");
    }
}



// Function to display the map of last two locations of the selected callsign
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
    });

    allFunctions.loadPlanesDataFromFile("../data_retrieving/planes.txt")
        .then(planesData => {
            var matchingData = allFunctions.findMatchingCallsignData(planesData, selectedCallsign);

            const lat_arr = allFunctions.getLatitude(matchingData);
            const lng_arr = allFunctions.getLongitude(matchingData);
            var lat1 = Number(lat_arr[lat_arr.length - 1]);
            var lng1 = Number(lng_arr[lng_arr.length - 1]);
            var lat2 = Number(lat_arr[lat_arr.length - 2]);
            var lng2 = Number(lng_arr[lng_arr.length - 2]);
            var location1 = { lat: lat1, lng: lng1 };
            var location2 = { lat: lat2, lng: lng2 };

            // Calculate the bearing between the two locations
            var bearing = google.maps.geometry.spherical.computeHeading(location1, location2);

            // Create a symbol for the plane icon
            var planeSymbol = {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 4,
                fillColor: 'blue',
                fillOpacity: 0.8,
                strokeWeight: 2,
                rotation: bearing // Set the rotation of the symbol to the bearing between the two locations
            };

            var marker1 = new google.maps.Marker({
                position: location1,
                map: map,
                title: 'Last Location',
                icon: planeSymbol
            });

            var bounds = new google.maps.LatLngBounds();
            bounds.extend(marker1.getPosition());
            map.fitBounds(bounds);
            map.setZoom(12)
        });
}





planeList.addEventListener('click', (event) => {
    selectedCallsign = event.target.textContent;
    printOnScreen(selectedCallsign);
    planeInput.placeholder = `${selectedCallsign}`;
    validProperties = allFunctions.getValidProperties(allFunctions.findMatchingCallsignData(planesData_tmp, selectedCallsign));
    displayGraphsSelection(validProperties);

    // Access the element with the class 'plane-properties'
    const planeProperties = document.querySelector('.plane-properties');

// Set the visibility to 'hidden'
    planeProperties.style.visibility = 'visible';
    // Display plane properties
    displayPlaneProperties(selectedCallsign); // Add this line

    initMap();

    /*const selectedPlaneId = event.target.getAttribute('data-id');
    if (selectedPlaneId) {
        // Redirect to the page with selected plane data
        window.location.href = `plane-info.html?id=${selectedPlaneId}`;
    }*/
});





// Usage: Load the data from file and process it


const button = document.getElementById('upperButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the window location to the new HTML file
    //displayGraph(selectedCallsign, selectedGraph);

    window.location.href = `GoToGraph.html?selectedGraph=${selectedGraph}&xabab=${xababArrayString}&selectedCallSign=${selectedCallsign}`;
    createChart(selectedGraph);
});
