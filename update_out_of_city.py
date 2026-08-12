import json

fleet_path = 'src/data/fleet.json'
with open(fleet_path, 'r', encoding='utf-8') as f:
    fleet_data = json.load(f)

for car in fleet_data:
    rent = car.get('rent', {})
    
    # Handle direct local/interCity/outstation
    if 'local' in rent:
        base = rent['local']
        if 'interCity' in rent:
            rent['interCity'] = base + 2000
        if 'outstation' in rent:
            rent['outstation'] = base + 2000
            
    # Handle withDriver
    if 'withDriver' in rent and 'local' in rent['withDriver']:
        base = rent['withDriver']['local']
        if 'interCity' in rent['withDriver']:
            rent['withDriver']['interCity'] = base + 2000
        if 'outstation' in rent['withDriver']:
            rent['withDriver']['outstation'] = base + 2000
            
    # Handle withoutDriver
    if 'withoutDriver' in rent and 'local' in rent['withoutDriver']:
        base = rent['withoutDriver']['local']
        if 'interCity' in rent['withoutDriver']:
            rent['withoutDriver']['interCity'] = base + 2000
        if 'outstation' in rent['withoutDriver']:
            rent['withoutDriver']['outstation'] = base + 2000

with open(fleet_path, 'w', encoding='utf-8') as f:
    json.dump(fleet_data, f, indent=2)

print("Out of city rates adjusted to +2000")
