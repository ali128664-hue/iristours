import json
import os
import re

# Update Rents
fleet_path = 'src/data/fleet.json'
with open(fleet_path, 'r', encoding='utf-8') as f:
    fleet_data = json.load(f)

# The list of updates based on user request:
updates = {
    "Toyota Yaris": 7000,
    "Toyota Corolla (GLi / Altis / Grande)": 8000, # Assuming Altis 1.6 matches this
    "Honda Civic": 10000,
    "Honda BR-V": 10000,
    "MG HS": 13000,
    "Kia Sportage": 13000,
    "Toyota Fortuner": 20000,
    "Toyota Land Cruiser Prado": 20000,
    "Toyota Land Cruiser V8": 40000,
    "Toyota Hiace Grand Cabin": 15000, # Hiace
    "Toyota Coaster Saloon": 20000, # Coaster
    "Audi A6": 40000
}

for car in fleet_data:
    if car['name'] in updates:
        if 'local' in car['rent']:
            car['rent']['local'] = updates[car['name']]
        elif 'daily' in car['rent']:
            car['rent']['daily'] = updates[car['name']]

with open(fleet_path, 'w', encoding='utf-8') as f:
    json.dump(fleet_data, f, indent=2)

# Update Pakpattan to Islamabad
def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If file is serviceAreas.json, we need to be careful? Actually it's better to just replace strings
    new_content = content.replace("Pakpattan", "Islamabad")
    new_content = new_content.replace("pakpattan", "islamabad")
    new_content = new_content.replace("PAKPATTAN", "ISLAMABAD")

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# Walk through the directory
for root, dirs, files in os.walk('.'):
    # skip node_modules and .git, .next
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.txt', '.json', '.js', '.md', '.html', '.css')):
            replace_in_file(os.path.join(root, file))

print("Done updating.")
