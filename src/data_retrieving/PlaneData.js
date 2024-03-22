export async function loadPlanesDataFromFile(filename) {

    const response = await fetch(filename);
  
    const text = await response.text();
  
    const planesData = text.split('\n').filter(line => line.trim().length > 0).map(JSON.parse);
  
    return planesData;
  
}

// returns an array that contains the lines with matching callsign
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


// returns an array that contains the valid properties that can be converted to a graph
// of a given matchingData
function getValidProperties(matchingData){
    const result = new Set();
    matchingData.forEach(data => {
        if(data.baro_altitude !== null){
            result.add("baro_altitude");
        }
        if(data.geo_altitude !== null){
            result.add("geo_altitude");
        }
        if(data.latitude !== null){
            result.add("latitude");
        }
        if(data.longitude !== null){
            result.add("longitude");
        }
        if(data.true_track !== null){
            result.add("true_track");
        }
        if(data.velocity !== null){
            result.add("velocity");
        }
        if(data.vertical_rate !== null){
            result.add("vertical_rate");
        }
    });
    return [...result];
}



/*
*  GETTER FUNCTIONS FOR THE PROPERTIES OF THE SELECTED PLANE ( CALLSIGN )
*  ( CALL THE FUNCTION "findMatchingCallsignData" to get the lines that contains
*  the matching callsign.
* */

// returns an array that contains the baro_altitude values in the matching data
function getBaroAltitude(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.baro_altitude));
    });
    return result;
}

// returns an array that contains the callsign values in the matching data
function getCallsign(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.callsign);
    });
    return result;
}

// returns an array that contains the category values in the matching data
function getCategory(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.category));
    });
    return result;
}

// returns an array that contains the geo_altitude values in the matching data
function getGeoAltitude(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.geo_altitude));
    });
    return result;
}

// returns an array that contains the icao24 values in the matching data
function getIcao(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.icao24);
    });
    return result;
}

// returns an array that contains the last_contact values in the matching data
function getLastContact(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.last_contact));
    });
    return result;
}

// returns an array that contains the latitude values in the matching data
function getLatitude(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.latitude));
    });
    return result;
}

// returns an array that contains the longitude values in the matching data
function getLongitude(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.longitude));
    });
    return result;
}

// returns an array that contains the on_ground values in the matching data
function getOnGround(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.on_ground);
    });
    return result;
}

// returns the origin_country value in the matching data
function getOriginCountry(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.origin_country);
    });
    return result[0];
}

// returns an array that contains the position_source values in the matching data
function getPositionSource(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.position_source));
    });
    return result;
}

// returns an array that contains the sensors values in the matching data
function getSensors(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.sensors);
    });
    return result;
}

// returns an array that contains the spi values in the matching data
function getSpi(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.spi);
    });
    return result;
}

// returns an array that contains the squawk values in the matching data
function getSquawk(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(data.squawk);
    });
    return result;
}

// returns an array that contains the time_position values in the matching data
function getTimePosition(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.time_position));
    });
    return result;
}

// returns an array that contains the true_track values in the matching data
function getTrueTrack(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.true_track));
    });
    return result;
}

// returns an array that contains the velocity values in the matching data
function getVelocity(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.velocity));
    });
    return result;
}

// returns an array that contains the vertical_rate values in the matching data
function getVerticalRate(matchingData){
    const result = [];
    matchingData.forEach(data => {
        result.push(Number(data.vertical_rate));
    });
    return result;
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
