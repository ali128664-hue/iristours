/**
 * part16.ts — 15 guides scheduled for 24 November 2026.
 * They go live automatically on that date (see registry.ts).
 */

import type { Guide } from "./types";

const D = "2026-11-24";

const part16: Guide[] = [
  {
    slug: "lahore-airport-arrival-guide",
    title: "Arriving at Lahore Airport: A Guide for Overseas Visitors",
    metaTitle: "Arriving at Lahore Airport: Guide for Overseas Visitors",
    description:
      "Landing at Allama Iqbal International Airport, Lahore? Immigration, baggage, SIM cards, currency exchange, meeting your driver and getting home smoothly.",
    keywords: ["lahore airport arrival", "allama iqbal airport guide", "lahore airport sim card", "lahore airport pickup", "arriving in lahore"],
    category: "Rent a car",
    date: D,
    image: "/blog/lahore-airport-car-rental-service.jpg",
    imageAlt: "Chauffeur meeting travellers outside Lahore airport",
    intro: `Whether you're an overseas Pakistani coming home for the winter or a first-time visitor, a little preparation makes **arriving at Lahore airport** much easier. Here's what to expect from landing to the front door.

::stats LHE = Airport code | 60 min = Free driver waiting | 24/7 = Pickups | 15–25 min = To DHA`,
    sections: [
      {
        h: "From the plane to arrivals",
        body: `1. **Immigration:** have your passport (and NICOP or POC if you have one) ready.
2. **Baggage:** large international flights can take a while; trolleys are available in the hall.
3. **Customs:** use the green channel if you have nothing to declare.
4. **Arrivals hall:** your driver waits outside with a name board.`,
      },
      {
        h: "SIM card and money",
        body: `- **Mobile SIM:** operators have counters at the airport; SIMs need biometric verification. Overseas visitors may need to register foreign phones for longer stays; ask the operator.
- **Currency:** exchange counters are in the arrivals area, but rates are usually better in the city. Change a small amount for the first day.
- **Message the driver** on WhatsApp once you're through customs.`,
      },
      {
        h: "Getting home",
        body: `Choose a car that fits your luggage:

::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin

The driver tracks your flight; the first 60 minutes after landing are free. Details and travel times in [Lahore airport pickup and drop](/blog/rent-a-car-lahore-airport). Staying a few weeks? See [car rental for overseas Pakistanis](/blog/car-rental-overseas-pakistanis-lahore).

> In December and January, fog often delays early-morning flights. Our driver adjusts to the actual landing time.`,
      },
    ],
    faqs: [
      { q: "Where will the driver meet me at Lahore airport?", a: "Outside the arrivals hall, holding a board with your name." },
      { q: "Can I buy a SIM card at Lahore airport?", a: "Yes, operators have counters; biometric verification is required." },
    ],
    related: ["rent-a-car-lahore-airport", "car-rental-overseas-pakistanis-lahore", "umrah-hajj-airport-drop-lahore"],
  },

  {
    slug: "best-time-to-visit-northern-pakistan",
    title: "Best Time to Visit Northern Pakistan: Month by Month",
    metaTitle: "Best Time to Visit Northern Pakistan: Month by Month",
    description:
      "When to visit Hunza, Skardu, Naran, Swat and Murree: a month-by-month guide to weather, road openings, blossoms, autumn colours and snow, for trips from Lahore.",
    keywords: ["best time to visit northern pakistan", "best time to visit hunza", "when to go to naran", "skardu best time", "northern areas weather by month"],
    category: "Routes",
    date: D,
    image: "/tours/hunza.jpg",
    imageAlt: "Hunza Valley with snow-capped mountains",
    intro: `Northern Pakistan changes completely through the year: blossom in spring, green meadows in summer, golden autumn and deep snow in winter. Some roads only open for a few months. This **month-by-month guide** helps you pick the right time from Lahore.`,
    sections: [
      {
        h: "Month by month",
        body: `| Month | What to expect | Good for |
| --- | --- | --- |
| Jan–Feb | Snow, very cold, some roads closed | Murree, Malam Jabba, Galiyat snow |
| March | Snow melting, early blossom in lower valleys | Swat, Islamabad hills |
| April | Cherry and apricot blossom | Hunza, Swat |
| May | Warmer, valleys opening | Swat, Kaghan up to Naran |
| June | Babusar Top usually opens | Naran, Babusar, start of Hunza season |
| July–Aug | Peak season, monsoon landslide risk | Deosai, Fairy Meadows, Kumrat |
| September | Clear skies, fewer crowds | Everywhere in the north |
| October | Autumn colours | Hunza, Skardu, Naran |
| November | Cold, quiet, first snows | Hunza, Swat; check advisories |
| December | Winter sets in, snow in hills | Murree, Galiyat, Malam Jabba |`,
      },
      {
        h: "Best picks",
        body: `- **Blossom:** April in [Hunza](/blog/lahore-to-hunza-by-road)
- **Meadows and lakes:** July–August at [Fairy Meadows](/blog/lahore-to-fairy-meadows), [Kumrat](/blog/lahore-to-kumrat-valley-by-car), [Neelum](/blog/lahore-to-neelum-valley-by-car)
- **Autumn colours:** October in Hunza and [Skardu](/blog/lahore-to-skardu-by-road)
- **Snow:** December–February in [Murree](/blog/lahore-to-murree-by-car-snowfall) and [Malam Jabba](/blog/lahore-to-malam-jabba-by-car)

::stats June–Oct = Babusar open | April = Blossom | October = Autumn | Dec–Feb = Snow`,
      },
      {
        h: "Car for every season",
        body: `::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin

For mountain trips in any season, a 4x4 with an experienced driver is the safest choice. See the [10-day road trip itinerary](/blog/pakistan-road-trip-itinerary-from-lahore) and what's open now in [northern Pakistan in late November and December](/blog/northern-pakistan-travel-november-december).`,
      },
    ],
    faqs: [
      { q: "What is the best month to visit Hunza?", a: "April for blossom and October for autumn colours; May to September for all roads open." },
      { q: "When does Babusar Top open?", a: "Usually in June, closing again with snow around October or November." },
    ],
    related: ["northern-pakistan-travel-november-december", "pakistan-road-trip-itinerary-from-lahore", "lahore-to-hunza-by-road"],
  },

  {
    slug: "first-time-car-rental-lahore-tips",
    title: "Renting a Car in Lahore for the First Time: 12 Tips",
    metaTitle: "First Time Renting a Car in Lahore? 12 Tips",
    description:
      "Renting a car in Lahore for the first time? 12 practical tips on choosing the car, written quotes, fuel, timings, waiting, documents and avoiding surprises.",
    keywords: ["car rental tips lahore", "first time rent a car", "how to rent a car in lahore", "rent a car advice pakistan", "car hire tips"],
    category: "Rent a car",
    date: D,
    image: "/blog/chauffeur-rental.jpg",
    imageAlt: "Chauffeur opening a car door",
    intro: `First time renting a car in Lahore? These **12 tips** come from what our customers most often wish they'd known before their first booking.`,
    sections: [
      {
        h: "Before you book",
        body: `1. **Count people and bags**, then choose the car. A sedan fits four with three bags. See [7 seater options](/blog/seven-seater-car-on-rent-lahore).
2. **Decide driver or self-drive.** With a driver there's no deposit and no parking stress. See [self drive rules](/blog/self-drive-car-rental-lahore).
3. **Get a written quote** with the car, dates and total. See [how to choose a company](/blog/how-to-choose-rent-a-car-company-lahore).
4. **Ask how fuel, tolls and overtime work** for your trip.
5. **Book early** for weekends, weddings and December. See the [December booking guide](/blog/rent-a-car-lahore-december-booking-guide).`,
      },
      {
        h: "On the day",
        body: `6. **Share the exact address** or a map pin.
7. **Save the driver's number** from the confirmation.
8. **Check the car** quickly at pickup: AC, seat belts, cleanliness.
9. **Plan around traffic and fog**: rush hours in Lahore, fog on motorways in winter. See the [fog guide](/blog/lahore-smog-fog-travel-guide).`,
      },
      {
        h: "During and after",
        body: `10. **Tell the driver all your stops** so the route makes sense.
11. **Respect agreed hours**; late nights may cost extra.
12. **Pay as agreed in writing** and keep the receipt.

::cars toyota-yaris, toyota-corolla-altis-1-6, honda-br-v

Full prices: [rent a car Lahore price list](/blog/rent-a-car-lahore-price-list).`,
      },
    ],
    faqs: [
      { q: "Do I need a licence to rent a car with driver?", a: "No. Only self-drive rentals need a licence and deposit." },
      { q: "How early should I book?", a: "A day ahead is usually fine; for weekends, weddings and December, book a week or more ahead." },
    ],
    related: ["how-to-choose-rent-a-car-company-lahore", "documents-for-car-rental-pakistan", "rent-a-car-lahore-price-list"],
  },

  {
    slug: "lahore-ring-road-guide",
    title: "Lahore Ring Road: A Driver's Guide",
    metaTitle: "Lahore Ring Road Guide: Routes, Exits & Tips",
    description:
      "How to use the Lahore Ring Road: how it links the airport, DHA, the M-2 and the motorways, when it saves time, fog closures and tips from our drivers.",
    keywords: ["lahore ring road", "ring road lahore map", "ring road airport to thokar", "lahore ring road fog", "lahore bypass"],
    category: "Lahore",
    date: D,
    image: "/blog/intercity-highway-fog-safe-driving.jpg",
    imageAlt: "Car on a highway with lights on",
    intro: `The **Lahore Ring Road** is a signal-free loop around much of the city. It links the airport side and DHA with the M-2 at Thokar Niaz Baig and the northern side towards the Ravi and the motorways, so you can skip the city's congested roads. Our drivers use it every day.`,
    sections: [
      {
        h: "When the Ring Road saves time",
        body: `- **Airport ↔ Thokar Niaz Baig / M-2:** skip the city centre when going from the airport or DHA to the motorway
- **DHA ↔ Bahria Town:** a faster route than through the city at rush hour
- **Northern side ↔ M-11 and the GT Road:** for Sialkot and Gujranwala

::route Airport > (Ring Road) > DHA > (Ring Road) > Thokar Niaz Baig > M-2 to Islamabad`,
      },
      {
        h: "Things to know",
        body: `- It's a **tolled** road, with toll plazas along the loop.
- **Fog:** like the motorways, parts of the Ring Road can be closed or slowed by dense fog on winter nights. See the [fog guide](/blog/lahore-smog-fog-travel-guide).
- **Exits:** interchanges are far apart, so missing an exit costs time; our drivers know the right ones.`,
      },
      {
        h: "Popular trips using the Ring Road",
        body: `- [Airport to Bahria Town](/blog/rent-a-car-bahria-town-lahore)
- [DHA to Islamabad](/blog/lahore-to-islamabad-car-rental)
- [Lahore to Sialkot](/blog/lahore-to-sialkot-by-car)

::cars toyota-corolla-altis-1-6, honda-civic, toyota-fortuner`,
      },
    ],
    faqs: [
      { q: "Is the Lahore Ring Road tolled?", a: "Yes, there are toll plazas along the loop." },
      { q: "Is the Ring Road faster from the airport to the M-2?", a: "Usually yes, especially at rush hour, as it avoids city traffic." },
    ],
    related: ["rent-a-car-lahore-airport", "rent-a-car-bahria-town-lahore", "lahore-smog-fog-travel-guide"],
  },

  {
    slug: "lahore-to-mangla-jhelum-by-car",
    title: "Lahore to Jhelum and Mangla by Car",
    metaTitle: "Lahore to Jhelum & Mangla by Car: Day Trip Guide",
    description:
      "A day trip from Lahore to Jhelum and Mangla by car: the GT Road route, Mangla lake views, Rohtas Fort nearby, driving time and rates with driver.",
    keywords: ["lahore to jhelum", "lahore to mangla", "mangla dam trip", "jhelum day trip", "rohtas fort jhelum"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "Road through the hills of the Potohar region",
    intro: `**Jhelum** sits on the river of the same name, with **Mangla** and its huge reservoir just across the border in Azad Kashmir, and **Rohtas Fort** nearby. Together they make a full, varied day trip from Lahore.

::route Lahore > (GT Road, about 3 h) > Jhelum > (about 30–45 min) > Mangla`,
    sections: [
      {
        h: "What to see",
        body: `- **Rohtas Fort**, the UNESCO-listed fort of Sher Shah Suri; see [Rohtas Fort day trip](/blog/rohtas-fort-day-trip-from-lahore)
- **Mangla lake** views from Mirpur's side and the viewpoints around the reservoir
- **Jhelum riverfront** and the old cantonment

Some areas around the dam are restricted; follow local signs and instructions.`,
      },
      {
        h: "Plan your day",
        body: `::stats ~3 h = Lahore to Jhelum | 30–45 min = To Mangla | Daylight = Best for views | {{city:toyota-corolla-altis-1-6}} = Corolla intercity day

Leave early on the GT Road, which runs through busy towns (Muridke, Gujranwala, Gujrat). Return by evening, especially in fog season.`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin

For a family, the [BR-V](/fleet/honda-br-v) is a good value choice at {{city:honda-br-v}} per intercity day.`,
      },
    ],
    faqs: [
      { q: "How far is Jhelum from Lahore?", a: "About 3 hours by car on the GT Road." },
      { q: "Can I see Rohtas Fort and Mangla in one day?", a: "Yes, if you leave Lahore early." },
    ],
    related: ["rohtas-fort-day-trip-from-lahore", "lahore-to-gujranwala-by-car", "intercity-car-rental-from-lahore"],
  },

  {
    slug: "lahore-to-changa-manga",
    title: "Lahore to Changa Manga Forest: Family Day Trip",
    metaTitle: "Lahore to Changa Manga Forest: Family Day Trip",
    description:
      "Changa Manga, one of the largest planted forests in the region, is an easy family day trip from Lahore: the lake, the little train, picnics, route and car hire.",
    keywords: ["changa manga", "lahore to changa manga", "changa manga forest", "picnic spots near lahore", "day trip from lahore"],
    category: "Lahore",
    date: D,
    image: "/tours/swat.jpg",
    imageAlt: "Green trees and water on a family outing",
    intro: `**Changa Manga**, south-west of Lahore, is a vast planted forest with a lake, walking paths and a small forest train that children love. It's one of the easiest **family day trips from Lahore**.

::route Lahore > (via Raiwind or Kasur road, about 1.5 h) > Changa Manga`,
    sections: [
      {
        h: "What to do",
        body: `- **Boating** on the lake, when operating
- **The little forest train**, a family favourite
- **Picnics** under the trees
- **Walks and cycling** on the forest roads

Weekends get busy; weekdays are quieter.`,
      },
      {
        h: "Plan your trip",
        body: `::stats ~80 km = From Lahore | ~1.5 h = Each way | Weekdays = Quieter | Oct–Mar = Pleasant weather

Bring food and water. In winter, leave after the morning fog lifts. Combine with [Kasur](/blog/lahore-to-kasur-bulleh-shah) on the way back.`,
      },
      {
        h: "Car options",
        body: `::cars honda-br-v, toyota-hiace-grand-cabin, toyota-coaster-saloon

Families take a [BR-V](/fleet/honda-br-v); bigger families and schools take a [Hiace](/fleet/toyota-hiace-grand-cabin) or [Coaster](/blog/coaster-on-rent-lahore). See [school trip transport](/blog/school-trip-transport-lahore).`,
      },
    ],
    faqs: [
      { q: "How far is Changa Manga from Lahore?", a: "About 80 km, usually around 1.5 hours by car." },
      { q: "Is Changa Manga good for children?", a: "Yes. The train, lake and open spaces make it a favourite family outing." },
    ],
    related: ["things-to-do-in-lahore-with-family", "lahore-to-kasur-bulleh-shah", "school-trip-transport-lahore"],
  },

  {
    slug: "hiace-vs-coaster-which-to-rent",
    title: "Hiace vs Coaster: Which Should You Rent?",
    metaTitle: "Hiace vs Coaster: Which to Rent for Your Group",
    description:
      "Hiace or Coaster for your group? Compare seats, comfort, luggage, cost per person and road access for weddings, tours, school trips and staff transport.",
    keywords: ["hiace vs coaster", "hiace or coaster rent", "group transport lahore", "van vs coaster", "coaster rent lahore"],
    category: "Cars",
    date: D,
    image: "/blog/hiace-rental.jpg",
    imageAlt: "White van parked outside a historic monument",
    intro: `For groups, the choice is usually between the **Toyota Hiace Grand Cabin** and the **Toyota Coaster**. One seats fifteen, the other thirty. Here's how to choose.

::cars toyota-hiace-grand-cabin, toyota-coaster-saloon`,
    sections: [
      {
        h: "Side by side",
        body: `| | [Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | [Coaster Saloon](/fleet/toyota-coaster-saloon) |
| --- | --- | --- |
| Seats (incl. driver) | 15 | 30 |
| Day in Lahore | {{rate:toyota-hiace-grand-cabin}} | {{rate:toyota-coaster-saloon}} |
| Intercity day | {{city:toyota-hiace-grand-cabin}} | {{city:toyota-coaster-saloon}} |
| Narrow streets | Easier | Harder |
| Luggage | Good | More (roof and underfloor) |
| Best for | Families, small groups | Big groups, schools, staff |`,
      },
      {
        h: "Quick rule",
        body: `- **Up to 14 passengers:** Hiace
- **15–29 passengers:** one Coaster is cheaper and simpler than two Hiaces
- **Old city lanes or tight venues:** Hiace
- **Long tours with lots of luggage:** Coaster

More detail: [Coaster on rent](/blog/coaster-on-rent-lahore) and [Hiace rental](/blog/toyota-hiace-grand-cabin-rental).`,
      },
    ],
    faqs: [
      { q: "Is one Coaster cheaper than two Hiaces?", a: "Usually yes, and everyone travels together." },
      { q: "Can a Coaster go to Murree or Naran?", a: "On clear main roads, yes. Snow and narrow roads suit smaller vehicles." },
    ],
    related: ["coaster-on-rent-lahore", "school-trip-transport-lahore", "hiace-coaster-on-rent-islamabad"],
  },

  {
    slug: "corolla-vs-civic-which-to-rent",
    title: "Corolla vs Civic: Which Sedan Should You Rent?",
    metaTitle: "Corolla vs Civic: Which Sedan to Rent in Lahore",
    description:
      "Corolla or Civic for your rental? Compare price, comfort, space, fuel and image for city use, airport runs, business and motorway trips in Lahore.",
    keywords: ["corolla vs civic", "civic or corolla rent", "best sedan to rent lahore", "corolla on rent", "civic on rent"],
    category: "Cars",
    date: D,
    image: "/blog/intercity-safe-car-rental-lahore.jpg",
    imageAlt: "White Corolla with a driver",
    intro: `The **Toyota Corolla** and **Honda Civic** are Pakistan's two favourite sedans. Both are comfortable, reliable and fine on the motorway. So which should you rent?

::cars toyota-corolla-altis-1-6, toyota-corolla-grande-1-8, honda-civic`,
    sections: [
      {
        h: "Side by side",
        body: `| | [Corolla Altis](/fleet/toyota-corolla-altis-1-6) | [Corolla Grande](/fleet/toyota-corolla-grande-1-8) | [Civic](/fleet/honda-civic) |
| --- | --- | --- | --- |
| Day in Lahore | {{rate:toyota-corolla-altis-1-6}} | {{rate:toyota-corolla-grande-1-8}} | {{rate:honda-civic}} |
| Intercity day | {{city:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-grande-1-8}} | {{city:honda-civic}} |
| Month | {{month:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-grande-1-8}} | {{month:honda-civic}} |
| Feel | Practical | Comfortable | Sporty, modern |
| Image | Everyday | Executive | Smart, young |`,
      },
      {
        h: "Which to choose",
        body: `- **Budget, family use, monthly:** Corolla Altis
- **Long motorway days and guests:** Corolla Grande
- **Business meetings and a modern look:** Civic

Not sure? The [Yaris](/blog/toyota-yaris-on-rent-lahore) is cheaper still; for more room, see the [BR-V](/blog/honda-brv-on-rent-lahore). Details: [Corolla on rent](/blog/corolla-on-rent-lahore), [Civic on rent](/blog/honda-civic-on-rent-lahore).`,
      },
    ],
    faqs: [
      { q: "Which is cheaper to rent, Corolla or Civic?", a: "The Corolla Altis: {{rate:toyota-corolla-altis-1-6}} per day versus {{rate:honda-civic}} for the Civic." },
      { q: "Which is better for Lahore to Islamabad?", a: "Both are comfortable; the Grande and Civic feel more refined on long motorway drives." },
    ],
    related: ["corolla-on-rent-lahore", "honda-civic-on-rent-lahore", "fortuner-vs-prado-which-to-rent"],
  },

  {
    slug: "best-car-for-family-trip-pakistan",
    title: "Best Car for a Family Trip in Pakistan",
    metaTitle: "Best Car for a Family Trip in Pakistan (By Group Size)",
    description:
      "Which car to rent for a family trip in Pakistan: the right choice by group size, luggage and destination, from city outings to Murree, Naran and Hunza.",
    keywords: ["best car for family trip", "family car rental pakistan", "car for northern areas family", "family van rental lahore", "which car for murree trip"],
    category: "Cars",
    date: D,
    image: "/blog/northern-areas-fortuner.jpg",
    imageAlt: "SUV on a mountain road",
    intro: `The best car for a family trip depends on three things: **how many people**, **how much luggage**, and **where you're going**. Here's a simple guide.`,
    sections: [
      {
        h: "By group size",
        body: `| People | City and motorway | Mountains |
| --- | --- | --- |
| 1–3 | [Yaris](/fleet/toyota-yaris) or [Corolla](/fleet/toyota-corolla-altis-1-6) | [Fortuner](/fleet/toyota-fortuner) |
| 4 | [Corolla Grande](/fleet/toyota-corolla-grande-1-8) or [Civic](/fleet/honda-civic) | [Fortuner](/fleet/toyota-fortuner) or [Prado](/fleet/toyota-land-cruiser-prado) |
| 5–6 | [BR-V](/fleet/honda-br-v) | [Fortuner](/fleet/toyota-fortuner) or [Prado](/fleet/toyota-land-cruiser-prado) |
| 7–14 | [Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | [Hiace](/fleet/toyota-hiace-grand-cabin) on main roads |
| 15–29 | [Coaster](/fleet/toyota-coaster-saloon) | [Coaster](/fleet/toyota-coaster-saloon) on main roads |`,
      },
      {
        h: "By destination",
        body: `- **Murree in snow:** 4x4 only. See [Murree rules](/blog/murree-snow-chains-entry-rules).
- **Naran, Hunza, Skardu:** Fortuner or Prado. See [best time to visit the north](/blog/best-time-to-visit-northern-pakistan).
- **Islamabad, Faisalabad, Multan:** any sedan or the BR-V.
- **Day trips near Lahore:** BR-V or Hiace for families.

::cars honda-br-v, toyota-fortuner, toyota-hiace-grand-cabin`,
      },
    ],
    faqs: [
      { q: "What is the best car for a family of six?", a: "The Honda BR-V for city and motorway trips; the Fortuner or Prado for the mountains." },
      { q: "Is a Hiace good for northern areas?", a: "On main roads like the KKH, yes; for snow and rough tracks, use 4x4 SUVs." },
    ],
    related: ["seven-seater-car-on-rent-lahore", "fortuner-vs-prado-which-to-rent", "hiace-vs-coaster-which-to-rent"],
  },

  {
    slug: "lahore-museum-visit-guide",
    title: "Lahore Museum: Visitor Guide",
    metaTitle: "Lahore Museum Visitor Guide: What to See",
    description:
      "Visiting the Lahore Museum on Mall Road: Gandhara art and the Fasting Buddha, Mughal galleries, the Zamzama gun outside, timings advice and getting there.",
    keywords: ["lahore museum", "fasting buddha lahore", "zamzama gun", "museums in lahore", "mall road lahore"],
    category: "Lahore",
    date: D,
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Historic monument in Lahore",
    intro: `The **Lahore Museum** on Mall Road is one of the most important museums in South Asia, with treasures from the Indus Valley, Gandhara and the Mughal era. It's a must for history lovers and a great school trip.`,
    sections: [
      {
        h: "Highlights",
        body: `- **The Fasting Buddha**, a famous Gandhara sculpture
- **Gandhara gallery** of Buddhist art from the north-west
- **Indus Valley** artefacts
- **Mughal and Sikh period** paintings, manuscripts and arms
- **The Zamzama gun** outside the museum, made famous by Kipling's *Kim*

Background: [Lahore Museum](https://en.wikipedia.org/wiki/Lahore_Museum).`,
      },
      {
        h: "Plan your visit",
        body: `- Allow **two hours** for the main galleries
- Check opening days and timings before you go, as they can change
- Combine with the **National College of Arts** building next door and a walk on Mall Road

::route Lahore Museum > (10 min) > Lahore Fort & Badshahi Mosque > (walk) > Fort Road Food Street

See [Lahore Fort and Badshahi Mosque](/blog/lahore-fort-badshahi-mosque-guide).`,
      },
      {
        h: "Getting there",
        body: `Parking on Mall Road is limited; a driver drops you at the gate. For schools, see [school trip transport](/blog/school-trip-transport-lahore).

::cars toyota-corolla-altis-1-6, honda-br-v, toyota-coaster-saloon`,
      },
    ],
    faqs: [
      { q: "What is the Lahore Museum famous for?", a: "Its Gandhara collection, especially the Fasting Buddha, and Mughal-era art." },
      { q: "How long should I spend at the Lahore Museum?", a: "About two hours for the main galleries." },
    ],
    related: ["lahore-fort-badshahi-mosque-guide", "lahore-city-tour-by-car", "school-trip-transport-lahore"],
  },

  {
    slug: "jallo-park-zoo-safari-family-day",
    title: "Jallo Park and Lahore Zoo Safari: A Family Day Out",
    metaTitle: "Jallo Park & Lahore Zoo Safari: Family Day Guide",
    description:
      "Plan a family day at Jallo Park and the Lahore Zoo Safari: what kids enjoy, best times, picnic tips, and getting across the city with a car and driver.",
    keywords: ["jallo park lahore", "lahore zoo safari", "safari park lahore", "family day out lahore", "picnic spots lahore"],
    category: "Lahore",
    date: D,
    image: "/blog/hiace-rental.jpg",
    imageAlt: "Family with a van on a day out",
    intro: `For families, two of Lahore's best open-air outings are **Jallo Park** on the eastern edge of the city and the **Lahore Zoo Safari** on Raiwind Road. They are on opposite sides of Lahore, so choose one per day or plan the drive with a car and driver.`,
    sections: [
      {
        h: "Jallo Park",
        body: `- Large lawns, a botanical garden and walking paths
- Space for picnics and games
- Close to the Wagah side: you can combine it with the [Wagah border ceremony](/blog/wagah-border-ceremony-from-lahore) in the evening`,
      },
      {
        h: "Lahore Zoo Safari",
        body: `- Open enclosures and a safari-style drive-through area
- Bird aviaries and animal sections
- Good for a half day; go early on weekends

Prefer the city? The **Lahore Zoo** on Mall Road is central and easy to combine with the [Lahore Museum](/blog/lahore-museum-visit-guide).`,
      },
      {
        h: "Getting there",
        body: `::stats East = Jallo Park | South-west = Zoo Safari | 1 day = One each | {{rate:honda-br-v}} = 7-seater per day

::cars honda-br-v, toyota-fortuner, toyota-hiace-grand-cabin

More ideas: [things to do in Lahore with family](/blog/things-to-do-in-lahore-with-family).`,
      },
    ],
    faqs: [
      { q: "Can we visit Jallo Park and the Zoo Safari in one day?", a: "It's possible with a car, but they're on opposite sides of Lahore; one per day is more relaxed." },
      { q: "Which is better for small children?", a: "Both are good; the Zoo Safari has more animals, Jallo has more open space for play." },
    ],
    related: ["things-to-do-in-lahore-with-family", "wagah-border-ceremony-from-lahore", "lahore-museum-visit-guide"],
  },

  {
    slug: "lahore-religious-sites-tour",
    title: "Religious and Spiritual Sites of Lahore: A Day Tour",
    metaTitle: "Lahore Religious Sites Tour: Mosques, Shrines & More",
    description:
      "A respectful day tour of Lahore's religious and spiritual sites: Data Darbar, Badshahi and Wazir Khan mosques, Gurdwara Dera Sahib, cathedrals and more.",
    keywords: ["religious places in lahore", "data darbar", "wazir khan mosque", "lahore shrines", "spiritual tour lahore"],
    category: "Lahore",
    date: D,
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Badshahi Mosque at sunset",
    intro: `Lahore has been a spiritual centre for a thousand years. In one day with a car and driver you can visit some of its most important **mosques, shrines, gurdwaras and churches**, respectfully and without parking stress.

::route Data Darbar > (10 min) > Badshahi Mosque > (walk) > Gurdwara Dera Sahib > (15 min) > Wazir Khan Mosque > (20 min) > Cathedral, Mall Road`,
    sections: [
      {
        h: "Sites to visit",
        body: `- **Data Darbar**, the shrine of Ali Hujwiri (Data Ganj Bakhsh), one of the most visited shrines in South Asia
- **Badshahi Mosque**, see [Lahore Fort and Badshahi Mosque](/blog/lahore-fort-badshahi-mosque-guide)
- **Gurdwara Dera Sahib**, beside the fort, linked to Guru Arjan Dev
- **Wazir Khan Mosque**, famous for its tile work, in the Walled City
- **Cathedral Church of the Resurrection** on Mall Road and **Sacred Heart Cathedral** on Lawrence Road

Background: [Wazir Khan Mosque](https://en.wikipedia.org/wiki/Wazir_Khan_Mosque).`,
      },
      {
        h: "Etiquette",
        body: `- Dress modestly; women should carry a scarf
- Remove shoes where required
- Ask before photographing worshippers
- Avoid sightseeing during prayer times

For Sikh sites outside Lahore, see [Sikh heritage sites](/blog/sikh-heritage-sites-pakistan-by-car) and [Nankana Sahib](/blog/lahore-to-nankana-sahib-by-car). For Kasur, see [Bulleh Shah's shrine](/blog/lahore-to-kasur-bulleh-shah).`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-hiace-grand-cabin

The Walled City has narrow lanes; the driver drops you at the nearest point and waits. A day with driver starts at {{rate:toyota-yaris}}.`,
      },
    ],
    faqs: [
      { q: "Can non-Muslims visit Lahore's mosques?", a: "Yes, outside prayer times, with modest dress and respectful behaviour." },
      { q: "How long does a religious sites tour take?", a: "A full day covers the main sites comfortably." },
    ],
    related: ["lahore-fort-badshahi-mosque-guide", "sikh-heritage-sites-pakistan-by-car", "christmas-in-lahore-guide"],
  },

  {
    slug: "islamabad-airport-car-rental",
    title: "Islamabad Airport Car Rental: Pickup and Drop",
    metaTitle: "Islamabad Airport Car Rental: Pickup, Drop & Rates",
    description:
      "Car rental at Islamabad International Airport with driver: arrivals pickup, drops, onward trips to Murree, Lahore or the north, rates and booking tips.",
    keywords: ["islamabad airport car rental", "islamabad airport pickup", "islamabad airport taxi", "isb airport drop", "car from islamabad airport"],
    category: "Rent a car",
    date: D,
    image: "/categories/airport.jpg",
    imageAlt: "Car waiting outside an airport terminal",
    intro: `Flying into **Islamabad International Airport**? Our driver meets you at arrivals and takes you anywhere: home in Islamabad or Rawalpindi, straight to Murree, or all the way to Lahore.

::stats 30–45 min = To central Islamabad | 60 min = Free waiting | 24/7 = Pickups | 5–5.5 h = To Lahore`,
    sections: [
      {
        h: "Where to",
        body: `| Destination | Typical time | Guide |
| --- | --- | --- |
| Islamabad sectors | 30–45 min | [Rent a car in Islamabad](/blog/rent-a-car-islamabad) |
| Rawalpindi | 40–60 min | [Rent a car in Rawalpindi](/blog/rent-a-car-rawalpindi) |
| Murree | 2–2.5 h | [Murree day trip from Islamabad](/blog/murree-day-trip-from-islamabad) |
| Lahore | 5–5.5 h | [Islamabad airport to Lahore](/blog/islamabad-airport-to-lahore-car) |`,
      },
      {
        h: "Cars and rates",
        body: `| Car | Seats | Day | Intercity day |
| --- | --- | --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{rate:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-altis-1-6}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{rate:toyota-fortuner}} | {{city:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | 7 | {{rate:toyota-land-cruiser-prado}} | {{city:toyota-land-cruiser-prado}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |

One-way airport transfers inside Islamabad are quoted per trip.

::cars toyota-corolla-altis-1-6, toyota-fortuner, toyota-hiace-grand-cabin`,
      },
    ],
    faqs: [
      { q: "Do you pick up from Islamabad airport at night?", a: "Yes, 24 hours a day, tracking your flight." },
      { q: "Can I go straight from Islamabad airport to Murree?", a: "Yes. In snow season, book a 4x4 and a hotel in advance." },
    ],
    related: ["islamabad-airport-to-lahore-car", "rent-a-car-islamabad", "murree-day-trip-from-islamabad"],
  },

  {
    slug: "murree-day-trip-from-islamabad",
    title: "Murree Day Trip from Islamabad by Car",
    metaTitle: "Murree Day Trip from Islamabad: Route & Car Hire",
    description:
      "Plan a Murree day trip from Islamabad by car: the Murree Expressway, Mall Road, Patriata chairlift, Pindi Point, winter rules and car with driver rates.",
    keywords: ["murree day trip from islamabad", "islamabad to murree by car", "murree trip", "patriata chairlift", "murree mall road"],
    category: "Routes",
    date: D,
    image: "/blog/northern-areas-fortuner.jpg",
    imageAlt: "SUV on a mountain road",
    intro: `Murree is close enough to Islamabad for an easy **day trip by car**: up the Murree Expressway in the morning, a walk on Mall Road, the chairlift at Patriata, and back before dark.

::route Islamabad > (Murree Expressway, 1.5–2 h) > Murree Mall Road > (45 min) > Patriata > (2 h) > Islamabad`,
    sections: [
      {
        h: "What to do in a day",
        body: `- **Mall Road** for food, shopping and views
- **Pindi Point** and **Kashmir Point** viewpoints
- **Patriata (New Murree)** chairlift and cable car
- **Nathia Gali** if you have time; see [Nathia Gali and Ayubia](/blog/lahore-to-nathia-gali-ayubia)`,
      },
      {
        h: "Winter rules",
        body: `In heavy snow, vehicles without chains have been stopped from entering, and during snow spells entry has been limited to tourists with confirmed hotel bookings. Day trips are the first to be affected. Read [Murree snow chains and entry rules](/blog/murree-snow-chains-entry-rules) before a winter day trip.

::stats 1.5–2 h = Each way | 15 Dec–15 Feb = Winter season | Chains = In heavy snow | Daylight = Return before dark`,
      },
      {
        h: "Car and rates",
        body: `::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-corolla-altis-1-6

| Car | Day rate |
| --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} |

From Lahore, see [Lahore to Murree by car](/blog/lahore-to-murree-by-car-snowfall).`,
      },
    ],
    faqs: [
      { q: "How long does Islamabad to Murree take?", a: "About 1.5 to 2 hours by the Murree Expressway in normal traffic." },
      { q: "Can we do Murree as a day trip in winter?", a: "Yes on clear days, but during heavy snow, entry may be restricted to tourists with hotel bookings." },
    ],
    related: ["murree-snow-chains-entry-rules", "lahore-to-murree-by-car-snowfall", "prado-on-rent-islamabad"],
  },

  {
    slug: "lahore-to-taxila-hasan-abdal",
    title: "Lahore to Taxila and Hasan Abdal by Car",
    metaTitle: "Lahore to Taxila & Hasan Abdal: Day Trip Guide",
    description:
      "A history trip from Lahore to Taxila and Hasan Abdal: the Taxila Museum and Gandhara ruins, Gurdwara Panja Sahib, route via the M-2, timing and car hire.",
    keywords: ["lahore to taxila", "taxila museum", "hasan abdal panja sahib", "gandhara sites pakistan", "taxila trip by car"],
    category: "Routes",
    date: D,
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "Motorway through hills on the way north",
    intro: `**Taxila**, a UNESCO World Heritage Site, was one of the great cities of the ancient world and a centre of Gandhara civilisation. Nearby **Hasan Abdal** is home to **Gurdwara Panja Sahib**. Together they make a rich history trip from Lahore.

::route Lahore > (M-2, about 4.5 h) > Islamabad > (about 45 min) > Taxila > (about 20 min) > Hasan Abdal`,
    sections: [
      {
        h: "What to see",
        body: `- **Taxila Museum**, with Gandhara sculpture, coins and jewellery
- **Archaeological sites:** Dharmarajika stupa, Sirkap and Jaulian monastery
- **Gurdwara Panja Sahib**, Hasan Abdal, famous for the handprint on the rock; see [Sikh heritage sites](/blog/sikh-heritage-sites-pakistan-by-car)

Background: [Taxila](https://en.wikipedia.org/wiki/Taxila).`,
      },
      {
        h: "Plan your trip",
        body: `::stats ~5.5 h = Lahore to Taxila | UNESCO = World Heritage | 2 days = Relaxed trip | Oct–Mar = Best weather

It's a long day from Lahore; most people stay a night in Islamabad and visit Taxila the next morning. Check museum opening days before you go.`,
      },
      {
        h: "Car options",
        body: `::cars toyota-corolla-altis-1-6, honda-br-v, toyota-coaster-saloon

Families take a Corolla or BR-V; schools take a [Coaster](/blog/coaster-on-rent-lahore). Intercity days start at {{city:toyota-corolla-altis-1-6}} for a Corolla.`,
      },
    ],
    faqs: [
      { q: "How far is Taxila from Lahore?", a: "About 5.5 hours by car via the M-2 and Islamabad." },
      { q: "Is Taxila a UNESCO site?", a: "Yes, Taxila is a UNESCO World Heritage Site." },
    ],
    related: ["sikh-heritage-sites-pakistan-by-car", "harappa-day-trip-from-lahore", "rent-a-car-islamabad"],
  },
];

export default part16;
