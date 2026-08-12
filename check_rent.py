import json

with open('src/data/fleet.json', encoding='utf-8') as f:
    data = json.load(f)

for car in data:
    print(f"{car['name']} -> {car['rent']}")
