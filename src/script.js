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
planeInput.addEventListener('input', filterPlanes);

// Event listener for plane selection
planeList.addEventListener('click', (event) => {
    const selectedPlaneId = event.target.getAttribute('data-id');
    if (selectedPlaneId) {
        // Redirect to the page with selected plane data
        window.location.href = `plane-info.html?id=${selectedPlaneId}`;
    }
});

// Initial display of all planes
displayPlanes(planes);
