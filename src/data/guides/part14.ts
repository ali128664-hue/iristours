/**
 * part14.ts — 15 guides published 22 November 2026.
 */

import type { Guide } from "./types";

const D = "2026-11-22";

const part14: Guide[] = [
  {
    slug: "honda-brv-on-rent-lahore",
    title: "Honda BR-V on Rent in Lahore: The Budget 7-Seater",
    metaTitle: "Honda BR-V on Rent in Lahore with Driver",
    description:
      "Honda BR-V on rent in Lahore with driver: seven seats at sedan prices. Daily, weekly and monthly rates, space and luggage, and the trips it suits best.",
    keywords: ["brv on rent lahore", "honda br-v rent", "7 seater car rent lahore", "cheap family car rental lahore", "br-v with driver"],
    category: "Cars",
    date: D,
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
    imageAlt: "Family cars lined up in a Lahore car park",
    intro: `The **Honda BR-V** is the smartest way to move a family of six around Lahore without paying SUV prices. It costs the same per day as a Honda Civic, but it has a third row of seats. Here is everything about renting a **BR-V in Lahore**.

::cars honda-br-v

::stats {{rate:honda-br-v}} = Per day with driver | 7 = Seats incl. driver | {{month:honda-br-v}} = Per month | {{city:honda-br-v}} = Intercity day`,
    sections: [
      {
        h: "BR-V rates",
        body: `| Booking | Price |
| --- | --- |
| Day in Lahore | {{rate:honda-br-v}} |
| Intercity day | {{city:honda-br-v}} |
| Week | {{week:honda-br-v}} |
| Month | {{month:honda-br-v}} |

See photos and features on the [Honda BR-V page](/fleet/honda-br-v).`,
      },
      {
        h: "Who it suits",
        body: `- **Families of five or six** going to functions, hospitals or shopping
- **Airport runs with relatives**, when a sedan is too small
- **Day trips** to [Kartarpur](/blog/lahore-to-kartarpur-by-car), [Khewra](/blog/khewra-salt-mine-katas-raj-day-trip) or [Harappa](/blog/harappa-day-trip-from-lahore)
- **Monthly use** by families who want seven seats on a budget

With all seven seats in use, boot space is limited, so heavy luggage is better in a [Fortuner](/fleet/toyota-fortuner) or [Hiace](/fleet/toyota-hiace-grand-cabin).`,
      },
      {
        h: "BR-V vs Fortuner vs Hiace",
        body: `| | [BR-V](/fleet/honda-br-v) | [Fortuner](/fleet/toyota-fortuner) | [Hiace](/fleet/toyota-hiace-grand-cabin) |
| --- | --- | --- | --- |
| Day rate | {{rate:honda-br-v}} | {{rate:toyota-fortuner}} | {{rate:toyota-hiace-grand-cabin}} |
| Seats | 7 | 7 | 15 |
| Mountains and snow | Clear roads only | Very good (4x4) | Main roads |
| Best for | City and motorway | Hills and long trips | Big families, groups |

::cars toyota-fortuner, toyota-hiace-grand-cabin

Full comparison in our [7 seater guide](/blog/seven-seater-car-on-rent-lahore).`,
      },
    ],
    faqs: [
      { q: "How much is a BR-V on rent in Lahore?", a: "{{rate:honda-br-v}} per day with driver inside Lahore." },
      { q: "Can I take the BR-V to Murree?", a: "On clear roads, yes. After snowfall, book a 4x4 such as the Fortuner." },
    ],
    related: ["seven-seater-car-on-rent-lahore", "fortuner-vs-prado-which-to-rent", "rent-a-car-lahore-price-list"],
  },

  {
    slug: "prado-on-rent-islamabad",
    title: "Prado on Rent in Islamabad with Driver",
    metaTitle: "Prado on Rent in Islamabad: Rates & Booking",
    description:
      "Toyota Prado on rent in Islamabad with driver for Murree, the north, weddings and VIP guests. Daily and intercity rates, sectors covered and booking tips.",
    keywords: ["prado on rent islamabad", "prado rental islamabad", "suv on rent islamabad", "prado for murree", "4x4 rent islamabad"],
    category: "Cars",
    date: D,
    image: "/blog/lahore-islamabad.jpg",
    imageAlt: "SUV on the motorway with green hills behind",
    intro: `Islamabad is the gateway to Murree, the Galiyat and the north, which makes the **Toyota Prado** one of the most requested cars in the capital. We provide a **Prado on rent in Islamabad** with an experienced driver, for snow trips, northern tours, weddings and official guests.

::cars toyota-land-cruiser-prado`,
    sections: [
      {
        h: "Prado rates in Islamabad",
        body: `| Booking | Price with driver |
| --- | --- |
| Day in the city | {{rate:toyota-land-cruiser-prado}} |
| Intercity day | {{city:toyota-land-cruiser-prado}} |
| Week | {{week:toyota-land-cruiser-prado}} |

Book a day ahead for the best availability; Prados are in high demand from December to February.`,
      },
      {
        h: "Where we pick up",
        body: `Any sector of Islamabad, including [Blue Area](/areas/blue-area-islamabad), [F-7](/areas/sector-f-7-islamabad), [F-10](/areas/sector-f-10-islamabad), [E-11](/areas/sector-e-11-islamabad), [G-11](/areas/sector-g-11-islamabad), [DHA](/areas/dha-phase-2-islamabad) and [Bahria Town](/areas/bahria-town-phase-7-islamabad), plus Islamabad International Airport. See [rent a car in Islamabad](/blog/rent-a-car-islamabad).`,
      },
      {
        h: "Popular Prado trips from Islamabad",
        body: `::route Islamabad > (1.5–2 h) > Murree > (1 h) > Nathia Gali

- **Murree in snow:** a 4x4 with chains is the safe choice. Read [Murree snow chains and entry rules](/blog/murree-snow-chains-entry-rules).
- **Naran, Hunza and Skardu** in season: see [Lahore to Hunza](/blog/lahore-to-hunza-by-road).
- **Weddings and VIP guests** in the capital. See [wedding car rental in Islamabad](/blog/wedding-car-rental-islamabad).`,
      },
    ],
    faqs: [
      { q: "How much is a Prado on rent in Islamabad?", a: "{{rate:toyota-land-cruiser-prado}} per day with driver in the city; {{city:toyota-land-cruiser-prado}} for intercity days." },
      { q: "Is a Prado good for Murree in winter?", a: "Yes. It is one of the safest choices for snow, with chains and an experienced driver." },
    ],
    related: ["prado-on-rent-lahore", "rent-a-car-islamabad", "murree-snow-chains-entry-rules"],
  },

  {
    slug: "v8-on-rent-islamabad",
    title: "Land Cruiser V8 on Rent in Islamabad",
    metaTitle: "V8 on Rent in Islamabad: Land Cruiser with Driver",
    description:
      "Land Cruiser V8 on rent in Islamabad for VIP movement, weddings, delegations and northern tours. Rates with driver, booking tips and alternatives.",
    keywords: ["v8 on rent islamabad", "land cruiser rent islamabad", "vip car islamabad", "v8 for wedding islamabad", "protocol car islamabad"],
    category: "Cars",
    date: D,
    image: "/categories/luxury.jpg",
    imageAlt: "Luxury SUV with chauffeur",
    intro: `In the capital, the **Toyota Land Cruiser V8** is the standard car for protocol, delegations and grand weddings. We provide a **V8 on rent in Islamabad** with a trained driver, with advance booking.

::cars toyota-land-cruiser-v8

::stats {{rate:toyota-land-cruiser-v8}} = Per day | {{city:toyota-land-cruiser-v8}} = Intercity day | 8 = Seats incl. driver | Book early = Peak season`,
    sections: [
      {
        h: "V8 rates",
        body: `| Booking | Price with driver |
| --- | --- |
| Day | {{rate:toyota-land-cruiser-v8}} |
| Intercity day | {{city:toyota-land-cruiser-v8}} |
| Week | {{week:toyota-land-cruiser-v8}} |

Our V8s are based in Lahore and sent to Islamabad with advance booking, so reserve a few days ahead.`,
      },
      {
        h: "Best uses in Islamabad",
        body: `- **Delegations and official guests** between the airport, hotels and offices in Blue Area and the Red Zone
- **Weddings** in Islamabad's marquees and farmhouses. See [wedding car rental in Islamabad](/blog/wedding-car-rental-islamabad).
- **Long northern tours** where comfort matters most
- **Murree and Nathia Gali** in snow. See [Nathia Gali and Ayubia](/blog/lahore-to-nathia-gali-ayubia).`,
      },
      {
        h: "Alternatives",
        body: `::cars toyota-land-cruiser-prado, range-rover, mercedes-benz-c-class-c180

If a V8 is booked, a [Prado](/blog/prado-on-rent-islamabad) gives similar capability, and a [Range Rover](/blog/range-rover-on-rent-lahore) similar presence. See all options in [luxury car rental in Islamabad](/blog/luxury-car-rental-islamabad).`,
      },
    ],
    faqs: [
      { q: "Is the V8 available in Islamabad?", a: "Yes, with advance booking; the cars come from our Lahore fleet." },
      { q: "How much is a V8 on rent in Islamabad?", a: "{{rate:toyota-land-cruiser-v8}} per day with driver." },
    ],
    related: ["land-cruiser-v8-on-rent-lahore", "luxury-car-rental-islamabad", "prado-on-rent-islamabad"],
  },

  {
    slug: "wedding-car-rental-islamabad",
    title: "Wedding Car Rental in Islamabad and Rawalpindi",
    metaTitle: "Wedding Car Rental Islamabad: Luxury Cars & Vans",
    description:
      "Wedding car rental in Islamabad and Rawalpindi: decorated luxury cars, V8 and Prado convoys, guest vans, prices and booking tips for the wedding season.",
    keywords: ["wedding car rental islamabad", "bridal car islamabad", "wedding car rawalpindi", "baraat cars islamabad", "decorated car islamabad"],
    category: "Rent a car",
    date: D,
    image: "/categories/wedding.jpg",
    imageAlt: "Decorated white wedding car outside a venue",
    intro: `Wedding season fills Islamabad's marquees and Rawalpindi's halls every weekend from November to February. We provide **wedding cars in Islamabad and Rawalpindi**: a decorated car for the couple, SUVs for the baraat and vans for guests.

::cars mercedes-benz-c-class-c180, toyota-land-cruiser-v8, toyota-hiace-grand-cabin`,
    sections: [
      {
        h: "Cars and prices",
        body: `| Car | Day rate |
| --- | --- |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} |
| [Audi A6](/fleet/audi-a6) | {{rate:audi-a6}} |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | {{rate:toyota-land-cruiser-v8}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | {{rate:toyota-hiace-grand-cabin}} |

Single-event bookings are quoted per event. Luxury cars come from Lahore with advance booking.`,
      },
      {
        h: "Planning tips",
        body: `1. **Book the couple's car first**; December weekends sell out.
2. **Plan the convoy:** see [baraat car convoy](/blog/baraat-car-convoy-lahore).
3. **Decide on flowers:** see [wedding car decoration](/blog/wedding-car-decoration-lahore).
4. **Guests from Lahore?** Add a one-way van on the M-2. See [intercity car rental](/blog/intercity-car-rental-from-lahore).

![White stretch limousine at a lit-up wedding venue](/blog/limousine-wedding.jpg "Ask about a limousine for the grandest entrance.")`,
      },
    ],
    faqs: [
      { q: "Do you provide wedding cars in Rawalpindi?", a: "Yes, in both Rawalpindi and Islamabad, with advance booking." },
      { q: "Can the car be decorated?", a: "Yes, fresh-flower decoration is arranged on request at extra cost." },
    ],
    related: ["wedding-car-rental-lahore-shaadi-season", "v8-on-rent-islamabad", "luxury-car-rental-islamabad"],
  },

  {
    slug: "hiace-coaster-on-rent-islamabad",
    title: "Hiace and Coaster on Rent in Islamabad",
    metaTitle: "Hiace & Coaster on Rent in Islamabad with Driver",
    description:
      "Hiace and Coaster on rent in Islamabad and Rawalpindi for groups, weddings, school trips and northern tours. Seats, daily rates and booking tips.",
    keywords: ["hiace on rent islamabad", "coaster on rent islamabad", "van rental islamabad", "coaster for murree", "group transport islamabad"],
    category: "Cars",
    date: D,
    image: "/blog/hiace-rental.jpg",
    imageAlt: "Family with a white van outside a monument",
    intro: `For groups, one van beats several cars. We provide the **Toyota Hiace Grand Cabin** and **Toyota Coaster** with drivers in **Islamabad and Rawalpindi**, for weddings, staff transport, school trips and tours to Murree and the north.

::cars toyota-hiace-grand-cabin, toyota-coaster-saloon`,
    sections: [
      {
        h: "Rates",
        body: `| Vehicle | Seats | Day | Intercity day |
| --- | --- | --- | --- |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |
| [Toyota Coaster Saloon](/fleet/toyota-coaster-saloon) | 30 | {{rate:toyota-coaster-saloon}} | {{city:toyota-coaster-saloon}} |

Seat counts include the driver.`,
      },
      {
        h: "Popular group trips",
        body: `- **Murree and the Galiyat**, in clear weather; vans are not suited to fresh snow. See [Murree rules](/blog/murree-snow-chains-entry-rules).
- **Naran and Hunza** in summer. See [Lahore to Naran Kaghan](/blog/lahore-to-naran-kaghan-by-car).
- **School and university trips** to the [Khewra Salt Mine](/blog/khewra-salt-mine-katas-raj-day-trip) or [Taxila](/blog/lahore-to-taxila-hasan-abdal).
- **Wedding guest shuttles.** See [wedding car rental in Islamabad](/blog/wedding-car-rental-islamabad).

Which one to choose? Read [Hiace vs Coaster](/blog/hiace-vs-coaster-which-to-rent).`,
      },
    ],
    faqs: [
      { q: "How many people fit in a Hiace?", a: "Up to 14 passengers plus the driver." },
      { q: "Can a Coaster go to Murree?", a: "Yes on clear roads. In snow, the authorities may restrict large vehicles; check advisories." },
    ],
    related: ["coaster-on-rent-lahore", "rent-a-car-islamabad", "rent-a-car-rawalpindi"],
  },

  {
    slug: "luxury-car-rental-islamabad",
    title: "Luxury Car Rental in Islamabad with Chauffeur",
    metaTitle: "Luxury Car Rental in Islamabad: Mercedes, Audi, V8",
    description:
      "Luxury car rental in Islamabad with chauffeur: Mercedes, Audi A6, Range Rover, G-Wagon and V8 for weddings, VIP guests and corporate events. Rates and tips.",
    keywords: ["luxury car rental islamabad", "mercedes on rent islamabad", "audi on rent islamabad", "range rover islamabad", "vip car rental islamabad"],
    category: "Rent a car",
    date: D,
    image: "/blog/luxury-rental.jpg",
    imageAlt: "Luxury car with chauffeur at a venue",
    intro: `For weddings, embassies, delegations and corporate events in the capital, we provide **luxury cars in Islamabad** with uniformed chauffeurs, sent from our Lahore fleet with advance booking.

::cars mercedes-benz-c-class-c180, audi-a6, range-rover, mercedes-benz-g-wagon`,
    sections: [
      {
        h: "Luxury fleet and rates",
        body: `| Car | Day | Intercity day |
| --- | --- | --- |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} | {{city:mercedes-benz-c-class-c180}} |
| [Audi A6](/fleet/audi-a6) | {{rate:audi-a6}} | {{city:audi-a6}} |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | {{rate:toyota-land-cruiser-v8}} | {{city:toyota-land-cruiser-v8}} |
| [Range Rover](/fleet/range-rover) | {{rate:range-rover}} | {{city:range-rover}} |
| [Mercedes G-Wagon](/fleet/mercedes-benz-g-wagon) | {{rate:mercedes-benz-g-wagon}} | {{city:mercedes-benz-g-wagon}} |`,
      },
      {
        h: "How booking works",
        body: `1. Send dates, venues and timings on WhatsApp.
2. We confirm the car and send a written quote.
3. Pay an advance to lock the date; the car travels from Lahore the day before if needed.
4. A uniformed chauffeur arrives on time.

For events and delegations, see [VIP protocol car service](/blog/vip-protocol-car-service-lahore) and [event car rental](/blog/event-car-rental-expo-centre-lahore).`,
      },
    ],
    faqs: [
      { q: "Do you have luxury cars in Islamabad?", a: "Yes, with advance booking; the cars come from our Lahore fleet." },
      { q: "Can I rent a luxury car without a chauffeur?", a: "No. Luxury cars are rented with our chauffeur only." },
    ],
    related: ["v8-on-rent-islamabad", "wedding-car-rental-islamabad", "mercedes-on-rent-lahore"],
  },

  {
    slug: "pick-and-drop-service-lahore",
    title: "Pick and Drop Service in Lahore: School, Office and University",
    metaTitle: "Pick and Drop Service Lahore: Monthly Car with Driver",
    description:
      "Monthly pick and drop service in Lahore for school, office and university: a dedicated car and driver, fixed timings, safe routes and monthly rates.",
    keywords: ["pick and drop service lahore", "school pick and drop lahore", "office pick and drop", "monthly car with driver lahore", "university transport lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/chauffeur-rental.jpg",
    imageAlt: "Chauffeur opening a car door",
    intro: `Daily school runs and office commutes across Lahore eat hours of your day. A **pick and drop service** with a dedicated car and driver takes that off your plate: same driver, same car, fixed timings, every working day.

::stats {{month:toyota-yaris}} = Yaris per month | {{month:honda-br-v}} = 7-seater per month | 1 = Regular driver | Fixed = Daily timings`,
    sections: [
      {
        h: "Who uses it",
        body: `- **Parents** for school runs, often shared between two or three families
- **Office staff** from DHA, Bahria Town or Johar Town to Gulberg and Main Boulevard
- **University students** at LUMS, UET, Punjab University or UCP
- **Elderly parents** who need regular trips to hospitals or relatives`,
      },
      {
        h: "Cars and monthly rates",
        body: `| Car | Seats | Month |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{month:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{month:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{month:honda-br-v}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{month:toyota-hiace-grand-cabin}} |

::cars toyota-yaris, honda-br-v, toyota-hiace-grand-cabin

Working hours and fuel are agreed in the contract. For offices with many staff, see [corporate car rental](/blog/corporate-car-rental-lahore-guide).`,
      },
      {
        h: "Safety for school runs",
        body: `- A **regular, background-checked driver** whom the children know
- **Driver's name and number** shared with parents
- **Agreed pickup points** and a WhatsApp group for updates
- **No other passengers** unless agreed

During smog and fog, school timings sometimes change by government order; our drivers adjust to the notified timings. See the [smog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
    ],
    faqs: [
      { q: "Can two families share one pick and drop car?", a: "Yes. Many parents share a BR-V or Hiace and split the monthly cost." },
      { q: "Is fuel included in the monthly rate?", a: "Fuel arrangements are agreed in the contract; on most monthly packages fuel is paid by the customer." },
    ],
    related: ["monthly-car-rental-lahore", "corporate-car-rental-lahore-guide", "honda-brv-on-rent-lahore"],
  },

  {
    slug: "one-way-car-rental-lahore",
    title: "One-Way Car Rental from Lahore to Any City",
    metaTitle: "One-Way Car Rental from Lahore: Rates & Routes",
    description:
      "One-way car rental from Lahore with driver to Islamabad, Faisalabad, Multan, Sialkot, Peshawar and more. How one-way pricing works, rates and booking tips.",
    keywords: ["one way car rental lahore", "one way taxi lahore to islamabad", "lahore to islamabad one way", "drop service lahore", "intercity drop lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/lahore-to-kpk-motorway-travel.jpg",
    imageAlt: "Cars on a motorway at sunset",
    intro: `Need to get from Lahore to another city, but not come back? A **one-way car with driver** takes you door to door, with your luggage, on your schedule. Here is how one-way pricing works and what it costs.`,
    sections: [
      {
        h: "How one-way pricing works",
        body: `A one-way trip is charged at the **intercity day rate**, because the driver has to bring the car back to Lahore. For long routes such as Karachi, the quote covers the driver's return days too.

| Car | Seats | One-way (intercity day) |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{city:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{city:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{city:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{city:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{city:toyota-hiace-grand-cabin}} |

Fuel and tolls are agreed in the quote; see [fuel cost of road trips](/blog/fuel-cost-road-trips-from-lahore).`,
      },
      {
        h: "Popular one-way routes",
        body: `| From Lahore to | Typical time | Guide |
| --- | --- | --- |
| Islamabad / Rawalpindi | 4.5 h | [Lahore to Islamabad](/blog/lahore-to-islamabad-car-rental) |
| Faisalabad | 2–2.5 h | [Lahore to Faisalabad](/blog/lahore-to-faisalabad-by-car) |
| Sialkot | 1.5–2 h | [Lahore to Sialkot](/blog/lahore-to-sialkot-by-car) |
| Multan | 4–4.5 h | [Lahore to Multan](/blog/lahore-to-multan-by-car) |
| Peshawar | 6.5–7 h | [Lahore to Peshawar](/blog/lahore-to-peshawar-by-car) |
| Karachi | 2 days | [Lahore to Karachi](/blog/lahore-to-karachi-by-road) |

::cars toyota-corolla-altis-1-6, honda-br-v, toyota-fortuner`,
      },
      {
        h: "Coming the other way",
        body: `We also do one-way rides **into** Lahore, for example from [Islamabad airport](/blog/islamabad-airport-to-lahore-car), Sialkot airport or any city in Punjab.`,
      },
    ],
    faqs: [
      { q: "How much is a one-way car from Lahore to Islamabad?", a: "One-way rides start at {{city:toyota-corolla-altis-1-6}} for a Corolla with driver." },
      { q: "Can I stop on the way?", a: "Yes. Tell us the stops when booking so the driver plans the route." },
    ],
    related: ["intercity-car-rental-from-lahore", "lahore-to-islamabad-car-vs-train-bus-flight", "islamabad-airport-to-lahore-car"],
  },

  {
    slug: "half-day-car-rental-lahore",
    title: "Half-Day Car Rental in Lahore: A Car for a Few Hours",
    metaTitle: "Half-Day Car Rental Lahore: Car with Driver for Hours",
    description:
      "Need a car for just a few hours in Lahore? Half-day and short bookings with driver for meetings, shopping, hospital visits and airport runs, and how pricing works.",
    keywords: ["half day car rental lahore", "car for few hours lahore", "hourly car rental lahore", "short trip car lahore", "car with driver for 4 hours"],
    category: "Rent a car",
    date: D,
    image: "/blog/intercity-safe-car-rental-lahore.jpg",
    imageAlt: "Car with a uniformed driver in Lahore",
    intro: `Not every job needs a full day. A meeting in Gulberg, a few hours of shopping, a hospital appointment or a single airport run can be booked as a **short or half-day car with driver in Lahore**. Here's how it works.`,
    sections: [
      {
        h: "How short bookings are priced",
        body: `- **Airport pickups and drops** inside Lahore are quoted per trip. See [Lahore airport pickup](/blog/rent-a-car-lahore-airport).
- **A few hours** (meetings, shopping, appointments) are quoted based on hours and distance.
- **Most of a day** is usually best value as a full day, which starts at {{rate:toyota-yaris}} for a Yaris.

Send your plan on WhatsApp and we reply with the cheapest option for it.`,
      },
      {
        h: "Good uses for a half day",
        body: `- **Shopping** at Liberty, Anarkali or Ichhra. See the [shopping guide](/blog/lahore-shopping-by-car).
- **Hospital appointments** with waiting. See [hospital visits](/blog/hospital-visit-car-with-driver-lahore).
- **An evening out:** dinner on Fort Road or MM Alam Road. See the [food tour](/blog/lahore-food-tour-by-car).
- **Wagah border ceremony** in the evening. See the [Wagah guide](/blog/wagah-border-ceremony-from-lahore).
- **Hiran Minar** as a quick outing. See [Hiran Minar](/blog/hiran-minar-sheikhupura-day-trip).

::cars toyota-yaris, toyota-corolla-altis-1-6, honda-br-v`,
      },
    ],
    faqs: [
      { q: "Can I rent a car for 4 hours in Lahore?", a: "Yes. Short bookings are quoted on hours and distance; send your plan for a price." },
      { q: "Is a full day cheaper than two half days?", a: "Usually yes. If you need the car for most of the day, book a full day." },
    ],
    related: ["rent-a-car-lahore-price-list", "car-rental-vs-ride-hailing-lahore", "toyota-yaris-on-rent-lahore"],
  },

  {
    slug: "chauffeur-service-lahore",
    title: "Chauffeur Service in Lahore: Professional Drivers by the Day",
    metaTitle: "Chauffeur Service in Lahore: Cars with Pro Drivers",
    description:
      "Chauffeur service in Lahore: trained, background-checked drivers with clean cars for business, families, guests and events. What's included, rates and booking.",
    keywords: ["chauffeur service lahore", "chauffeur driven car lahore", "car with driver lahore", "private driver lahore", "executive chauffeur lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/chauffeur-rental.jpg",
    imageAlt: "Uniformed chauffeur opening a car door",
    intro: `A good chauffeur does more than drive. They know the fastest route at 6 pm, where to drop you at a hospital or hall, how to handle a motorway closure, and when to stay quiet so you can work. That's the **chauffeur service** we run in Lahore.

::stats 24/7 = Bookings | Background-checked = Drivers | 17 = Cars | {{rate:toyota-yaris}} = From per day`,
    sections: [
      {
        h: "What's included",
        body: `- A **trained, background-checked driver**, in uniform for executive and luxury bookings
- A **clean, serviced car** with working AC
- **Waiting time** during a day booking
- **Doorstep pickup** anywhere in Lahore
- **Written confirmation** of price and driver details on WhatsApp`,
      },
      {
        h: "Choose your car",
        body: `| Use | Suggested car | Day rate |
| --- | --- | --- |
| Everyday errands | [Toyota Yaris](/fleet/toyota-yaris) | {{rate:toyota-yaris}} |
| Business | [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} |
| Senior executives | [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} |
| VIP and weddings | [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} |
| Families | [Honda BR-V](/fleet/honda-br-v) | {{rate:honda-br-v}} |

::cars honda-civic, toyota-land-cruiser-prado, mercedes-benz-c-class-c180`,
      },
      {
        h: "Chauffeur or self-drive?",
        body: `With a chauffeur there's no deposit, no parking hunt, no fines and no fog or snow stress. See [self drive vs with driver](/blog/self-drive-car-rental-lahore) and [car with driver vs ride-hailing](/blog/car-rental-vs-ride-hailing-lahore).`,
      },
    ],
    faqs: [
      { q: "Are your drivers background-checked?", a: "Yes. Every driver is verified, and the driver's name and number are shared before pickup." },
      { q: "Can I book the same chauffeur every time?", a: "On weekly and monthly bookings we assign a regular driver." },
    ],
    related: ["lahore-car-rental-with-driver", "vip-protocol-car-service-lahore", "monthly-car-rental-lahore"],
  },

  {
    slug: "lahore-to-malam-jabba-by-car",
    title: "Lahore to Malam Jabba by Car: Snow and Skiing in Swat",
    metaTitle: "Lahore to Malam Jabba by Car: Route & Snow Season",
    description:
      "Plan a Lahore to Malam Jabba trip by car for snow and skiing in Swat: route via the Swat Expressway, driving time, winter season, chairlift and the right 4x4.",
    keywords: ["lahore to malam jabba", "malam jabba snow", "malam jabba ski resort", "swat in winter", "malam jabba by car"],
    category: "Routes",
    date: D,
    image: "/tours/swat.jpg",
    imageAlt: "SUV beside a river in the Swat valley",
    intro: `**Malam Jabba**, above Mingora in Swat, is Pakistan's best-known ski resort and one of the most reliable places to find snow in winter. From Lahore, it's a long but straightforward drive on motorways most of the way.

::route Lahore > (M-2, 4.5 h) > Islamabad > (M-1 & Swat Expressway) > Chakdara > (1.5 h) > Mingora > (about 1.5 h) > Malam Jabba`,
    sections: [
      {
        h: "Route and time",
        body: `Lahore → Islamabad on the M-2, then the M-1 and the **Swat Expressway** to Chakdara, on to Mingora and up the mountain road to Malam Jabba. Plan **8 to 9 hours** of driving, so most families stop overnight in Mingora or Islamabad.

::stats 8–9 h = From Lahore | Dec–Feb = Snow season | Chairlift = At the resort | 4x4 = In fresh snow`,
      },
      {
        h: "What to do",
        body: `- **Skiing and snowboarding** on the resort slopes in the snow season
- **Chairlift** with views over the Swat valley
- **Snow play** for families
- In summer: green slopes, zip lines and cool weather

Check whether the resort and lifts are operating before you go; snow cover varies a lot from year to year.`,
      },
      {
        h: "Car for the trip",
        body: `::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin

The final climb to Malam Jabba can be icy. Book a 4x4 with an experienced mountain driver. More Swat options in our [Lahore to Swat and Kalam guide](/blog/lahore-to-swat-kalam-car-rental-road-guide) and [winter trips from Lahore](/blog/winter-trips-from-lahore).`,
      },
    ],
    faqs: [
      { q: "How long does it take from Lahore to Malam Jabba?", a: "About 8 to 9 hours by car; most travellers stop overnight on the way." },
      { q: "When is there snow at Malam Jabba?", a: "Usually from late December to February, but it varies; check conditions before travelling." },
    ],
    related: ["lahore-to-swat-kalam-car-rental-road-guide", "winter-trips-from-lahore", "northern-pakistan-travel-november-december"],
  },

  {
    slug: "lahore-to-fort-munro-by-car",
    title: "Lahore to Fort Munro by Car: Punjab's Hill Station",
    metaTitle: "Lahore to Fort Munro by Car: Route & Winter Trip",
    description:
      "Lahore to Fort Munro by car: route via Multan and Dera Ghazi Khan, driving time, the winding mountain road, winter cold and occasional snow, and the best car.",
    keywords: ["lahore to fort munro", "fort munro trip", "fort munro snowfall", "dera ghazi khan hill station", "fort munro by car"],
    category: "Routes",
    date: D,
    image: "/blog/swat-kalam-mountain-road-4x4.jpg",
    imageAlt: "4x4 on a winding mountain road",
    intro: `**Fort Munro**, in the Sulaiman Mountains above Dera Ghazi Khan, is southern Punjab's hill station: a winding mountain road, cool summers and cold winters with occasional snow. It's a great alternative to Murree for families in central and southern Punjab.

::route Lahore > (M-3 / M-4, about 4 h) > Multan > (about 2 h) > Dera Ghazi Khan > (about 2 h, mountain road) > Fort Munro`,
    sections: [
      {
        h: "Route and time",
        body: `Drive Lahore → Multan on the motorways (see [Lahore to Multan](/blog/lahore-to-multan-by-car)), then via Muzaffargarh to **Dera Ghazi Khan** and up the mountain road to Fort Munro. Plan **8 to 9 hours** in total; an overnight stop in Multan makes the trip relaxed.

The road from D.G. Khan climbs through many hairpin bends, so drive it in daylight.`,
      },
      {
        h: "Best season",
        body: `- **Summer:** cool and green compared to the plains, the busiest season
- **Winter:** cold, foggy at times, and occasionally snow on the higher points
- **Monsoon:** check for landslide warnings

::stats 8–9 h = From Lahore | ~1,970 m = Altitude | Daylight = Drive the hairpins | 2–3 days = Ideal trip`,
      },
      {
        h: "Car and rates",
        body: `::cars toyota-fortuner, toyota-land-cruiser-prado, honda-br-v

| Car | Intercity day |
| --- | --- |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{city:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{city:toyota-land-cruiser-prado}} |
| [Honda BR-V](/fleet/honda-br-v) | {{city:honda-br-v}} |

Combine with [Bahawalpur and Cholistan](/blog/lahore-to-bahawalpur-cholistan-by-car) for a southern Punjab loop.`,
      },
    ],
    faqs: [
      { q: "How far is Fort Munro from Lahore?", a: "Roughly 8 to 9 hours by car via Multan and Dera Ghazi Khan." },
      { q: "Does Fort Munro get snow?", a: "Occasionally in the coldest weeks of winter, but not reliably every year." },
    ],
    related: ["lahore-to-multan-by-car", "lahore-to-bahawalpur-cholistan-by-car", "winter-trips-from-lahore"],
  },

  {
    slug: "lahore-to-gujranwala-by-car",
    title: "Lahore to Gujranwala by Car: Route, Time and Rates",
    metaTitle: "Lahore to Gujranwala by Car: Route & Rates",
    description:
      "Lahore to Gujranwala by car with driver: GT Road route, driving time, same-day return rates, and tips for weddings, business trips and Gujranwala's famous food.",
    keywords: ["lahore to gujranwala", "lahore to gujranwala distance", "gujranwala car rental", "lahore gujranwala car", "gujranwala wedding car"],
    category: "Routes",
    date: D,
    image: "/blog/intercity-highway-fog-safe-driving.jpg",
    imageAlt: "Car on a Punjab highway with lights on",
    intro: `Gujranwala is one of the closest big cities to Lahore and a very common trip for weddings, business and family visits. It's also famous across Pakistan for its food.

::route Lahore > (GT Road, 1.5–2 h) > Gujranwala

::stats ~75 km = Distance | 1.5–2 h = Driving time | {{city:toyota-yaris}} = Yaris intercity day | Same day = Easy return`,
    sections: [
      {
        h: "Route and timing",
        body: `The usual route is the **GT Road (N-5)** through Muridke and Kamoke. Traffic through the towns can be slow at peak hours, so allow up to two hours. In winter mornings, fog is common on the GT Road; see the [fog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
      {
        h: "Rates",
        body: `| Car | Seats | Intercity day |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{city:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{city:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{city:honda-br-v}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{city:toyota-hiace-grand-cabin}} |

::cars toyota-yaris, honda-br-v, toyota-hiace-grand-cabin`,
      },
      {
        h: "Why people go",
        body: `- **Weddings:** guest vans and a car for the family. See [wedding car rental](/blog/wedding-car-rental-lahore-shaadi-season).
- **Business:** Gujranwala's industry, from fans to ceramics.
- **Food:** the city is famous for its barbecue, especially chargha and grilled birds.
- **Eminabad:** Gurdwara Rori Sahib is close by. See [Sikh heritage sites](/blog/sikh-heritage-sites-pakistan-by-car).

Going further north? [Sialkot](/blog/lahore-to-sialkot-by-car) is faster via the M-11 motorway.`,
      },
    ],
    faqs: [
      { q: "How long is the drive from Lahore to Gujranwala?", a: "About 1.5 to 2 hours on the GT Road." },
      { q: "Can I return the same day?", a: "Yes. Most Gujranwala trips are same-day returns at the intercity day rate." },
    ],
    related: ["intercity-car-rental-from-lahore", "lahore-to-sialkot-by-car", "one-way-car-rental-lahore"],
  },

  {
    slug: "rent-a-car-allama-iqbal-town-lahore",
    title: "Rent a Car in Allama Iqbal Town and Samanabad Lahore",
    metaTitle: "Rent a Car in Allama Iqbal Town & Samanabad Lahore",
    description:
      "Rent a car in Allama Iqbal Town, Samanabad and nearby areas of Lahore with doorstep pickup. Rates with driver, popular cars and travel times across the city.",
    keywords: ["rent a car allama iqbal town", "rent a car iqbal town lahore", "rent a car samanabad", "car rental moon market lahore", "rent a car near jinnah hospital"],
    category: "Rent a car",
    date: D,
    image: "/categories/about_fleet.jpg",
    imageAlt: "Iris Tours cars ready in Lahore",
    intro: `Allama Iqbal Town and Samanabad are busy, central family neighbourhoods, close to Moon Market, Jinnah Hospital and the Multan Road corridor. We **rent cars with drivers** to every block, with no extra pickup charge.`,
    sections: [
      {
        h: "Areas we cover",
        body: `- [Allama Iqbal Town](/areas/allama-iqbal-town-lahore), all blocks around Moon Market and Karim Block
- [Samanabad](/areas/samanabad-lahore)
- Nearby [Johar Town](/blog/rent-a-car-johar-town-lahore), [Garden Town and Faisal Town](/blog/rent-a-car-garden-town-faisal-town-lahore) and [Wapda Town](/blog/rent-a-car-wapda-town-valencia-lahore)`,
      },
      {
        h: "Rates",
        body: `| Car | Seats | Day with driver | Month |
| --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{rate:toyota-yaris}} | {{month:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{rate:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{rate:honda-br-v}} | {{month:honda-br-v}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{month:toyota-hiace-grand-cabin}} |

::cars toyota-yaris, honda-br-v, toyota-hiace-grand-cabin`,
      },
      {
        h: "Travel times",
        body: `| Destination | Typical time |
| --- | --- |
| Gulberg | 15–25 min |
| Walled City | 25–35 min |
| M-2 at Thokar Niaz Baig | 20–30 min |
| Lahore airport | 40–55 min |

For hospital trips to Jinnah Hospital and nearby clinics, see [car with driver for hospital visits](/blog/hospital-visit-car-with-driver-lahore).`,
      },
    ],
    faqs: [
      { q: "Is pickup in Allama Iqbal Town free?", a: "Yes, at normal Lahore city rates." },
      { q: "Do you cover Samanabad?", a: "Yes, along with Allama Iqbal Town and nearby areas." },
    ],
    related: ["rent-a-car-johar-town-lahore", "rent-a-car-garden-town-faisal-town-lahore", "hospital-visit-car-with-driver-lahore"],
  },

  {
    slug: "umrah-hajj-airport-drop-lahore",
    title: "Umrah and Hajj Airport Drop and Pickup in Lahore",
    metaTitle: "Umrah & Hajj Airport Drop and Pickup in Lahore",
    description:
      "Airport drop and pickup for Umrah and Hajj travellers in Lahore: cars for families and luggage, early timings, Zamzam bottles, and welcome-home pickups.",
    keywords: ["umrah airport drop lahore", "hajj airport pickup lahore", "airport drop for umrah", "lahore airport umrah families", "zamzam luggage car"],
    category: "Rent a car",
    date: D,
    image: "/categories/airport.jpg",
    imageAlt: "Car waiting outside Lahore airport",
    intro: `Seeing off family for **Umrah** or **Hajj**, and welcoming them home, are special moments. Families often travel to the airport together, with a lot of luggage on the way back. We provide **airport drop and pickup in Lahore** sized for the whole family and the Zamzam.`,
    sections: [
      {
        h: "Choosing the right vehicle",
        body: `| Group | Car | Day rate |
| --- | --- | --- |
| Couple with luggage | [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} |
| Family seeing off | [Honda BR-V](/fleet/honda-br-v) | {{rate:honda-br-v}} |
| Large family or group | [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | {{rate:toyota-hiace-grand-cabin}} |
| Group travel | [Toyota Coaster](/fleet/toyota-coaster-saloon) | {{rate:toyota-coaster-saloon}} |

One-way airport trips inside Lahore are quoted per trip and cost less than a full day.

::cars toyota-fortuner, honda-br-v, toyota-hiace-grand-cabin`,
      },
      {
        h: "Tips for departure day",
        body: `- **Reach early:** Umrah and Hajj flights often need passengers at the airport several hours before departure. Check your airline's instructions.
- **Ihram and documents** in hand luggage, not in the boot.
- **Fog season:** early-morning departures in December and January can face fog on the roads; leave extra time. See the [fog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
      {
        h: "Welcome-home pickup",
        body: `Returning pilgrims usually carry Zamzam bottles and gifts. Choose an SUV or van, share the flight number, and our driver tracks the arrival and waits at the arrivals hall. See [Lahore airport pickup](/blog/rent-a-car-lahore-airport). For flights landing in Islamabad, see [Islamabad airport to Lahore](/blog/islamabad-airport-to-lahore-car).`,
      },
    ],
    faqs: [
      { q: "Can the whole family come to the airport in one vehicle?", a: "Yes. A Hiace takes up to 14 passengers; a Coaster takes larger groups." },
      { q: "Will the driver wait if the return flight is late?", a: "Yes. The driver tracks the flight; the first 60 minutes after landing are free." },
    ],
    related: ["rent-a-car-lahore-airport", "coaster-on-rent-lahore", "islamabad-airport-to-lahore-car"],
  },
];

export default part14;
