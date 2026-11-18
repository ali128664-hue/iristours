/**
 * part10.ts — day trips, Lahore city guides and timely topics:
 * Harappa, Rohtas Fort, Banjosa, Hiran Minar, family day out, shopping,
 * match days, the 25 December long weekend, fuel costs, events.
 */

import type { Guide } from "./types";

const part10: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "harappa-day-trip-from-lahore",
    title: "Harappa Day Trip from Lahore by Car",
    metaTitle: "Harappa Day Trip from Lahore: Route & Tips",
    description:
      "Visit Harappa, the ancient Indus Valley city, on a day trip from Lahore by car: route via Okara and Sahiwal, driving time, the site and museum, car rates.",
    keywords: ["harappa day trip", "lahore to harappa", "harappa museum", "indus valley civilization site", "day trip from lahore"],
    category: "Lahore",
    date: "2026-11-18",
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Family with a car outside a historic monument",
    intro: `[Harappa](https://en.wikipedia.org/wiki/Harappa) is one of the great cities of the Indus Valley Civilisation, more than 4,500 years old. It lies near Sahiwal, south-west of Lahore, and makes a fascinating **day trip from Lahore by car**, especially for families and students.

::route Lahore > (N-5 via Okara, about 3–3.5 h) > Sahiwal > (about 30 min) > Harappa`,
    sections: [
      {
        h: "What to see",
        body: `- **The archaeological site:** mounds, brick walls, wells and drains laid out thousands of years ago
- **Harappa Museum:** seals, pottery, jewellery and figurines found at the site
- **The granary area** and the ancient cemetery

Allow two to three hours at the site and museum. Bring a hat and water; there's little shade.`,
      },
      {
        h: "Timing and season",
        body: `**October to March** is the best time; summer afternoons are extremely hot. In December and January, leave Lahore after the morning fog lifts; see the [fog guide](/blog/lahore-smog-fog-travel-guide).

::stats ~200 km = From Lahore | 3–3.5 h = Each way | Oct–Mar = Best season | 2–3 h = At the site`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-coaster-saloon

Families take a [Corolla](/fleet/toyota-corolla-altis-1-6) ({{city:toyota-corolla-altis-1-6}}) or [BR-V](/fleet/honda-br-v) ({{city:honda-br-v}}); schools book a [Coaster](/blog/coaster-on-rent-lahore). Combine with a stop in Sahiwal, or continue to [Multan](/blog/lahore-to-multan-by-car).`,
      },
    ],
    faqs: [
      { q: "How far is Harappa from Lahore?", a: "About 200 km, roughly 3 to 3.5 hours by car via Okara and Sahiwal." },
      { q: "Is Harappa good for a school trip?", a: "Yes. The museum and site are ideal for students; book a Coaster for a class." },
    ],
    related: ["rohtas-fort-day-trip-from-lahore", "khewra-salt-mine-katas-raj-day-trip", "hiran-minar-sheikhupura-day-trip"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rohtas-fort-day-trip-from-lahore",
    title: "Rohtas Fort Day Trip from Lahore",
    metaTitle: "Rohtas Fort Day Trip from Lahore: Route & Tips",
    description:
      "Visit Rohtas Fort, Sher Shah Suri's UNESCO World Heritage fort near Jhelum, on a day trip from Lahore: GT Road route, driving time, what to see, car rates.",
    keywords: ["rohtas fort trip", "lahore to rohtas fort", "rohtas fort jhelum", "unesco site pakistan", "day trip from lahore"],
    category: "Lahore",
    date: "2026-11-17",
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "Road through the Potohar and Salt Range hills",
    intro: `[Rohtas Fort](https://en.wikipedia.org/wiki/Rohtas_Fort), built by Sher Shah Suri in the 16th century, is a UNESCO World Heritage Site with massive walls running for kilometres over the hills near Jhelum. It is one of the best **day trips from Lahore** for history lovers.

::route Lahore > (GT Road, about 3–3.5 h) > Gujranwala > Gujrat > Jhelum > (20 min) > Rohtas Fort`,
    sections: [
      {
        h: "What to see",
        body: `- **Sohail Gate**, the grand main entrance
- **Shahi Mosque** inside the fort
- **Haveli Man Singh**, a later addition with views over the walls
- The **walls and bastions**, walkable in parts, with views of the Kahan river

Wear good shoes; the fort is large and the ground is uneven.`,
      },
      {
        h: "Route options",
        body: `The direct route is the **GT Road** (N-5) through Gujranwala, Gujrat and Jhelum. It's slower than a motorway, with towns along the way, so leave early. You can also combine Rohtas with the [Khewra Salt Mine](/blog/khewra-salt-mine-katas-raj-day-trip) on a two-day loop.

::stats UNESCO = World Heritage Site | ~200 km = From Lahore | 3–3.5 h = Each way | 16th c. = Built by Sher Shah Suri`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin

Intercity days start at {{city:toyota-corolla-altis-1-6}} for a Corolla. For school groups, see [Coaster on rent](/blog/coaster-on-rent-lahore).`,
      },
    ],
    faqs: [
      { q: "How long does it take from Lahore to Rohtas Fort?", a: "About 3 to 3.5 hours each way on the GT Road." },
      { q: "Is Rohtas Fort a UNESCO site?", a: "Yes. It was inscribed as a World Heritage Site in 1997." },
    ],
    related: ["harappa-day-trip-from-lahore", "khewra-salt-mine-katas-raj-day-trip", "lahore-city-tour-by-car"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "lahore-to-banjosa-rawalakot",
    title: "Lahore to Banjosa Lake and Rawalakot by Car",
    metaTitle: "Lahore to Banjosa Lake & Rawalakot by Car",
    description:
      "A short Azad Kashmir trip from Lahore: Banjosa Lake, Rawalakot and Toli Pir by car. Route via Islamabad, driving time, season, what to pack and the best car.",
    keywords: ["lahore to banjosa lake", "banjosa lake trip", "rawalakot trip", "toli pir", "azad kashmir trip from lahore"],
    category: "Routes",
    date: "2026-11-16",
    image: "/blog/northern-areas-fortuner.jpg",
    imageAlt: "SUV on a green mountain road",
    intro: `**Banjosa Lake** near Rawalakot is one of the easiest Azad Kashmir trips from Lahore: a pine-ringed lake, cool air and the meadows of **Toli Pir** nearby. It suits a long weekend.

::route Lahore > (M-2, 4.5 h) > Islamabad > (about 3–4 h via Kotli Sattian / Azad Pattan) > Rawalakot > (30 min) > Banjosa Lake`,
    sections: [
      {
        h: "Places to see",
        body: `- **Banjosa Lake:** a small lake surrounded by pine forest, about 20 km from Rawalakot
- **Toli Pir:** high meadows with wide views, about an hour from Rawalakot
- **Rawalakot town:** a base with hotels and restaurants

Plan **three days**: one to drive up, one to explore, one to return.`,
      },
      {
        h: "Season",
        body: `**April to October** for green scenery; summer weekends are busy. Winter brings snow at Toli Pir and cold nights at Banjosa. Carry your CNIC or passport for checkpoints entering Azad Kashmir.

::stats 3 days = Ideal trip | Apr–Oct = Best season | ~8 h = From Lahore | 4x4 = Recommended for Toli Pir`,
      },
      {
        h: "Car options",
        body: `::cars toyota-fortuner, honda-br-v, toyota-hiace-grand-cabin

The main road to Rawalakot is paved; a [BR-V](/fleet/honda-br-v) or Corolla works in good weather. For Toli Pir or winter, choose a [Fortuner](/fleet/toyota-fortuner). For Neelum instead, see [Lahore to Neelum Valley](/blog/lahore-to-neelum-valley-by-car).`,
      },
    ],
    faqs: [
      { q: "How far is Banjosa Lake from Lahore?", a: "About 8 hours by car via Islamabad and Rawalakot." },
      { q: "Is Banjosa good for a weekend trip?", a: "Yes. A three-day weekend is ideal." },
    ],
    related: ["lahore-to-neelum-valley-by-car", "lahore-to-murree-by-car-snowfall", "lahore-to-nathia-gali-ayubia"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "hiran-minar-sheikhupura-day-trip",
    title: "Hiran Minar Sheikhupura: Half-Day Trip from Lahore",
    metaTitle: "Hiran Minar Sheikhupura: Half-Day Trip from Lahore",
    description:
      "Hiran Minar in Sheikhupura is an easy half-day trip from Lahore: Emperor Jahangir's tower and water tank, route, driving time, best time to visit and car rates.",
    keywords: ["hiran minar", "hiran minar sheikhupura", "lahore to sheikhupura", "half day trip from lahore", "mughal monuments near lahore"],
    category: "Lahore",
    date: "2026-11-16",
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Mughal monument at sunset with visitors",
    intro: `[Hiran Minar](https://en.wikipedia.org/wiki/Hiran_Minar) is a Mughal tower and a large water tank built for Emperor Jahangir, famously in memory of a pet antelope. It is less than an hour from Lahore, which makes it a perfect **half-day trip** with family.

::route Lahore > (via Sheikhupura Road, about 1 h) > Hiran Minar`,
    sections: [
      {
        h: "What you'll see",
        body: `- The **minar** (tower), which you can climb on some visits for views over the countryside
- The large **water tank** with a pavilion in the middle, reached by a causeway
- Gardens and open grounds for a family picnic

Go in the late afternoon for softer light and cooler weather, or on a clear winter morning after the fog has lifted.`,
      },
      {
        h: "Make it a day",
        body: `Combine Hiran Minar with a morning in Lahore's old city — see our [Lahore city tour by car](/blog/lahore-city-tour-by-car) — or with a stop at the Lahore Fort and [food street](/blog/lahore-food-tour-by-car) on the way back.

::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin

A half-day or full-day booking inside the Lahore area starts at {{rate:toyota-yaris}} for a Yaris.`,
      },
    ],
    faqs: [
      { q: "How far is Hiran Minar from Lahore?", a: "About 40–50 km, usually under an hour by car." },
      { q: "Is Hiran Minar good for children?", a: "Yes. The open grounds and water tank make it a relaxed family outing." },
    ],
    related: ["lahore-city-tour-by-car", "harappa-day-trip-from-lahore", "things-to-do-in-lahore-with-family"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "things-to-do-in-lahore-with-family",
    title: "Things to Do in Lahore with Family",
    metaTitle: "Things to Do in Lahore with Family: 15 Ideas",
    description:
      "Family-friendly things to do in Lahore: Lahore Zoo, Jallo Park, Joyland, Greater Iqbal Park, the Lahore Museum and the old city, with tips on getting around.",
    keywords: ["things to do in lahore with family", "places to visit in lahore with kids", "lahore family outing", "lahore zoo", "jallo park"],
    category: "Lahore",
    date: "2026-11-15",
    image: "/blog/hiace-rental.jpg",
    imageAlt: "Family beside a van outside a historic monument",
    intro: `Lahore is a wonderful city for families: parks, history, food and plenty of space for children to run around. Here are the best **things to do in Lahore with family**, grouped so you can plan a day without crossing the city five times.`,
    sections: [
      {
        h: "Parks and animals",
        body: `- **Lahore Zoo** on Mall Road, one of the oldest zoos in South Asia
- **Lahore Zoo Safari** (the old Safari Park) on Raiwind Road, with open enclosures
- **Jallo Park** on the eastern side, with a botanical garden and wide lawns
- **Model Town Park** for a morning walk or cycle
- **Bagh-e-Jinnah** (Lawrence Gardens), shady and peaceful`,
      },
      {
        h: "History the kids will enjoy",
        body: `- **Lahore Fort** and the Sheesh Mahal
- **Badshahi Mosque** and the view from Hazuri Bagh
- **Minar-e-Pakistan** in Greater Iqbal Park, with fountains and space to run
- **Lahore Museum** on Mall Road
- **Shalimar Gardens**, the Mughal terraced gardens

::route Lahore Fort > (walk) > Badshahi Mosque > (10 min) > Greater Iqbal Park > (15 min) > Lahore Museum

Our [Lahore city tour by car](/blog/lahore-city-tour-by-car) has a full-day plan.`,
      },
      {
        h: "Fun and food",
        body: `- **Joyland** rides near Fortress Stadium
- Malls with play areas: Emporium Mall in Johar Town and Packages Mall on Walton Road
- [Fort Road Food Street](/blog/lahore-food-tour-by-car) for dinner with a view
- The [Wagah border ceremony](/blog/wagah-border-ceremony-from-lahore) in the evening`,
      },
      {
        h: "Getting around with a family",
        body: `Moving a family across Lahore with prams, bags and grandparents is easiest with one car and a driver who waits.

::cars honda-br-v, toyota-fortuner, toyota-hiace-grand-cabin

A [7-seater](/blog/seven-seater-car-on-rent-lahore) like the BR-V costs {{rate:honda-br-v}} per day; the [Hiace](/fleet/toyota-hiace-grand-cabin) carries up to 14. In smog season, check air quality before outdoor plans; see the [smog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
    ],
    faqs: [
      { q: "What is the best place in Lahore for kids?", a: "Lahore Zoo Safari, Jallo Park and Joyland are favourites; the Lahore Fort is great for older children." },
      { q: "Can we visit several places in one day?", a: "Yes. With a car and driver, plan by area: old city in the morning, parks or malls in the afternoon." },
    ],
    related: ["lahore-city-tour-by-car", "lahore-food-tour-by-car", "seven-seater-car-on-rent-lahore"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "lahore-shopping-by-car",
    title: "Lahore Shopping Guide: Malls and Markets by Car",
    metaTitle: "Lahore Shopping Guide: Malls & Markets by Car",
    description:
      "Where to shop in Lahore: Liberty Market, Anarkali, Ichhra, Packages Mall, Emporium and more, with a route plan for a shopping day with car and driver.",
    keywords: ["shopping in lahore", "best markets in lahore", "liberty market lahore", "anarkali bazaar", "wedding shopping lahore"],
    category: "Lahore",
    date: "2026-11-14",
    image: "/blog/rent-a-car-in-lahore-featured.jpg",
    imageAlt: "Cars on a Lahore boulevard at sunset",
    intro: `Wedding season means shopping season in Lahore: bridal wear, jewellery, shoes, gifts and fabric. The problem is parking. A **shopping day with a car and driver** lets you hop between markets without circling for a space, and keeps your bags safe in the car.`,
    sections: [
      {
        h: "Markets and malls",
        body: `| Place | Best for | Area |
| --- | --- | --- |
| Liberty Market | Clothes, shoes, everyday shopping | Gulberg |
| MM Alam Road | Designer stores, cafés | Gulberg |
| Anarkali Bazaar | Traditional clothes, jewellery, bargains | Old city |
| Ichhra Bazaar | Fabric and wedding shopping on a budget | Ichhra |
| Azam Cloth Market | Wholesale fabric | Near the Walled City |
| Packages Mall | Brands, food court | Walton Road |
| Emporium Mall | Brands, cinema, play area | Johar Town |
| Fortress Square | Brands near Cantt | Cantt |`,
      },
      {
        h: "A shopping-day route",
        body: `::route Anarkali > (15 min) > Ichhra > (20 min) > Liberty Market > (5 min) > MM Alam Road

Start with the old-city markets in the morning, when they're calmer, and finish in Gulberg for dinner. See [rent a car in Gulberg](/blog/rent-a-car-gulberg-lahore).`,
      },
      {
        h: "Which car",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-fortuner

For wedding shopping with family and lots of bags, a [BR-V](/fleet/honda-br-v) or [Fortuner](/fleet/toyota-fortuner) is ideal. During severe smog, markets have sometimes been ordered to close early, so check the latest notices; see the [smog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
    ],
    faqs: [
      { q: "Which market in Lahore is best for wedding shopping?", a: "Ichhra and Anarkali for budget and traditional wear; Liberty and MM Alam Road for designer stores." },
      { q: "Can the driver wait while we shop?", a: "Yes. Waiting is included in a day booking." },
    ],
    related: ["wedding-car-rental-lahore-shaadi-season", "rent-a-car-gulberg-lahore", "things-to-do-in-lahore-with-family"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "gaddafi-stadium-match-day-transport",
    title: "Gaddafi Stadium Match Day: Getting There by Car",
    metaTitle: "Gaddafi Stadium Match Day Transport in Lahore",
    description:
      "Going to a cricket match at Gaddafi Stadium, Lahore? Road closures, parking, security checks and why a car with driver makes match day easier for groups.",
    keywords: ["gaddafi stadium parking", "gaddafi stadium match day", "psl match lahore transport", "how to reach gaddafi stadium", "cricket match lahore car"],
    category: "Lahore",
    date: "2026-11-13",
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
    imageAlt: "Cars lined up in a Lahore car park",
    intro: `International cricket and PSL matches at **Gaddafi Stadium** bring huge crowds, tight security and road closures around Gulberg and Ferozepur Road. Getting there and back is half the challenge. Here's how to make match day easy.`,
    sections: [
      {
        h: "What to expect",
        body: `- **Road closures** around the stadium for hours before and after the match
- **Designated parking** areas, often some distance away, with shuttles or a walk
- **Several security checks**; carry your ticket and CNIC
- **Heavy traffic** after the final ball, especially on Ferozepur Road and Main Boulevard`,
      },
      {
        h: "Why a car with driver helps",
        body: `The driver drops your group at the nearest permitted point, waits in the designated parking area, and picks you up at an agreed spot after the match. No searching for parking, and no struggling to find a ride when thousands leave at once.

::cars toyota-hiace-grand-cabin, honda-br-v, toyota-fortuner

For a group of friends, a [Hiace](/fleet/toyota-hiace-grand-cabin) ({{rate:toyota-hiace-grand-cabin}} per day) is cheaper than several ride-hailing trips. See [car with driver vs ride-hailing](/blog/car-rental-vs-ride-hailing-lahore).`,
      },
      {
        h: "Tips",
        body: `- Agree on a **pickup landmark** with the driver beforehand; mobile networks can be jammed.
- Arrive **early**; gates and security take time.
- Check the official match-day traffic plan announced by Lahore traffic police.
- Coming from another city? Combine with an [intercity car](/blog/intercity-car-rental-from-lahore).`,
      },
    ],
    faqs: [
      { q: "Is there parking at Gaddafi Stadium?", a: "On big match days, parking is usually in designated areas away from the stadium, with roads closed nearby." },
      { q: "What's the best way to reach the stadium with a group?", a: "A van with driver who drops you at the nearest permitted point and waits in the designated parking." },
    ],
    related: ["car-rental-vs-ride-hailing-lahore", "rent-a-car-gulberg-lahore", "things-to-do-in-lahore-with-family"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "december-25-long-weekend-trips-lahore",
    title: "25 December Long Weekend: Trips from Lahore",
    metaTitle: "25 December Long Weekend 2026: Trips from Lahore",
    description:
      "Quaid-e-Azam Day and Christmas fall on Friday 25 December 2026, making a long weekend. Trip ideas from Lahore by car, from Murree snow to Christmas in Lahore.",
    keywords: ["25 december long weekend", "quaid day holiday trip", "christmas in lahore", "december long weekend pakistan", "weekend trips from lahore"],
    category: "Travel news",
    date: "2026-11-18",
    image: "/blog/northern-areas-fortuner.jpg",
    imageAlt: "SUV on a winding mountain road",
    intro: `**25 December** is a public holiday in Pakistan for **Quaid-e-Azam Day**, and also **Christmas**. In 2026 it falls on a **Friday**, so many families get a three-day weekend from 25 to 27 December. That makes it one of the busiest travel weekends of the winter, so plan early.

::stats Fri 25 Dec = Holiday | 3 days = 25–27 Dec | 15 Dec–15 Feb = Murree season | Book early = Cars sell out`,
    sections: [
      {
        h: "Snow weekend: Murree and the Galiyat",
        body: `If there has been snowfall, Murree and Nathia Gali will be packed. Leave Lahore early on Thursday night or Friday morning, book a 4x4, and follow official advisories on entry. See [Lahore to Murree in snowfall season](/blog/lahore-to-murree-by-car-snowfall) and [Nathia Gali and Ayubia](/blog/lahore-to-nathia-gali-ayubia).

::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin`,
      },
      {
        h: "Shorter trips",
        body: `- [Kartarpur](/blog/lahore-to-kartarpur-by-car), about 2.5–3 hours
- [Khewra Salt Mine and Katas Raj](/blog/khewra-salt-mine-katas-raj-day-trip)
- [Islamabad](/blog/lahore-to-islamabad-car-rental) for the Margalla Hills
- [Bahawalpur and the Cholistan desert](/blog/lahore-to-bahawalpur-cholistan-by-car), pleasant in winter`,
      },
      {
        h: "Christmas in Lahore",
        body: `Lahore's churches hold Christmas services and are beautifully lit. The **Sacred Heart Cathedral** on Lawrence Road and the **Cathedral Church of the Resurrection** on Mall Road are among the best known. Families visiting relatives across the city often book a car with driver for the day to move between homes and services.

A day with driver starts at {{rate:toyota-yaris}}; a [7-seater](/blog/seven-seater-car-on-rent-lahore) at {{rate:honda-br-v}}.`,
      },
      {
        h: "Book early",
        body: `Long weekends in December overlap with weddings and visitors from abroad, so SUVs and vans are the first to go. Send your dates on WhatsApp now to lock in a car. Fog is likely on motorways in the mornings; see our [fog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
    ],
    faqs: [
      { q: "Is 25 December a holiday in Pakistan?", a: "Yes, for Quaid-e-Azam Day, and it is also Christmas Day." },
      { q: "What day is 25 December 2026?", a: "Friday, making 25–27 December a long weekend for many people." },
    ],
    related: ["winter-trips-from-lahore", "lahore-to-murree-by-car-snowfall", "lahore-to-nathia-gali-ayubia"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "fuel-cost-road-trips-from-lahore",
    title: "Fuel Cost of Road Trips from Lahore",
    metaTitle: "Fuel Cost from Lahore to Islamabad, Murree & More",
    description:
      "How much petrol does a road trip from Lahore cost? Live fuel cost estimates for Islamabad, Murree, Faisalabad, Multan, Karachi and Naran, by car type.",
    keywords: ["lahore to islamabad fuel cost", "petrol cost lahore to murree", "fuel calculator pakistan", "trip cost lahore", "petrol price today pakistan"],
    category: "Travel news",
    date: "2026-11-18",
    image: "/blog/intercity-safe-car-rental-lahore.jpg",
    imageAlt: "Toyota Corolla with a driver on a Lahore expressway",
    intro: `With petrol prices changing every fortnight, the first question for any road trip is: **how much will the fuel cost?** This page uses today's petrol price of **{{petrol}}** from our live [fuel prices page](/fuel-prices-pakistan), so the numbers below update automatically.

::stats {{petrol}} = Petrol today | {{diesel}} = Diesel today | 13 km/l = Typical sedan | 8 km/l = Typical large SUV`,
    sections: [
      {
        h: "Fuel cost by destination",
        body: `Estimates for a **one-way** trip at today's petrol price. A sedan averages about 13 km per litre on the motorway; a large SUV about 8.

| From Lahore to | Distance | Sedan (13 km/l) | Large SUV (8 km/l) |
| --- | --- | --- | --- |
| Sialkot | ~125 km | {{fuel:125:13}} | {{fuel:125:8}} |
| Faisalabad | ~180 km | {{fuel:180:13}} | {{fuel:180:8}} |
| Multan | ~340 km | {{fuel:340:13}} | {{fuel:340:8}} |
| Islamabad | ~375 km | {{fuel:375:13}} | {{fuel:375:8}} |
| Murree | ~440 km | {{fuel:440:12}} | {{fuel:440:7}} |
| Naran | ~640 km | {{fuel:640:11}} | {{fuel:640:7}} |
| Karachi | ~1,220 km | {{fuel:1220:13}} | {{fuel:1220:8}} |

Hill roads use more fuel than the motorway, so the Murree and Naran columns assume lower mileage. Diesel SUVs cost differently; see the calculator on our [fuel prices page](/fuel-prices-pakistan).`,
      },
      {
        h: "Total trip cost: an example",
        body: `**Lahore to Islamabad and back in a Corolla with driver, one day:**

| Item | Cost |
| --- | --- |
| Corolla with driver, intercity day | {{city:toyota-corolla-altis-1-6}} |
| Petrol, ~750 km at 13 km/l | {{fuel:750:13}} |
| Motorway tolls | Extra, at current NHA rates |

::cars toyota-corolla-altis-1-6, honda-civic, toyota-fortuner

Every booking comes with a written quote showing how fuel and tolls are handled.`,
      },
      {
        h: "How to save fuel on a trip",
        body: `- **Pick the right car:** a [Yaris](/blog/toyota-yaris-on-rent-lahore) or Corolla uses far less than an SUV.
- **Travel together:** one [7-seater](/blog/seven-seater-car-on-rent-lahore) is cheaper than two sedans.
- **Steady motorway speeds** save more than you'd expect.
- **Avoid peak traffic** in and out of Lahore.`,
      },
    ],
    faqs: [
      { q: "How much petrol does Lahore to Islamabad take?", a: "About 29 litres one way in a typical sedan, costing roughly {{fuel:375:13}} at today's price." },
      { q: "Are these prices updated?", a: "Yes. They use the live petrol price from our fuel prices page, which updates when the government revises prices." },
    ],
    related: ["intercity-car-rental-from-lahore", "lahore-to-islamabad-car-rental", "rent-a-car-lahore-price-list"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "event-car-rental-expo-centre-lahore",
    title: "Car Rental for Events and Exhibitions in Lahore",
    metaTitle: "Event Car Rental Lahore: Expo Centre & Conferences",
    description:
      "Car rental for events in Lahore: exhibitions at Expo Centre, conferences, launches and delegations. Executive cars, shuttle vans, coordinators and invoicing.",
    keywords: ["event car rental lahore", "expo centre lahore transport", "conference transport lahore", "delegation cars lahore", "shuttle van rental lahore"],
    category: "Rent a car",
    date: "2026-11-13",
    image: "/categories/corporate.jpg",
    imageAlt: "Executive cars outside an office tower",
    intro: `Exhibitions at **Expo Centre Lahore**, conferences in hotels and product launches all need smooth transport for guests, speakers and staff. We provide **event car rental in Lahore**: matching executive cars, shuttle vans and drivers who know the venues.`,
    sections: [
      {
        h: "What we provide",
        body: `- **Airport pickups** for speakers and exhibitors, with name boards. See [Lahore airport pickup](/blog/rent-a-car-lahore-airport).
- **Executive cars** for VIP guests: [Civic](/fleet/honda-civic), [Audi A6](/blog/audi-a6-on-rent-lahore), [Prado](/blog/prado-on-rent-lahore) or [V8](/blog/land-cruiser-v8-on-rent-lahore).
- **Shuttle vans** between hotels and the venue: [Hiace](/fleet/toyota-hiace-grand-cabin) and [Coaster](/fleet/toyota-coaster-saloon).
- **One coordinator** on WhatsApp for all drivers.

::cars honda-civic, toyota-land-cruiser-prado, toyota-coaster-saloon`,
      },
      {
        h: "Expo Centre logistics",
        body: `Expo Centre is in Johar Town, about 35–50 minutes from the airport and 25–40 minutes from Gulberg hotels. On big exhibition days, traffic and parking around the venue get heavy, so shuttles that drop at the gate and park in designated areas save a lot of time. See [rent a car in Johar Town](/blog/rent-a-car-johar-town-lahore).`,
      },
      {
        h: "Pricing and invoicing",
        body: `Event fleets are quoted per day, based on the number and type of vehicles and working hours. Companies receive a single invoice. For ongoing needs, see [corporate car rental](/blog/corporate-car-rental-lahore-guide).

| Vehicle | Day rate |
| --- | --- |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | {{rate:toyota-hiace-grand-cabin}} |
| [Toyota Coaster](/fleet/toyota-coaster-saloon) | {{rate:toyota-coaster-saloon}} |`,
      },
    ],
    faqs: [
      { q: "Can you provide matching cars for an event?", a: "Yes, subject to availability. Book early for the best chance of matching colours and models." },
      { q: "Do you provide an invoice?", a: "Yes, one invoice for the full event." },
    ],
    related: ["corporate-car-rental-lahore-guide", "rent-a-car-johar-town-lahore", "coaster-on-rent-lahore"],
  },
];

export default part10;
