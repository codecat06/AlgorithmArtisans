const fs = require('fs');
const readline = require('readline');

function loadPlanesDataFromFile(filename) {
    return new Promise((resolve, reject) => {
        const planesData = [];
        const inputStream = fs.createReadStream(filename, 'utf8');
        const rl = readline.createInterface({
            input: inputStream,
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            try {
                const jsonData = JSON.parse(line);
                planesData.push(jsonData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        });

        rl.on('close', () => {
            //console.log('File processed.');
            resolve(planesData);
        });

        rl.on('error', (err) => {
            console.error('Error reading file:', err);
            reject(err);
        });
    });
}

function findMatchingCallsignData(planesData, callsign) {
    return planesData.filter(planeData => planeData.callsign.trim() === callsign.trim());
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
        const callsign = 'N6545H'; // Example callsign to search for
        const matchingData = findMatchingCallsignData(planesData, callsign);
        printMatchingCallsignData(matchingData);
    })
    .catch(err => {
        console.error('Error loading planes data:', err);
    });



