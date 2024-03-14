from opensky_api import OpenSkyApi
import ast
import json

api = OpenSkyApi()
states = api.get_states()


# with open("planes.txt", "a") as fo:
#     for s in states.states:
#         # converting state data to dictionary format
#         s_dict = {
#             'baro_altitude': s.baro_altitude,
#             'callsign': s.callsign,
#             'category': s.category,
#             'geo_altitude': s.geo_altitude,
#             'icao24': s.icao24,
#             'last_contact': s.last_contact,
#             'latitude': s.latitude,
#             'longitude': s.longitude,
#             'on_ground': s.on_ground,
#             'origin_country': s.origin_country,
#             'position_source': s.position_source,
#             'sensors': s.sensors,
#             'spi': s.spi,
#             'squawk': s.squawk,
#             'time_position': s.time_position,
#             'true_track': s.true_track,
#             'velocity': s.velocity,
#             'vertical_rate': s.vertical_rate
#         }
#         # each line consists all information about one plane
#         json.dump(s_dict, fo)
#         fo.write('\n')



# reading the file to find the data matching the callsign
callsign_data = {}
lines_by_number = {}

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
        lines_by_number[idx] = line.strip()

# printing the line numbers of matching callsign
matching_callsign = "EZY46PF"
matching_line_numbers = []
for callsign, line_numbers in callsign_data.items():
    if callsign.strip() == matching_callsign.strip():
        matching_line_numbers.append(line_numbers)
        print(f"Callsign: {callsign}, Line Numbers: {line_numbers}")

matching_lines = []
# printing the lines that contains the matching callsign
with open("planes.txt", "r") as fo:
    for idx, line in enumerate(fo, start=1):
        if idx in matching_line_numbers.__getitem__(0):
            matching_lines.append(line)
            print(line)

# printing the wanted properties with given lines
for line in matching_lines:
    data_dict = json.loads(line)
    print(f"baro_altitude: {data_dict['baro_altitude']}")
    print(f"category: {data_dict['category']}")
    print(f"geo_altitude: {data_dict['geo_altitude']}")








