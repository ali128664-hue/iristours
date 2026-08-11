# Fleet Data — Developer & Owner Guide (`fleet.json`)

> **اردو نوٹ:** یہ فائل تمام گاڑیوں کا مرکزی ڈیٹا بیس ہے۔ نئی گاڑی شامل کرنے کے لیے کسی ایک entry کو copy کریں اور نیچے دی گئی ہدایات کے مطابق values تبدیل کریں۔

---

## What is `fleet.json`?

`src/data/fleet.json` is the **single source of truth** for all vehicles shown on the Iris Tours website.

- Every car page is generated from this file automatically.
- The fleet listing page (`/fleet`) reads from this file.
- The sitemap, llms.txt, and Schema.org data all pull from here.
- **No coding needed** — just edit the JSON values to update prices, add cars, or remove cars.

---

## How to Add a New Car

1. Open `src/data/fleet.json`
2. Copy an existing entry (from `{` to `},`)
3. Paste it at the **top** of the array (after the opening `[`)
4. Edit each field as described below
5. Save the file — the website updates automatically

---

## Field Reference

Every vehicle entry has the following fields:

### `id` (string)
A unique identifier for this vehicle. Use a format like `v-brand-model` (e.g., `v-honda-civic`).
**Must be unique across all entries. Do not repeat.**

Example: `"id": "v-toyota-corolla"`

---

### `name` (string)
The full display name of the vehicle. This appears on car cards and the detail page.

Example: `"name": "Toyota Corolla"`

---

### `slug` (string)
The URL-friendly version of the car name. Used in the page URL: `/fleet/[slug]`.
**Use lowercase letters and hyphens only. No spaces or special characters.**

Example: `"slug": "toyota-corolla"`

---

### `brand` (string)
The manufacturer/brand name. Used in filter dropdowns on the fleet page.
**Must be capitalised exactly** (e.g., `"Toyota"`, not `"toyota"`).

Example: `"brand": "Toyota"`

---

### `category` (string)
Vehicle category. Used for category filter buttons on the fleet page.
**Allowed values:** `"Sedan"`, `"SUV"`, `"Luxury"`, `"Economy"`, `"Van"`, `"Bus"`

Example: `"category": "Sedan"`

---

### `year` (number)
The model year of the vehicle. Used for the "Newest" sort option.

Example: `"year": 2024`

---

### `transmission` (string)
Gearbox type. Shown on the car card and detail page.
**Values:** `"Automatic"` or `"Manual"`

Example: `"transmission": "Automatic"`

---

### `fuelType` (string)
Type of fuel the vehicle uses.
**Common values:** `"Petrol"`, `"Diesel"`, `"Hybrid"`, `"Electric"`

Example: `"fuelType": "Petrol"`

> Also add `"fuel": "Petrol"` (duplicate field) — some components read `fuel` directly.

---

### `seats` (number)
Number of passenger seats. Shown on the car card.

Example: `"seats": 5`

---

### `luggage` (number)
Number of luggage bags the car can fit. Shown in specifications.

Example: `"luggage": 3`

---

### `driverIncluded` (boolean)
Whether a driver is included by default. If `true`, a "Driver" badge appears on the card.

Example: `"driverIncluded": false`

---

### `features` (array of strings)
List of features/amenities. Each item shows as a bullet point on the detail page.

```json
"features": [
  "Air Conditioning",
  "Leather Seats",
  "Sunroof",
  "Rear Camera"
]
```

---

### `images` (object)

#### `images.thumbnail` (string)
Path to the main image shown in search results and social sharing.
Store images in `public/fleet/` and use the path `/fleet/filename.jpg`.

Example: `"thumbnail": "/fleet/Toyota Corolla (1).jpg"`

#### `images.gallery` (array of strings)
List of image paths for the detail page gallery and card image slider.
Add as many images as you have — they show in the slider and gallery strip.

```json
"gallery": [
  "/fleet/Toyota Corolla (1).jpg",
  "/fleet/Toyota Corolla (2).jpg",
  "/fleet/Toyota Corolla (3).jpg"
]
```

> **To add images:** Copy your JPG/PNG files into `public/fleet/` and add the paths here.

---

### `rent` (object)
**All prices are in PKR (Pakistani Rupees).** Update these to change what's shown on the website.

#### `rent.daily` (number)
Base daily rate. Shown on fleet cards as the headline price.

Example: `"daily": 10000`

#### `rent.weekly` (number)
Weekly rate (7 days). Shown on the detail page sidebar.

Example: `"weekly": 60000`

#### `rent.monthly` (number)
Monthly rate (30 days). Shown on the detail page sidebar.

Example: `"monthly": 220000`

#### `rent.withDriver` (object)
Prices when a driver is provided by Iris Tours.

```json
"withDriver": {
  "local": 11000,
  "interCity": 13000,
  "outstation": 15000
}
```

- `local` — City trips within Lahore
- `interCity` — Travel between cities
- `outstation` — Long-distance/remote trips

#### `rent.withoutDriver` (object)
Prices for self-drive (no driver).

```json
"withoutDriver": {
  "local": 10000,
  "interCity": 12000,
  "outstation": 14000
}
```

---

### `policies` (object)
Rental policy text shown on the detail page. Update these to reflect your actual policies.

```json
"policies": {
  "fuelPolicy": "Fuel is included in the rental package.",
  "mileagePolicy": "Local packages include up to 100 km/day.",
  "outstationPolicy": "Driver allowance and toll charges are additional."
}
```

---

### `seo` (object)
Controls what appears in Google search results for this car's page.

#### `seo.title` (string)
The page title shown in browser tabs and Google results. Keep under 60 characters.

Example: `"title": "Toyota Corolla Rent a Car Lahore | Iris Tours"`

#### `seo.description` (string)
The snippet shown under the title in Google. Keep under 160 characters.

Example: `"description": "Rent Toyota Corolla in Lahore DHA. Affordable sedan for city and outstation trips."`

---

### `description` (string)
A longer paragraph about the vehicle. Shown on the detail page under "Overview".

---

### `specifications` (object)
Duplicate of some fields — used by certain components. Keep in sync with top-level values.

```json
"specifications": {
  "luggage": 3,
  "seats": 5,
  "transmission": "Automatic",
  "fuelType": "Petrol"
}
```

---

### `relatedVehicles` (array of strings)
Slugs of other vehicles to show in the "You May Also Like" section on the detail page.
Use the exact `slug` values of other entries.

```json
"relatedVehicles": [
  "honda-civic",
  "toyota-prado",
  "honda-br-v"
]
```

---

## Quick Reference Table

| Task | What to change |
|------|----------------|
| Update a car's price | Find the car entry and edit the `rent` object values |
| Add a new car | Copy any entry, paste at the top, change all fields |
| Remove a car | Delete its entire `{ ... }` block (including the trailing comma) |
| Add more images | Add image paths to `images.gallery` and copy files to `public/fleet/` |
| Change SEO title | Edit `seo.title` and `seo.description` for that vehicle |
| Change policies text | Edit the `policies` object for that vehicle |

---

## Important Notes

- **JSON is strict** — every string must use double quotes `"`. Never use single quotes `'`.
- **No trailing commas** — the last item in an array or object must NOT have a comma after it.
- **No comments allowed in JSON** — use this README for documentation instead.
- After editing, the website will automatically use the new data on next build/refresh.

---

*Last updated: August 2026 | Iris Tours*
