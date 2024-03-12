from opensky_api import OpenSkyApi
import ast
import json

api = OpenSkyApi()
states = api.get_states()


with open("planes.txt", "a") as fo:
    for s in states.states:
        # converting state data to dictionary format
        s_dict = {
            'baro_altitude': s.baro_altitude,
            'callsign': s.callsign,
            'category': s.category,
            'geo_altitude': s.geo_altitude,
            'icao24': s.icao24,
            'last_contact': s.last_contact,
            'latitude': s.latitude,
            'longitude': s.longitude,
            'on_ground': s.on_ground,
            'origin_country': s.origin_country,
            'position_source': s.position_source,
            'sensors': s.sensors,
            'spi': s.spi,
            'squawk': s.squawk,
            'time_position': s.time_position,
            'true_track': s.true_track,
            'velocity': s.velocity,
            'vertical_rate': s.vertical_rate
        }
        # each line consists all information about one plane
        json.dump(s_dict, fo)
        fo.write('\n')

# reading the "planes.txt" file to find the data matching with the callsign

# Reading the file to find the data matching the callsign
callsign_data = {}

with open("planes.txt", "r") as fo:
    for idx, line in enumerate(fo, start=1):
        try:
            plane_info = json.loads(line.strip())
        except json.JSONDecodeError:
            print(f"Skipping line {idx} due to JSONDecodeError: {line.strip()}")
            continue
        callsign = plane_info.get('callsign')
        if callsign not in callsign_data:
            callsign_data[callsign] = []
        callsign_data[callsign].append(idx)

# printing the line numbers of matching callsign
matching_callsign = "AAL1022"
for callsign, line_numbers in callsign_data.items():
    if callsign.strip() == matching_callsign.strip():
        print(f"Callsign: {callsign}, Line Numbers: {line_numbers}")







