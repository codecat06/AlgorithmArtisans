from opensky_api import OpenSkyApi
import ast

api = OpenSkyApi()
states = api.get_states()

# for s in states.states:
#    print(s)

# saving plane data in the "planes.txt" file
with open("planes.txt", "a") as fo:
    for s in states.states:
        fo.write(str(s))

callsign = "ANZ006L"
# reading the "planes.txt" file to find the data matching with the callsign

callsign_to_match = "ANZ006L"

# with open("planes.txt", "r") as fo:
#     for line in fo:
#         # Convert the line to a dictionary
#         try:
#             plane_info = ast.literal_eval(line.strip())
#         except SyntaxError:
#             # Skip lines that are not valid dictionaries
#             continue
#         # Check if the callsign matches
#         if plane_info.get('callsign') == callsign_to_match:
#             # Print the plane information in the desired format
#             print("{")
#             for key, value in plane_info.items():
#                 print(f"    '{key}': {value},")
#             print("}")


