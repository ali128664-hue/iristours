import json

fleet_path = 'src/data/fleet.json'
with open(fleet_path, 'r', encoding='utf-8') as f:
    fleet_data = json.load(f)

# The list of updates based on user request:
updates = {
    "Toyota Corolla (GLi / Altis / Grande)": {"weekly": 30000, "monthly": 210000},
    "Toyota Fortuner": {"weekly": 130000, "monthly": 500000},
    "Toyota Land Cruiser Prado": {"weekly": 130000, "monthly": 500000},
    "Honda Civic": {"weekly": 36000, "monthly": 240000},
    "Honda BR-V": {"weekly": 36000, "monthly": 240000},
}

for car in fleet_data:
    if car['name'] in updates:
        car['rent']['weekly'] = updates[car['name']]['weekly']
        car['rent']['monthly'] = updates[car['name']]['monthly']

with open(fleet_path, 'w', encoding='utf-8') as f:
    json.dump(fleet_data, f, indent=2)

print("Weekly and monthly rates updated.")
