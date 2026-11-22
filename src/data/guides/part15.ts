/**
 * part15.ts — 15 guides scheduled for 23 November 2026.
 * They go live automatically on that date (see registry.ts).
 */

import type { Guide } from "./types";

const D = "2026-11-23";

const part15: Guide[] = [
  {
    slug: "rent-a-car-township-lahore",
    title: "Rent a Car in Township and Green Town Lahore",
    metaTitle: "Rent a Car in Township & Green Town Lahore",
    description:
      "Rent a car in Township, Green Town and nearby areas of Lahore with doorstep pickup. Rates with driver, popular family cars, travel times and booking tips.",
    keywords: ["rent a car township lahore", "rent a car green town", "car rental township lahore", "rent a car near akbar chowk", "township lahore car with driver"],
    category: "Rent a car",
    date: D,
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
    imageAlt: "Rental cars lined up in Lahore",
    intro: `Township and Green Town are large, busy residential areas in south Lahore, between Johar Town, Model Town and Kot Lakhpat. We **rent cars with drivers** to every sector, with doorstep pickup and no extra charge.`,
    sections: [
      {
        h: "Areas we cover",
        body: `- [Township](/areas/township-lahore), all sectors
- Green Town, Kot Lakhpat and the Peco Road side
- Nearby [Johar Town](/blog/rent-a-car-johar-town-lahore), [Model Town](/blog/rent-a-car-model-town-lahore) and [Garden Town and Faisal Town](/blog/rent-a-car-garden-town-faisal-town-lahore)`,
      },
      {
        h: "Rates",
        body: `| Car | Seats | Day with driver | Week |
| --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{rate:toyota-yaris}} | {{week:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{rate:toyota-corolla-altis-1-6}} | {{week:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{rate:honda-br-v}} | {{week:honda-br-v}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{week:toyota-hiace-grand-cabin}} |

::cars toyota-yaris, honda-br-v, toyota-hiace-grand-cabin`,
      },
      {
        h: "Travel times and tips",
        body: `| Destination | Typical time |
| --- | --- |
| Johar Town and Expo Centre | 10–20 min |
| Gulberg | 25–35 min |
| M-2 at Thokar Niaz Baig | 20–30 min |
| Lahore airport | 35–50 min |

- Ferozepur Road and Akbar Chowk are slow at rush hour; leave 15 minutes extra.
- For family functions, one [Hiace](/fleet/toyota-hiace-grand-cabin) is cheaper than several cars.
- For long stays, see [monthly car rental](/blog/monthly-car-rental-lahore).`,
      },
    ],
    faqs: [
      { q: "Do you cover Green Town?", a: "Yes, along with Township, Kot Lakhpat and nearby areas." },
      { q: "Is pickup in Township free?", a: "Yes, at normal Lahore city rates." },
    ],
    related: ["rent-a-car-johar-town-lahore", "rent-a-car-model-town-lahore", "rent-a-car-garden-town-faisal-town-lahore"],
  },

  {
    slug: "rent-a-car-dha-phase-6-lahore",
    title: "Rent a Car in DHA Phase 6 Lahore",
    metaTitle: "Rent a Car in DHA Phase 6 Lahore with Driver",
    description:
      "Rent a car in DHA Phase 6 Lahore, including Raya and the main boulevard blocks. Doorstep pickup, rates with driver, airport times and wedding car tips.",
    keywords: ["rent a car dha phase 6", "dha phase 6 lahore car rental", "rent a car raya lahore", "dha lahore car with driver", "rent a car near dha phase 6"],
    category: "Rent a car",
    date: D,
    image: "/blog/fortuner-rental.jpg",
    imageAlt: "White Fortuner outside a modern house in DHA",
    intro: `DHA Phase 6 is one of Lahore's busiest and most popular phases, with Raya, wide boulevards, schools and many wedding venues nearby. To **rent a car in DHA Phase 6**, send your block and date on WhatsApp and a car with driver comes to your gate.

::stats 20–30 min = To Lahore airport | {{rate:toyota-corolla-altis-1-6}} = Corolla per day | {{rate:toyota-land-cruiser-prado}} = Prado per day | 24/7 = Booking`,
    sections: [
      {
        h: "Rates for DHA Phase 6",
        body: `| Car | Day with driver | Month |
| --- | --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} | {{month:honda-civic}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} | {{month:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} | {{month:toyota-land-cruiser-prado}} |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} | {{month:mercedes-benz-c-class-c180}} |

::cars honda-civic, toyota-land-cruiser-prado, mercedes-benz-c-class-c180`,
      },
      {
        h: "What Phase 6 residents book",
        body: `- **Airport runs:** see [Lahore airport pickup](/blog/rent-a-car-lahore-airport)
- **Weddings** in DHA marquees: see [wedding car rental](/blog/wedding-car-rental-lahore-shaadi-season)
- **Monthly cars** for visiting family: see [overseas Pakistanis](/blog/car-rental-overseas-pakistanis-lahore)
- **Weekend trips** to Murree or Islamabad: see [winter trips](/blog/winter-trips-from-lahore)

More on all phases in [rent a car in DHA Lahore](/blog/rent-a-car-dha-lahore). Area page: [DHA Phase 6](/areas/dha-phase-6-lahore).`,
      },
    ],
    faqs: [
      { q: "How far is DHA Phase 6 from Lahore airport?", a: "Usually 20 to 30 minutes outside rush hour." },
      { q: "Do you cover Raya?", a: "Yes, Raya and every block of DHA Phase 6." },
    ],
    related: ["rent-a-car-dha-lahore", "rent-a-car-lahore-airport", "wedding-car-rental-lahore-shaadi-season"],
  },

  {
    slug: "photoshoot-car-rental-lahore",
    title: "Car Rental for Photoshoots and Videos in Lahore",
    metaTitle: "Photoshoot Car Rental Lahore: Luxury & Classic Looks",
    description:
      "Rent luxury cars in Lahore for photoshoots, music videos, pre-wedding shoots and brand content: Range Rover, G-Wagon, Mercedes and V8 with chauffeur.",
    keywords: ["car for photoshoot lahore", "pre wedding shoot car lahore", "luxury car for video shoot", "g wagon for shoot", "car rental for music video"],
    category: "Cars",
    date: D,
    image: "/blog/luxury-rental.jpg",
    imageAlt: "Luxury car at a Lahore venue",
    intro: `A striking car can make a **pre-wedding shoot**, music video or brand campaign. We rent luxury cars in Lahore for shoots, with a chauffeur who positions the car, waits between set-ups and keeps it spotless on camera.

::cars mercedes-benz-g-wagon, range-rover, mercedes-benz-c-class-c180`,
    sections: [
      {
        h: "Popular shoot cars",
        body: `| Car | Look | Day rate |
| --- | --- | --- |
| [Mercedes G-Wagon](/fleet/mercedes-benz-g-wagon) | Bold, iconic | {{rate:mercedes-benz-g-wagon}} |
| [Range Rover](/fleet/range-rover) | Luxury, refined | {{rate:range-rover}} |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | Elegant, romantic | {{rate:mercedes-benz-c-class-c180}} |
| [Audi A6](/fleet/audi-a6) | Sleek, modern | {{rate:audi-a6}} |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | Power, presence | {{rate:toyota-land-cruiser-v8}} |`,
      },
      {
        h: "Good shoot locations in and around Lahore",
        body: `- Wide DHA and Bahria Town boulevards at golden hour
- The Eiffel Tower replica area in [Bahria Town](/blog/rent-a-car-bahria-town-lahore)
- Farmhouses along Bedian Road and Barki Road
- Heritage backdrops near the [Walled City](/blog/lahore-city-tour-by-car) (check permissions)

![Black Mercedes and Prado on a boulevard at sunset](/blog/rent-a-car-in-lahore-featured.jpg "Golden hour on a wide boulevard is the classic car-shoot look.")

Some locations require permission to film; check with the venue or authority beforehand.`,
      },
      {
        h: "Booking tips",
        body: `1. Share the date, locations and number of hours.
2. Tell us the look and colour you want.
3. The chauffeur stays with the car; the car is not driven by talent unless agreed in advance.

Pre-wedding shoot? Pair it with the [wedding car](/blog/wedding-car-decoration-lahore) for the big day.`,
      },
    ],
    faqs: [
      { q: "Can I rent a G-Wagon for a photoshoot?", a: "Yes, with our chauffeur, at {{rate:mercedes-benz-g-wagon}} per day." },
      { q: "Can the model drive the car on camera?", a: "Only if agreed in advance; normally the chauffeur stays in control of the car." },
    ],
    related: ["g-wagon-on-rent-lahore", "range-rover-on-rent-lahore", "mercedes-on-rent-lahore"],
  },

  {
    slug: "vip-protocol-car-service-lahore",
    title: "VIP Protocol Car Service in Lahore",
    metaTitle: "VIP Protocol Car Service Lahore: V8 & Luxury Fleet",
    description:
      "VIP protocol car service in Lahore for delegations, dignitaries and executives: V8 and luxury cars, trained chauffeurs, convoys, airport receptions and coordination.",
    keywords: ["vip protocol car lahore", "protocol car service", "delegation transport lahore", "vip car with driver lahore", "convoy cars lahore"],
    category: "Rent a car",
    date: D,
    image: "/categories/corporate.jpg",
    imageAlt: "Executive cars outside an office tower",
    intro: `When a delegation, a senior executive or a dignitary visits Lahore, every movement needs to run on time. Our **VIP protocol car service** provides matching luxury cars, trained chauffeurs and one coordinator for the whole visit.

::cars toyota-land-cruiser-v8, toyota-land-cruiser-prado, mercedes-benz-c-class-c180`,
    sections: [
      {
        h: "What we provide",
        body: `- **Lead cars:** [Land Cruiser V8](/blog/land-cruiser-v8-on-rent-lahore), [Range Rover](/blog/range-rover-on-rent-lahore) or [Mercedes](/blog/mercedes-on-rent-lahore)
- **Support cars:** [Prado](/blog/prado-on-rent-lahore) or [Fortuner](/fleet/toyota-fortuner) for staff
- **Vans** for luggage and teams
- **Airport receptions** with name boards; see [Lahore airport pickup](/blog/rent-a-car-lahore-airport)
- **One coordinator** in a WhatsApp group with all drivers`,
      },
      {
        h: "Rates",
        body: `| Car | Day rate |
| --- | --- |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | {{rate:toyota-land-cruiser-v8}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} |
| [Range Rover](/fleet/range-rover) | {{rate:range-rover}} |

Multi-day protocol packages are quoted with one invoice. See [corporate car rental](/blog/corporate-car-rental-lahore-guide) and [event car rental](/blog/event-car-rental-expo-centre-lahore).`,
      },
      {
        h: "How we plan a visit",
        body: `1. Receive the schedule: flights, hotels, venues and timings.
2. Assign cars and drivers; share names and numbers.
3. Drivers rehearse routes and parking points at venues.
4. Live coordination during the visit, including fog-season contingency for flights and motorway travel. See the [fog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
    ],
    faqs: [
      { q: "Can you provide matching cars for a convoy?", a: "Yes, subject to availability. Book early for matching models and colours." },
      { q: "Do you handle Islamabad visits too?", a: "Yes. See [luxury car rental in Islamabad](/blog/luxury-car-rental-islamabad)." },
    ],
    related: ["corporate-car-rental-lahore-guide", "land-cruiser-v8-on-rent-lahore", "luxury-car-rental-islamabad"],
  },

  {
    slug: "school-trip-transport-lahore",
    title: "School Trip Transport in Lahore: Coaster and Hiace Hire",
    metaTitle: "School Trip Transport Lahore: Coaster & Hiace Hire",
    description:
      "School and college trip transport from Lahore: Coaster and Hiace with experienced drivers, popular educational destinations, safety checklist and rates.",
    keywords: ["school trip transport lahore", "coaster for school trip", "college trip bus lahore", "study tour transport lahore", "educational trip from lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/hiace-rental.jpg",
    imageAlt: "Van parked outside a historic monument in Lahore",
    intro: `Study tours are a highlight of the school year. We provide **school trip transport in Lahore**: air-conditioned Coasters and Hiaces with experienced drivers, for day trips and overnight tours.

::cars toyota-coaster-saloon, toyota-hiace-grand-cabin`,
    sections: [
      {
        h: "Vehicles and rates",
        body: `| Vehicle | Seats | Day in Lahore | Intercity day |
| --- | --- | --- | --- |
| [Toyota Coaster Saloon](/fleet/toyota-coaster-saloon) | 30 | {{rate:toyota-coaster-saloon}} | {{city:toyota-coaster-saloon}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |

Seat counts include the driver. See [Hiace vs Coaster](/blog/hiace-vs-coaster-which-to-rent).`,
      },
      {
        h: "Popular study-tour destinations",
        body: `| Destination | Time from Lahore | Guide |
| --- | --- | --- |
| Lahore Fort and Badshahi Mosque | In the city | [Visit guide](/blog/lahore-fort-badshahi-mosque-guide) |
| Lahore Museum | In the city | [Museum guide](/blog/lahore-museum-visit-guide) |
| Wagah border ceremony | 40–60 min | [Wagah guide](/blog/wagah-border-ceremony-from-lahore) |
| Changa Manga forest | about 1.5 h | [Changa Manga](/blog/lahore-to-changa-manga) |
| Harappa | 3–3.5 h | [Harappa](/blog/harappa-day-trip-from-lahore) |
| Khewra Salt Mine | about 3 h | [Khewra](/blog/khewra-salt-mine-katas-raj-day-trip) |
| Rohtas Fort | 3–3.5 h | [Rohtas Fort](/blog/rohtas-fort-day-trip-from-lahore) |`,
      },
      {
        h: "Safety checklist for schools",
        body: `- Experienced drivers, with names and numbers shared in advance
- Vehicle checked before departure: tyres, lights, AC, first-aid box
- Head count at every stop
- Daylight travel, especially in fog season; see the [fog guide](/blog/lahore-smog-fog-travel-guide)
- Teachers have the coordinator's number at all times`,
      },
    ],
    faqs: [
      { q: "How many students fit in a Coaster?", a: "Up to 29 passengers plus the driver." },
      { q: "Can you provide several Coasters for one trip?", a: "Yes, subject to availability. Book early for school-season dates." },
    ],
    related: ["coaster-on-rent-lahore", "hiace-vs-coaster-which-to-rent", "khewra-salt-mine-katas-raj-day-trip"],
  },

  {
    slug: "rent-a-car-near-me-lahore",
    title: "Rent a Car Near Me in Lahore: How Doorstep Pickup Works",
    metaTitle: "Rent a Car Near Me in Lahore: Doorstep Pickup",
    description:
      "Searching 'rent a car near me' in Lahore? We bring the car and driver to your door in 200+ areas. How doorstep pickup works, timings and rates.",
    keywords: ["rent a car near me", "rent a car near me lahore", "car rental near me", "car with driver near me", "doorstep car rental lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/rent-a-car-in-lahore-featured.jpg",
    imageAlt: "Rental cars on a Lahore boulevard",
    intro: `When you search **"rent a car near me"** in Lahore, distance to an office doesn't matter with us: we bring the car **to your door**. Our drivers cover more than 200 areas across Lahore, Islamabad, Rawalpindi and other cities.

::stats 200+ = Areas covered | 24/7 = WhatsApp booking | {{rate:toyota-yaris}} = From per day | Same day = Usually possible`,
    sections: [
      {
        h: "How doorstep pickup works",
        body: `1. Send your area, address and time on WhatsApp.
2. We confirm the car, price and driver's details in writing.
3. The driver reaches your door on time and calls on arrival.
4. At the end, the driver drops you back home.

No need to visit an office or pick up a car yourself.`,
      },
      {
        h: "Popular areas near you",
        body: `- [DHA](/blog/rent-a-car-dha-lahore) and [DHA Phase 6](/blog/rent-a-car-dha-phase-6-lahore)
- [Gulberg](/blog/rent-a-car-gulberg-lahore) and [Johar Town](/blog/rent-a-car-johar-town-lahore)
- [Bahria Town](/blog/rent-a-car-bahria-town-lahore) and [Model Town](/blog/rent-a-car-model-town-lahore)
- [Cantt and Askari](/blog/rent-a-car-cantt-askari-lahore) and [Wapda Town](/blog/rent-a-car-wapda-town-valencia-lahore)
- [Islamabad](/blog/rent-a-car-islamabad) and [Rawalpindi](/blog/rent-a-car-rawalpindi)

See every area on our [areas page](/areas).`,
      },
      {
        h: "Cars and rates",
        body: `::cars toyota-yaris, toyota-corolla-altis-1-6, honda-br-v

Full rates on the [price list](/blog/rent-a-car-lahore-price-list).`,
      },
    ],
    faqs: [
      { q: "Can I get a car within an hour?", a: "Often yes, depending on availability and your area. For weekends and weddings, book ahead." },
      { q: "Is doorstep pickup extra?", a: "No. Pickup inside Lahore is included in the city rate." },
    ],
    related: ["rent-a-car-lahore-price-list", "rent-a-car-in-lahore", "chauffeur-service-lahore"],
  },

  {
    slug: "lahore-to-abbottabad-by-car",
    title: "Lahore to Abbottabad by Car: Route and Places to Visit",
    metaTitle: "Lahore to Abbottabad by Car: Route, Time & Sights",
    description:
      "Lahore to Abbottabad by car via the M-2 and Hazara Motorway: driving time, Thandiani, Shimla Hill and Harnoi, winter weather and car rental with driver.",
    keywords: ["lahore to abbottabad", "lahore to abbottabad distance", "abbottabad trip", "thandiani", "hazara motorway"],
    category: "Routes",
    date: D,
    image: "/blog/northern-areas-fortuner.jpg",
    imageAlt: "SUV on a green mountain road",
    intro: `Abbottabad, the green hill city of Hazara, is a comfortable weekend trip from Lahore and a natural stop on the way to Naran or the Galiyat. The **Hazara Motorway** has made it much quicker to reach.

::route Lahore > (M-2, 4.5 h) > Islamabad > (Hazara Motorway, about 1 h) > Abbottabad

::stats ~5.5–6 h = From Lahore | Thandiani = Hill viewpoint | 1 h = To Nathia Gali | {{city:toyota-corolla-altis-1-6}} = Corolla intercity day`,
    sections: [
      {
        h: "Places to see",
        body: `- **Shimla Hill:** a park with views over the city
- **Thandiani:** a hill station above Abbottabad, cool in summer and snowy in winter
- **Harnoi:** a riverside picnic spot on the way to Thandiani
- **Ilyasi Mosque** in Nawan Shehr, with its spring
- **Nathia Gali** about an hour away: see [Nathia Gali and Ayubia](/blog/lahore-to-nathia-gali-ayubia)`,
      },
      {
        h: "Winter note",
        body: `In heavy snow, the roads between Abbottabad, Nathia Gali and Murree can close while snow is cleared, as happened in January 2026. Check advisories and travel in daylight. See [Murree snow chains and entry rules](/blog/murree-snow-chains-entry-rules).`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-fortuner

In summer a sedan is fine; for Thandiani in winter, choose a 4x4. Continue north to [Naran](/blog/lahore-to-naran-kaghan-by-car) or [Shogran](/blog/lahore-to-shogran-siri-paye) in season.`,
      },
    ],
    faqs: [
      { q: "How long is the drive from Lahore to Abbottabad?", a: "About 5.5 to 6 hours via the M-2 and the Hazara Motorway." },
      { q: "Does Thandiani get snow?", a: "Yes, in the coldest weeks of winter; book a 4x4 and check road conditions." },
    ],
    related: ["lahore-to-nathia-gali-ayubia", "lahore-to-naran-kaghan-by-car", "lahore-to-shogran-siri-paye"],
  },

  {
    slug: "lahore-to-shogran-siri-paye",
    title: "Lahore to Shogran and Siri Paye by Car",
    metaTitle: "Lahore to Shogran & Siri Paye: Route, Jeep & Season",
    description:
      "Plan a trip from Lahore to Shogran and Siri Paye meadows in the Kaghan Valley: route via Kiwai, the jeep track, best season, winter snow and car hire.",
    keywords: ["lahore to shogran", "shogran trip", "siri paye", "kiwai shogran jeep", "kaghan valley trip"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-northern-areas-kpk-4x4-rental.jpg",
    imageAlt: "4x4 on a mountain road above a river",
    intro: `**Shogran**, a pine-forest plateau above the Kaghan Valley, and the meadows of **Siri Paye** above it, are among the most beautiful spots in Pakistan. Shogran is also more accessible in winter than Naran, which makes it a popular snow destination.

::route Lahore > (M-2 & Hazara Motorway) > Mansehra > (valley road) > Balakot > (about 1 h) > Kiwai > (steep road / jeep) > Shogran > (jeep) > Siri Paye`,
    sections: [
      {
        h: "Route and the final climb",
        body: `From Lahore, drive to Islamabad, take the Hazara Motorway to Mansehra, then the valley road through **Balakot** to **Kiwai**. From Kiwai, a steep road climbs to Shogran. Local jeeps run it, and in bad weather a jeep is the only safe option. **Siri Paye** is a further jeep ride above Shogran.

Plan **two days** from Lahore, with a night in Balakot or Shogran.`,
      },
      {
        h: "Best season",
        body: `| Months | Shogran and Siri Paye |
| --- | --- |
| May–September | Green meadows; Siri Paye accessible by jeep |
| October–November | Quiet, cold nights, autumn colour |
| December–March | Snow; Shogran sometimes reachable, Siri Paye usually not |

Check the [Met Office](https://www.pmd.gov.pk/en/) forecast before winter trips.`,
      },
      {
        h: "Car options",
        body: `::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin

Book a 4x4 to Kiwai; use local jeeps for Shogran and Siri Paye when the driver advises. Combine with [Naran](/blog/lahore-to-naran-kaghan-by-car) in summer.`,
      },
    ],
    faqs: [
      { q: "Can I drive my car up to Shogran?", a: "In good weather a 4x4 can manage; in rain or snow, local jeeps from Kiwai are safer." },
      { q: "Is Shogran open in winter?", a: "Often yes, with snow; Siri Paye above it is usually closed in winter." },
    ],
    related: ["lahore-to-naran-kaghan-by-car", "lahore-to-abbottabad-by-car", "northern-pakistan-travel-november-december"],
  },

  {
    slug: "lahore-to-gilgit-by-road",
    title: "Lahore to Gilgit by Road: Karakoram Highway Guide",
    metaTitle: "Lahore to Gilgit by Road: Route, Days & Car Hire",
    description:
      "Lahore to Gilgit by road on the Karakoram Highway: route, overnight stops, travel days, season and safety, and the best 4x4 with an experienced driver.",
    keywords: ["lahore to gilgit by road", "lahore to gilgit distance", "gilgit by car", "karakoram highway gilgit", "gilgit trip from lahore"],
    category: "Routes",
    date: D,
    image: "/blog/babusar-pass-kkh-highway-expedition.jpg",
    imageAlt: "SUVs on the Karakoram Highway below snowy peaks",
    intro: `**Gilgit** is the hub of Gilgit-Baltistan and the gateway to Hunza, Skardu and the high valleys. Driving there from Lahore on the **Karakoram Highway** takes two days and passes some of the most dramatic scenery in the world.

::route Lahore > (day 1, M-2 & Hazara Motorway & KKH) > Besham or Chilas > (day 2) > Gilgit`,
    sections: [
      {
        h: "Route options",
        body: `- **All year (KKH):** Islamabad → Hazara Motorway → Thakot → Besham → Dasu → Chilas → Gilgit
- **Summer only (Babusar):** Islamabad → Naran → Babusar Top → Chilas → Gilgit, usually June to October

::stats 2 days = From Lahore | ~950 km = Approx. distance | KKH = Main route | 4x4 = Recommended`,
      },
      {
        h: "From Gilgit",
        body: `- **Hunza** about 2 hours north: see [Lahore to Hunza](/blog/lahore-to-hunza-by-road)
- **Skardu** via the Skardu road: see [Lahore to Skardu](/blog/lahore-to-skardu-by-road)
- **Fairy Meadows** via Raikot Bridge: see [Fairy Meadows](/blog/lahore-to-fairy-meadows)
- **Naltar** valley for forests and lakes`,
      },
      {
        h: "Car and safety",
        body: `::cars toyota-land-cruiser-prado, toyota-fortuner, toyota-land-cruiser-v8

- Drive only in daylight
- Expect landslide delays in monsoon and snow closures in winter
- Carry cash and warm clothes
- Check the [Met Office](https://www.pmd.gov.pk/en/) forecast

Winter details in [Skardu and Hunza in winter](/blog/skardu-hunza-in-winter).`,
      },
    ],
    faqs: [
      { q: "How many days from Lahore to Gilgit by road?", a: "Two days, with a night in Besham or Chilas." },
      { q: "Is the road to Gilgit open in winter?", a: "The KKH usually stays open, but snow and landslides can close sections; Babusar is closed in winter." },
    ],
    related: ["lahore-to-hunza-by-road", "lahore-to-skardu-by-road", "pakistan-road-trip-itinerary-from-lahore"],
  },

  {
    slug: "lahore-to-soon-valley-sakesar",
    title: "Lahore to Soon Valley and Sakesar by Car",
    metaTitle: "Lahore to Soon Valley & Sakesar: Lakes of Salt Range",
    description:
      "A weekend trip from Lahore to Soon Valley in the Salt Range: Uchhali and Khabeki lakes, Sakesar, route via the M-2, driving time and car hire with driver.",
    keywords: ["soon valley trip", "lahore to soon valley", "uchhali lake", "sakesar", "salt range weekend trip"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "Motorway through the Salt Range hills",
    intro: `**Soon Valley**, in the Salt Range of Khushab district, is a quiet green valley with lakes, hills and old villages, and one of the most underrated weekend trips from Lahore. Its highest point, **Sakesar**, is the top of the Salt Range.

::route Lahore > (M-2, about 2.5–3 h) > Kallar Kahar > (about 1.5 h) > Soon Valley`,
    sections: [
      {
        h: "What to see",
        body: `- **Uchhali Lake** and **Khabeki Lake**, wetlands known for migratory birds in winter
- **Sakesar**, the highest point of the Salt Range, with wide views
- **Kanhatti Garden** and the valley's villages and terraced fields
- **Kallar Kahar** lake on the way back

Winter brings migratory birds to the lakes, which makes November to February a lovely time for nature lovers.`,
      },
      {
        h: "Plan your trip",
        body: `::stats 4–4.5 h = From Lahore | Nov–Feb = Bird season | 2 days = Ideal | Daylight = Hill roads

Stay a night in the valley or at Kallar Kahar. Combine with the [Khewra Salt Mine and Katas Raj](/blog/khewra-salt-mine-katas-raj-day-trip), which are on the same side of the Salt Range.`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-fortuner

The roads are paved but hilly; any of our cars works in good weather. Intercity days start at {{city:toyota-corolla-altis-1-6}} for a Corolla.`,
      },
    ],
    faqs: [
      { q: "How far is Soon Valley from Lahore?", a: "About 4 to 4.5 hours by car via the M-2 and Kallar Kahar." },
      { q: "When is the best time to visit?", a: "October to March is pleasant; winter brings migratory birds to the lakes." },
    ],
    related: ["khewra-salt-mine-katas-raj-day-trip", "motorway-m2-rest-areas-guide", "winter-trips-from-lahore"],
  },

  {
    slug: "lahore-fort-badshahi-mosque-guide",
    title: "Lahore Fort and Badshahi Mosque: Visitor Guide",
    metaTitle: "Lahore Fort & Badshahi Mosque Visit Guide",
    description:
      "Visiting Lahore Fort and the Badshahi Mosque: what to see, Sheesh Mahal, dress code, best time of day, parking and getting there with a car and driver.",
    keywords: ["lahore fort", "badshahi mosque", "sheesh mahal lahore", "lahore fort timings", "how to visit lahore fort"],
    category: "Lahore",
    date: D,
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Badshahi Mosque at sunset with visitors",
    intro: `The **Lahore Fort** and the **Badshahi Mosque** face each other across the Hazuri Bagh, and together they're the heart of Mughal Lahore. The fort is a UNESCO World Heritage Site, and the mosque is one of the largest in the world.`,
    sections: [
      {
        h: "What to see in Lahore Fort",
        body: `- **Alamgiri Gate**, the grand entrance facing the mosque
- **Sheesh Mahal**, the Palace of Mirrors
- **Diwan-e-Aam** and **Diwan-e-Khas**, the halls of audience
- **Picture Wall**, with its tile and fresco work
- The **Shahi Kitchens** and museums inside the fort

Background: [Lahore Fort](https://en.wikipedia.org/wiki/Lahore_Fort).`,
      },
      {
        h: "Visiting the Badshahi Mosque",
        body: `- Built by Emperor Aurangzeb in the 1670s; its courtyard holds tens of thousands of worshippers
- **Dress modestly**; women should cover their heads, and shoes are left at the entrance
- Avoid visiting during Friday prayers if you are sightseeing
- Sunset light on the red sandstone is spectacular

Background: [Badshahi Mosque](https://en.wikipedia.org/wiki/Badshahi_Mosque).`,
      },
      {
        h: "Getting there",
        body: `::route Gulberg > (25–35 min) > Lahore Fort > (walk) > Badshahi Mosque > (walk) > Fort Road Food Street

Parking near the fort is limited. A driver drops you at the gate and waits nearby. End with dinner at [Fort Road Food Street](/blog/lahore-food-tour-by-car). Full-day plan: [Lahore city tour by car](/blog/lahore-city-tour-by-car).

::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin`,
      },
    ],
    faqs: [
      { q: "How long does it take to see the Lahore Fort?", a: "Two to three hours for the main sights; add an hour for the Badshahi Mosque." },
      { q: "Is there a dress code for the Badshahi Mosque?", a: "Yes. Dress modestly; women should cover their heads, and everyone removes their shoes." },
    ],
    related: ["lahore-city-tour-by-car", "shalimar-gardens-jahangir-tomb-guide", "lahore-food-tour-by-car"],
  },

  {
    slug: "shalimar-gardens-jahangir-tomb-guide",
    title: "Shalimar Gardens and Jahangir's Tomb: Visitor Guide",
    metaTitle: "Shalimar Gardens & Jahangir's Tomb Lahore Guide",
    description:
      "Visit the Shalimar Gardens and Jahangir's Tomb in Lahore: history, what to see, best time to go, how to combine them in half a day by car with driver.",
    keywords: ["shalimar gardens lahore", "jahangir tomb", "shahdara lahore", "mughal gardens lahore", "places to visit in lahore"],
    category: "Lahore",
    date: D,
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Mughal monument in Lahore at sunset",
    intro: `Two of Lahore's finest Mughal sites sit on opposite edges of the city: the terraced **Shalimar Gardens** in the east and the **Tomb of Emperor Jahangir** across the Ravi in Shahdara. With a car and driver, you can see both in half a day.

::route Shalimar Gardens > (about 30–45 min) > Jahangir's Tomb, Shahdara`,
    sections: [
      {
        h: "Shalimar Gardens",
        body: `Built by Shah Jahan in the 1640s, the gardens step down in three terraces with marble pavilions, water channels and hundreds of fountains. They are a UNESCO World Heritage Site, together with the Lahore Fort.

Go early in the morning or late afternoon for the best light. Background: [Shalimar Gardens](https://en.wikipedia.org/wiki/Shalimar_Gardens,_Lahore).`,
      },
      {
        h: "Jahangir's Tomb",
        body: `The tomb of Emperor Jahangir, in a large walled garden in Shahdara, is famous for its marble inlay, frescoes and four tall minarets. Nearby are the tomb of Asif Khan and the Akbari Sarai.

![Badshahi Mosque at sunset with visitors](/blog/lahore-cultural-tour.jpg "Combine Mughal sites in one day for the full picture of Lahore's history.")`,
      },
      {
        h: "Plan your half day",
        body: `- Start at Shalimar Gardens (east, on GT Road)
- Drive across the city to Shahdara (about 30–45 minutes)
- Optional: Lahore Fort and Badshahi Mosque on the way; see [Lahore Fort and Badshahi Mosque](/blog/lahore-fort-badshahi-mosque-guide)

::cars toyota-corolla-altis-1-6, honda-civic, honda-br-v

A day with driver starts at {{rate:toyota-yaris}}.`,
      },
    ],
    faqs: [
      { q: "Can I see Shalimar Gardens and Jahangir's Tomb in one day?", a: "Yes, easily in half a day with a car, as they're about 30–45 minutes apart." },
      { q: "Are the Shalimar Gardens a UNESCO site?", a: "Yes, inscribed together with the Lahore Fort." },
    ],
    related: ["lahore-fort-badshahi-mosque-guide", "lahore-city-tour-by-car", "car-rental-lahore-for-foreigners"],
  },

  {
    slug: "motorway-m2-rest-areas-guide",
    title: "M-2 Motorway Rest Areas: Where to Stop Between Lahore and Islamabad",
    metaTitle: "M-2 Motorway Rest Areas: Bhera, Kallar Kahar & More",
    description:
      "Where to stop on the M-2 between Lahore and Islamabad: Sukheki, Bhera, Kallar Kahar and Chakri service areas, food, fuel, prayer and the Salt Range views.",
    keywords: ["m2 motorway rest areas", "bhera service area", "kallar kahar rest area", "lahore islamabad motorway stops", "sukheki service area"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "M-2 motorway through the Salt Range hills",
    intro: `The **M-2 motorway** between Lahore and Islamabad takes about four and a half hours, and a good stop halfway makes all the difference, especially with children or elders. Here are the main **service areas** and what each is good for.

::route Lahore > (about 1.5 h) > Sukheki > (about 45 min) > Bhera > (about 45 min) > Kallar Kahar > (about 1 h) > Chakri > (about 30 min) > Islamabad`,
    sections: [
      {
        h: "The main stops",
        body: `| Service area | Roughly | Good for |
| --- | --- | --- |
| Sukheki | 1.5 h from Lahore | Quick fuel and tea |
| Bhera | About halfway | The classic stop: food courts, prayer, fuel |
| Kallar Kahar | Salt Range | Views over the hills, a lake nearby |
| Chakri | Near Rawalpindi | Last stop before the capital |

Times are approximate and depend on traffic and weather.`,
      },
      {
        h: "Through the Salt Range",
        body: `Between Bhera and Kallar Kahar, the motorway climbs through the **Salt Range**, with steep grades and sharp curves. Heavy vehicles are slow here, and in winter it can be foggy in the mornings. Detour ideas from this stretch: [Khewra Salt Mine and Katas Raj](/blog/khewra-salt-mine-katas-raj-day-trip) and [Soon Valley](/blog/lahore-to-soon-valley-sakesar).

![Motorway curving through the Salt Range hills](/blog/lahore-islamabad-motorway-salt-range.jpg "The Salt Range section is the most scenic part of the M-2.")`,
      },
      {
        h: "Travel tips",
        body: `- Call the Motorway Police helpline **130** for road status; see [NHMP](https://nhmp.gov.pk)
- In fog season, leave Lahore after mid-morning; see the [fog guide](/blog/lahore-smog-fog-travel-guide)
- Fuel cost for a sedan is about {{fuel:375:13}} one way; see [fuel cost of road trips](/blog/fuel-cost-road-trips-from-lahore)

::cars toyota-corolla-altis-1-6, honda-civic, toyota-fortuner`,
      },
    ],
    faqs: [
      { q: "Where should I stop between Lahore and Islamabad?", a: "Bhera service area is the classic halfway stop; Kallar Kahar has the best views." },
      { q: "How long is the M-2 drive?", a: "About 4.5 hours in normal conditions." },
    ],
    related: ["lahore-to-islamabad-car-rental", "lahore-to-islamabad-car-vs-train-bus-flight", "lahore-to-soon-valley-sakesar"],
  },

  {
    slug: "lahore-to-sargodha-kinnow-season",
    title: "Lahore to Sargodha by Car: Kinnow Season Trip",
    metaTitle: "Lahore to Sargodha by Car: Route & Kinnow Season",
    description:
      "Lahore to Sargodha by car on the M-2: driving time, rates with driver, and why December to February is kinnow season in Pakistan's citrus capital.",
    keywords: ["lahore to sargodha", "lahore to sargodha distance", "kinnow season", "sargodha citrus", "sargodha car rental"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-to-kpk-motorway-travel.jpg",
    imageAlt: "Cars on a motorway at sunset",
    intro: `Sargodha is Pakistan's **citrus capital**, and from December to February its orchards are full of **kinnow**. Whether you're visiting family, doing business or buying fruit straight from the orchards, the drive from Lahore is easy on the M-2.

::route Lahore > (M-2, about 2 h) > Kot Momin / Sial More > (about 45 min) > Sargodha

::stats 2.5–3 h = From Lahore | Dec–Feb = Kinnow season | {{city:toyota-corolla-altis-1-6}} = Corolla intercity day | Same day = Easy return`,
    sections: [
      {
        h: "Kinnow season",
        body: `- The harvest runs from roughly **December to February**
- Many orchards sell fruit by the crate near the roadside
- The fruit is exported widely, so the season is busy with trucks on the roads

Bring an SUV or van if you plan to carry crates home.`,
      },
      {
        h: "Rates",
        body: `| Car | Seats | Intercity day |
| --- | --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{city:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{city:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{city:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{city:toyota-hiace-grand-cabin}} |

::cars toyota-corolla-altis-1-6, toyota-fortuner, toyota-hiace-grand-cabin`,
      },
      {
        h: "Tips",
        body: `- The M-2 is often foggy in December and January mornings; leave after mid-morning. See the [fog guide](/blog/lahore-smog-fog-travel-guide).
- Continue to [Soon Valley](/blog/lahore-to-soon-valley-sakesar) for a weekend in the Salt Range.
- See [intercity car rental](/blog/intercity-car-rental-from-lahore) for other cities.`,
      },
    ],
    faqs: [
      { q: "How far is Sargodha from Lahore?", a: "About 2.5 to 3 hours by car via the M-2." },
      { q: "When is kinnow season?", a: "Roughly December to February." },
    ],
    related: ["intercity-car-rental-from-lahore", "lahore-to-soon-valley-sakesar", "one-way-car-rental-lahore"],
  },

  {
    slug: "lahore-to-kasur-bulleh-shah",
    title: "Lahore to Kasur by Car: Bulleh Shah's Shrine and Kasuri Food",
    metaTitle: "Lahore to Kasur by Car: Bulleh Shah & Food",
    description:
      "A half-day trip from Lahore to Kasur by car: the shrine of Baba Bulleh Shah, Kasur's famous fried fish and andrassay, route, time and car with driver.",
    keywords: ["lahore to kasur", "bulleh shah shrine", "kasur trip", "kasuri fish", "half day trip from lahore"],
    category: "Lahore",
    date: D,
    image: "/blog/intercity-safe-car-rental-lahore.jpg",
    imageAlt: "Car with driver ready for a trip from Lahore",
    intro: `Kasur, just south of Lahore, is the city of the great Sufi poet **Baba Bulleh Shah**, and famous for its food: fried fish, andrassay and Kasuri methi. It's an easy **half-day trip** from Lahore.

::route Lahore > (Ferozepur Road, about 1–1.5 h) > Kasur`,
    sections: [
      {
        h: "What to see and eat",
        body: `- **Shrine of Baba Bulleh Shah**, the heart of the city, where qawwali is often performed, especially on Thursday evenings
- **Kasuri fried fish**, especially in winter
- **Andrassay**, Kasur's famous sweet
- **Kasuri methi** (dried fenugreek), sold everywhere

Visit the shrine respectfully: modest dress, head covered, shoes removed.`,
      },
      {
        h: "Plan your trip",
        body: `::stats ~55 km = From Lahore | 1–1.5 h = Each way | Thursday = Qawwali evenings | Winter = Fish season

Leave Lahore in the afternoon, visit the shrine, have dinner and return at night. In fog season, drive back carefully or leave earlier; see the [fog guide](/blog/lahore-smog-fog-travel-guide).

::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin`,
      },
    ],
    faqs: [
      { q: "How far is Kasur from Lahore?", a: "About 55 km, usually 1 to 1.5 hours via Ferozepur Road." },
      { q: "What is Kasur famous for?", a: "The shrine of Baba Bulleh Shah, fried fish, andrassay and Kasuri methi." },
    ],
    related: ["winter-food-in-lahore", "half-day-car-rental-lahore", "lahore-religious-sites-tour"],
  },
];

export default part15;
