import json
import re

data_text = """
Economy & Standard Cars:
Suzuki Alto: PKR 3,500 – 4,500 / day
Suzuki Wagon R: PKR 3,500 – 5,500 / day
Suzuki Cultus: PKR 4,000 – 6,000 / day
Honda City: PKR 5,000 – 8,000 / day
Toyota Yaris: PKR 5,000 – 8,000 / day

Executive & Premium Sedans:
Toyota Corolla (GLi / Altis / Grande): PKR 5,500 – 10,000 / day
Honda Civic: PKR 7,000 – 13,000 / day
Hyundai Sonata: PKR 15,000 – 20,000 / day

Crossovers & SUVs:
Honda BR-V: PKR 7,000 – 10,000 / day
Hyundai Tucson: PKR 12,000 – 14,000 / day
MG HS: PKR 12,000 – 14,000 / day
Kia Sportage: PKR 12,000 – 15,000 / day
Toyota Revo (Hilux): PKR 12,000 – 18,000 / day
Toyota Fortuner: PKR 15,000 – 24,000 / day
Toyota Land Cruiser Prado: PKR 14,000 – 29,000 / day
Toyota Land Cruiser V8: PKR 24,000 – 35,000 / day

Vans & Buses (Group Travel):
Suzuki APV: PKR 7,000 – 10,000 / day
Toyota Hiace Grand Cabin: PKR 12,000 – 16,000 / day
Toyota Coaster Saloon: PKR 15,000 – 29,000 / day
Yutong Bus: PKR 80,000 / day

Luxury & Wedding Vehicles:
Audi A4: PKR 30,000 / day
Audi A6: PKR 27,000 – 45,000 / day
Mercedes Benz (C-Class / C180): PKR 35,000 – 50,000 / day
Mercedes Benz S-Class: PKR 120,000 – 140,000 / day
Range Rover: PKR 100,000 – 120,000 / day
Chrysler Limousine: PKR 130,000 / day
V8 Limousine: PKR 135,000 / day
Tundra Limousine: PKR 140,000 / day
Hummer Limousine: PKR 145,000 / day
"""

lines = [l.strip() for l in data_text.strip().split('\n') if l.strip()]

fleet = []
current_category = ""

default_images = {
    "Economy": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    "Sedan": "https://images.unsplash.com/photo-1623815112351-34fa7df76fbf?q=80&w=800&auto=format&fit=crop",
    "SUV": "https://images.unsplash.com/photo-1596568359550-93a9d3e8e2d4?q=80&w=800&auto=format&fit=crop",
    "Van": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    "Bus": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    "Luxury": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop"
}

def map_category(cat_str):
    if "Economy" in cat_str: return "Economy"
    if "Sedan" in cat_str: return "Sedan"
    if "SUV" in cat_str: return "SUV"
    if "Vans" in cat_str: return "Van"
    if "Luxury" in cat_str: return "Luxury"
    return "Sedan"

for line in lines:
    if line.endswith(':'):
        current_category = map_category(line)
        continue
    
    # Parse vehicle line
    # Format: Name: PKR XXX - YYY / day
    parts = line.split(':')
    name = parts[0].strip()
    price_str = parts[1].strip()
    
    # Extract lower bound price
    prices = re.findall(r'[\d,]+', price_str)
    if not prices: continue
    daily_price = int(prices[0].replace(',', ''))
    
    brand = name.split()[0]
    if brand in ["Suzuki", "Toyota", "Honda", "Hyundai", "Kia", "MG", "Yutong", "Audi", "Mercedes", "Range", "Chrysler", "V8", "Tundra", "Hummer"]:
        pass
    else:
        brand = "Other"

    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

    fleet.append({
        "id": f"v-{slug}",
        "name": name,
        "slug": slug,
        "category": current_category,
        "brand": brand,
        "year": 2024,
        "transmission": "Automatic",
        "fuel": "Petrol",
        "seats": 5 if current_category in ["Economy", "Sedan", "Luxury"] else 7 if current_category == "SUV" else 14,
        "doors": 4,
        "airConditioning": True,
        "driverIncluded": True,
        "color": "Premium Assorted",
        "images": {
            "thumbnail": default_images.get(current_category),
            "gallery": [default_images.get(current_category)]
        },
        "rent": {
            "daily": daily_price,
            "weekly": int(daily_price * 7 * 0.9),
            "monthly": int(daily_price * 30 * 0.8),
            "securityDeposit": 0
        },
        "availability": True,
        "description": f"Rent the {name} for your travel needs in Pakistan. Premium quality and professional service guaranteed.",
        "features": [
            "Air Conditioning",
            "Power Steering",
            "Music System",
            "Professional Driver"
        ],
        "specifications": {
            "engine": "Standard",
            "horsepower": "Varies",
            "luggage": "Standard",
            "bluetooth": True,
            "usbCharging": True,
            "premiumAudio": False
        },
        "whatsappCategory": current_category,
        "seo": {
            "title": f"Rent {name} in Pakistan | Iris Tours",
            "description": f"Book {name} with Iris Tours. Best rates and professional drivers across Pakistan."
        },
        "policies": {
            "fuelPolicy": "Provided with full tank, return with full tank.",
            "mileagePolicy": "Unlimited mileage within city limits.",
            "outstationPolicy": "Allowed with prior approval.",
            "airportPickup": True,
            "weddingAvailable": True if current_category == "Luxury" else False,
            "corporateAvailable": True
        },
        "relatedVehicles": []
    })

with open('src/data/fleet.json', 'w') as f:
    json.dump(fleet, f, indent=2)

print("fleet.json updated with", len(fleet), "vehicles.")
