export async function loadPlanesDataFromFile(filename) {

    const response = await fetch(filename);
  
    const text = await response.text();
  
    const planesData = text.split('\n').filter(line => line.trim().length > 0).map(JSON.parse);
  
    return planesData;
  
}

export function findMatchingCallsignData(planesData, callsign) {
    return planesData.filter(planeData => planeData.callsign.trim() === callsign.trim());
}
export function findCallsigns(planesData) {
    const callsigns = new Set();
    planesData.forEach(planeData => {
        callsigns.add(planeData.callsign.trim());
    });
    return [...callsigns];
}

export function printMatchingCallsignData(matchingData) {
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
        const callsign = 'N6545H'; // Example callsign to search for
        const matchingData = findMatchingCallsignData(planesData, callsign);
        printMatchingCallsignData(matchingData);
    })
    .catch(err => {
        console.error('Error loading planes data:', err);
    });

loadPlanesDataFromFile("planes.txt")
.then(planesData => {
    const callsigns = findCallsigns(planesData);
    console.log(callsigns);
});
