from opensky_api import OpenSkyApi
import json
import time


def fetch_planes_data():
    api = OpenSkyApi()
    states = api.get_states()
    planes_data = []
    for s in states.states:
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
        planes_data.append(s_dict)
    return planes_data


def save_planes_data_to_file(filename):
    planes_data = fetch_planes_data()
    with open(filename, "a") as fo:
        for plane_data in planes_data:
            json.dump(plane_data, fo)
            fo.write('\n')


def load_planes_data_from_file(filename):
    planes_data = []
    with open(filename, "r") as fo:
        for line in fo:
            try:
                plane_info = json.loads(line.strip())
            except json.JSONDecodeError:
                continue
            planes_data.append(plane_info)
    return planes_data


def find_matching_callsign_data(planes_data, callsign):
    matching_data = []
    for plane_data in planes_data:
        if plane_data.get('callsign', '').strip() == callsign.strip():
            matching_data.append(plane_data)
    return matching_data


def print_matching_callsign_data(matching_data):
    for data in matching_data:
        print(f"baro_altitude: {data['baro_altitude']}")
        print(f"category: {data['category']}")
        print(f"icao24: {data['icao24']}")
        print(f"last_contact: {data['last_contact']}")
        print(f"latitude: {data['latitude']}")
        print(f"longitude: {data['longitude']}")
        print(f"on_ground: {data['on_ground']}")
        print(f"origin_country: {data['origin_country']}")
        print(f"position_source: {data['position_source']}")
        print(f"sensors: {data['sensors']}")
        print(f"spi: {data['spi']}")
        print(f"squawk: {data['squawk']}")
        print(f"time_position: {data['time_position']}")
        print(f"true_track: {data['true_track']}")
        print(f"velocity: {data['velocity']}")
        print(f"vertical_rate: {data['vertical_rate']}")
        print("")


# # initial planes.txt
# save_planes_data_to_file("planes.txt")
# time.sleep(10)
# save_planes_data_to_file("planes.txt")
# time.sleep(10)
# save_planes_data_to_file("planes.txt")
# time.sleep(10)
# save_planes_data_to_file("planes.txt")
# time.sleep(10)
# save_planes_data_to_file("planes.txt")


# printing all properties of given lines
planes_data = load_planes_data_from_file("planes.txt")
matching_callsign = "SWA3313"
matching_data = find_matching_callsign_data(planes_data, matching_callsign)
print_matching_callsign_data(matching_data)










