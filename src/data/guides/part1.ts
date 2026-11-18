/**
 * part1.ts — "rent a car" keyword guides: airport, DHA, Johar Town,
 * Gulberg, Model Town, self drive.
 */

import type { Guide } from "./types";

const part1: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-lahore-airport",
    title: "Rent a Car at Lahore Airport: Pickup, Drop and Rates",
    metaTitle: "Rent a Car Lahore Airport: Pickup & Drop with Driver",
    description:
      "Rent a car at Allama Iqbal International Airport Lahore with a driver who meets you at arrivals. Rates, waiting time, flight tracking and booking steps.",
    keywords: [
      "rent a car lahore airport",
      "lahore airport pick and drop",
      "allama iqbal airport car rental",
      "airport transfer lahore",
      "car hire lahore airport",
    ],
    category: "Rent a car",
    date: "2026-11-18",
    image: "/categories/airport.jpg",
    imageAlt: "Chauffeur meeting a passenger with a black Mercedes outside Lahore airport arrivals",
    intro: `Landing at **Allama Iqbal International Airport (LHE)** after a long flight, the last thing you want is to haggle with taxi drivers in the car park. When you **rent a car at Lahore airport** with Iris Tours, a driver is already waiting at arrivals with your name on a board, and the car is booked at a fixed price before you take off.

This guide explains how airport pickups and drops work, what they cost, and how to book one in a few minutes on WhatsApp.`,
    sections: [
      {
        h: "How a Lahore airport pickup works",
        body: `1. **Send your flight details** on WhatsApp: flight number, date, number of passengers and bags, and where you are going.
2. **We confirm the car and price in writing**, along with the driver's name and mobile number.
3. **The driver tracks your flight**, so an early or delayed landing is not a problem.
4. **Meet at arrivals.** The driver waits outside the arrivals hall with a name board and helps with your luggage.
5. **Door to door.** You are driven straight to your home, hotel or office in Lahore, or onward to another city.

> Waiting time is free for the first 60 minutes after landing, which is usually enough for immigration and baggage.

::stats 60 min = Free waiting after landing | 24/7 = Pickups and drops | LHE = Allama Iqbal International | 15–25 min = Airport to DHA Phase 5`,
      },
      {
        h: "Airport car rental rates in Lahore",
        body: `Airport transfers are priced per trip, and full-day bookings use our normal daily rates. These are the starting daily rates with driver inside Lahore:

| Car | Seats | Day rate with driver |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{rate:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{rate:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | 5 | {{rate:honda-civic}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{rate:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | 7 | {{rate:toyota-land-cruiser-prado}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} |

A one-way airport drop or pickup inside the city is quoted separately and costs less than a full day. Send us your pickup point for the exact figure. See all options on the [airport transfer page](/services/airport-transfer).`,
      },
      {
        h: "Which car to book for the airport",
        body: `The right car depends on luggage more than on passengers:

- **One or two people with two suitcases:** a [Corolla](/fleet/toyota-corolla-altis-1-6) or [Civic](/fleet/honda-civic) is comfortable and economical.
- **A family with four or more large bags:** book an SUV such as the [Fortuner](/fleet/toyota-fortuner) or [Prado](/fleet/toyota-land-cruiser-prado). Sedan boots fill up quickly with overseas luggage.
- **Groups and wedding guests:** a [Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) takes up to 14 passengers, or book a [Coaster](/fleet/toyota-coaster-saloon) for larger groups.
- **VIP arrivals:** a [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) or [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) makes the right impression for business guests.

::cars toyota-corolla-altis-1-6, toyota-fortuner, toyota-hiace-grand-cabin`,
      },
      {
        h: "Travel times from Lahore airport",
        body: `The airport sits on the eastern side of Lahore, close to DHA and Cantt. Typical driving times outside rush hour:

- [DHA Phase 5](/areas/dha-phase-5-lahore) and [DHA Phase 6](/areas/dha-phase-6-lahore): 15–25 minutes
- [Lahore Cantt](/areas/lahore-cantt-lahore): 10–20 minutes
- [Gulberg III](/areas/gulberg-iii-lahore): 25–40 minutes
- [Johar Town](/areas/johar-town-block-a-lahore) and [Model Town](/areas/model-town-block-c-lahore): 35–50 minutes
- [Bahria Town](/areas/bahria-town-sector-c-lahore): 50–70 minutes

During smog and fog season, early-morning flights are often delayed, so allow extra time for drops and check your flight status before leaving. Our [smog and fog travel guide](/blog/lahore-smog-fog-travel-guide) explains what to expect.

![Chauffeur opening the car door for a traveller at Lahore airport](/blog/lahore-airport-car-rental-service.jpg "Our driver waits outside arrivals at Allama Iqbal International Airport.")`,
      },
      {
        h: "Airport to another city",
        body: `Many travellers land in Lahore but live elsewhere. We drive directly from the airport to [Islamabad](/blog/lahore-to-islamabad-car-rental), Faisalabad, Sialkot, Multan and Gujranwala. Intercity trips use the intercity day rate, which starts at {{city:toyota-corolla-altis-1-6}} for a Corolla. Read our [intercity car rental guide](/blog/intercity-car-rental-from-lahore) for routes and times.

For background on the airport itself, including terminals and airlines, see the [Allama Iqbal International Airport](https://en.wikipedia.org/wiki/Allama_Iqbal_International_Airport) page.`,
      },
    ],
    faqs: [
      {
        q: "How much is a car from Lahore airport to DHA?",
        a: "A one-way pickup from the airport to DHA in a sedan costs less than a full day rate. Send your flight time and address on WhatsApp and we reply with the exact price before you book.",
      },
      {
        q: "What happens if my flight is delayed?",
        a: "The driver tracks your flight number, so a delay does not count against your waiting time. The first 60 minutes after the actual landing are free.",
      },
      {
        q: "Can you pick me up at night?",
        a: "Yes. We run airport pickups and drops 24 hours a day, including early-morning international arrivals.",
      },
      {
        q: "Do you also pick up from Islamabad airport?",
        a: "Yes, we cover Islamabad International Airport as well. See our [Islamabad car rental guide](/blog/rent-a-car-islamabad).",
      },
    ],
    related: ["car-rental-overseas-pakistanis-lahore", "rent-a-car-dha-lahore", "rent-a-car-lahore-price-list"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-dha-lahore",
    title: "Rent a Car in DHA Lahore with Driver",
    metaTitle: "Rent a Car in DHA Lahore with Driver: Rates & Booking",
    description:
      "Rent a car in DHA Lahore, Phase 1 to Phase 9, with doorstep pickup and a trained driver. Daily, weekly and monthly rates for sedans, SUVs and luxury cars.",
    keywords: ["rent a car dha lahore", "car rental dha lahore", "rent a car dha phase 6", "rent a car dha phase 5", "dha lahore car with driver"],
    category: "Rent a car",
    date: "2026-11-17",
    image: "/blog/fortuner-rental.jpg",
    imageAlt: "White Toyota Fortuner outside a modern house in DHA Lahore",
    intro: `DHA is where much of Lahore's business, shopping and social life now happens, and it is also where most of our bookings start. If you need to **rent a car in DHA Lahore**, we deliver the car and driver to your gate in any phase, from Phase 1 near Cantt to Phase 9 Prism on the ring road.

Here is what DHA residents and visitors usually book, what it costs, and how to get the best value.`,
    sections: [
      {
        h: "DHA phases we cover",
        body: `We pick up from every phase of DHA Lahore, including:

- [DHA Phase 1](/areas/dha-phase-1-lahore), [Phase 2](/areas/dha-phase-2-lahore) and [Phase 3](/areas/dha-phase-3-lahore), close to Cantt and Walton
- [DHA Phase 4](/areas/dha-phase-4-lahore) and [Phase 5](/areas/dha-phase-5-lahore), around the main commercial areas
- [DHA Phase 6](/areas/dha-phase-6-lahore) and [Phase 7](/areas/dha-phase-7-lahore), including Raya and the newer blocks
- [DHA Phase 8](/areas/dha-phase-8-lahore), the closest phase to the airport
- [DHA Phase 9](/areas/dha-phase-9-lahore) and the Prism area

Because DHA is next to [Allama Iqbal International Airport](/blog/rent-a-car-lahore-airport), airport pickups from most phases take under half an hour.

![Toyota Prado and Mercedes on a wide boulevard at sunset](/blog/rent-a-car-in-lahore-featured.jpg "Wide DHA boulevards make for quick pickups from any phase.")`,
      },
      {
        h: "Car rental rates in DHA Lahore",
        body: `DHA bookings use the same city rates as the rest of Lahore. No extra charge for pickup inside DHA.

| Car | Day with driver | Week | Month |
| --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | {{rate:toyota-yaris}} | {{week:toyota-yaris}} | {{month:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{week:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} | {{week:honda-civic}} | {{month:honda-civic}} |
| [Kia Sportage](/fleet/kia-sportage) | {{rate:kia-sportage}} | {{week:kia-sportage}} | {{month:kia-sportage}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} | {{week:toyota-fortuner}} | {{month:toyota-fortuner}} |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | {{rate:toyota-land-cruiser-v8}} | {{week:toyota-land-cruiser-v8}} | {{month:toyota-land-cruiser-v8}} |

For longer stays, the [monthly car rental guide](/blog/monthly-car-rental-lahore) explains how the weekly and monthly packages work.`,
      },
      {
        h: "What DHA customers book most",
        body: `### Weddings and events
DHA hosts a large share of Lahore's wedding functions in marquees and farmhouses along the ring road. Families book a decorated [Mercedes or Audi](/blog/mercedes-on-rent-lahore) for the couple and a [Hiace](/fleet/toyota-hiace-grand-cabin) or [Coaster](/blog/coaster-on-rent-lahore) for guests. See our [wedding car guide](/blog/wedding-car-rental-lahore-shaadi-season).

### Visiting family from abroad
Overseas Pakistanis staying in DHA for a few weeks usually take a sedan on a weekly or monthly package. Read the [overseas Pakistanis guide](/blog/car-rental-overseas-pakistanis-lahore).

### Business travel
Companies with offices on the DHA commercial boulevards book executive sedans by the day or month through our [corporate rentals](/services/corporate-rentals) service.

::cars mercedes-benz-c-class-c180, toyota-land-cruiser-prado, toyota-corolla-grande-1-8`,
      },
      {
        h: "Tips for booking in DHA",
        body: `- **Share the exact block and house number.** DHA phases are large, and gate entry is quicker when the guard has the address.
- **Book wedding-season dates early.** From November to February, SUVs and luxury cars are often booked out on Fridays and Saturdays.
- **Plan around school traffic.** Roads near DHA schools are slow between 7:00–8:00 and 1:00–2:30 on weekdays.
- **Keep the driver's number handy.** You will receive it on WhatsApp once the booking is confirmed.`,
      },
    ],
    faqs: [
      {
        q: "Do you charge extra for pickup in DHA Phase 9 or Prism?",
        a: "No. Pickup anywhere in DHA Lahore is included in the city rate.",
      },
      {
        q: "Can I rent a car in DHA without a driver?",
        a: "Self-drive is available for standard cars with a refundable security deposit and your CNIC and licence. See the [self-drive guide](/blog/self-drive-car-rental-lahore).",
      },
      {
        q: "How quickly can a car reach DHA?",
        a: "With a few hours' notice we can usually send a car the same day. For weddings and weekends, book a few days ahead.",
      },
    ],
    related: ["rent-a-car-bahria-town-dha-lahore", "rent-a-car-gulberg-lahore", "wedding-car-rental-lahore-shaadi-season"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-johar-town-lahore",
    title: "Rent a Car in Johar Town Lahore",
    metaTitle: "Rent a Car in Johar Town Lahore with Driver",
    description:
      "Rent a car in Johar Town Lahore with doorstep pickup from any block. Sedans from Rs. 7,000/day, SUVs and vans for families, students and events.",
    keywords: ["rent a car johar town", "rent a car johar town lahore", "car rental johar town", "rent a car near expo centre lahore"],
    category: "Rent a car",
    date: "2026-11-16",
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
    imageAlt: "Iris Tours rental cars lined up in Lahore",
    intro: `Johar Town is one of Lahore's busiest residential areas, home to families, students, hospitals and the Expo Centre. When you **rent a car in Johar Town**, our driver comes to your block, whether you are in Block A near Canal Road or the newer blocks off the Khayaban-e-Firdousi.

This guide covers rates, the most popular cars for Johar Town families, and travel times to the places you are most likely to go.`,
    sections: [
      {
        h: "Blocks we pick up from",
        body: `We cover every block, including [Block A](/areas/johar-town-block-a-lahore), [Block B](/areas/johar-town-block-b-lahore), [Block D](/areas/johar-town-block-d-lahore), [Block G](/areas/johar-town-block-g-lahore), [Block J](/areas/johar-town-block-j-lahore) and [Block R](/areas/johar-town-block-r-lahore), plus nearby Wapda Town, Valencia and Township. See [all 200 areas](/areas).`,
      },
      {
        h: "Johar Town car rental rates",
        body: `| Car | Best for | Day with driver |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | City errands, 1–4 people | {{rate:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | Families, intercity | {{rate:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 6–7 people on a budget | {{rate:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | Families, northern trips | {{rate:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | Groups up to 14 | {{rate:toyota-hiace-grand-cabin}} |

The [Honda BR-V](/fleet/honda-br-v) is a favourite in Johar Town: seven seats at sedan prices, ideal for a family day out or a trip to the airport with relatives.

::cars honda-br-v, toyota-yaris, toyota-hiace-grand-cabin`,
      },
      {
        h: "Common trips from Johar Town",
        body: `- **Expo Centre Lahore:** for exhibitions and trade shows, a driver saves you the parking queue. Usually 5–15 minutes.
- **Hospitals:** for appointments at Shaukat Khanum, Jinnah or the hospitals on Ferozepur Road, a car with driver waits while you are inside.
- **Airport:** 35–50 minutes depending on traffic. See [Lahore airport pickup and drop](/blog/rent-a-car-lahore-airport).
- **Motorway to Islamabad:** Johar Town is close to the M-2 entry at Thokar Niaz Baig, so you can be on the motorway in minutes. Read the [Lahore to Islamabad guide](/blog/lahore-to-islamabad-car-rental).
- **Day trips:** the [Khewra Salt Mine and Katas Raj](/blog/khewra-salt-mine-katas-raj-day-trip) are an easy day out via the motorway.

::route Johar Town > (10 min) > Thokar Niaz Baig > (M-2, about 4.5 h) > Islamabad

![Motorway winding through the Salt Range hills](/blog/lahore-islamabad-motorway-salt-range.jpg "The M-2 motorway through the Salt Range, on the way to Islamabad.")`,
      },
      {
        h: "How to book",
        body: `Send your block, date and the car you want on WhatsApp. We confirm availability, the final price and the driver's details in writing. Payment is made in cash or bank transfer; our account details are on the [contact page](/contact).

> Booking for a wedding in Johar Town marquees? Reserve SUVs and vans at least a week ahead between November and February.`,
      },
    ],
    faqs: [
      { q: "Is pickup in Johar Town free?", a: "Yes. Pickup and drop anywhere in Johar Town are included in the Lahore city rate." },
      {
        q: "Which is the cheapest car to rent in Johar Town?",
        a: "The [Toyota Yaris](/fleet/toyota-yaris) at {{rate:toyota-yaris}} per day with driver is our most economical option.",
      },
      {
        q: "Can students rent a car monthly?",
        a: "Yes. Monthly packages start at {{month:toyota-yaris}} for a Yaris. See the [monthly car rental guide](/blog/monthly-car-rental-lahore).",
      },
    ],
    related: ["rent-a-car-model-town-lahore", "rent-a-car-lahore-price-list", "monthly-car-rental-lahore"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-gulberg-lahore",
    title: "Rent a Car in Gulberg Lahore for Business and Events",
    metaTitle: "Rent a Car in Gulberg Lahore: Executive Cars with Driver",
    description:
      "Rent a car in Gulberg Lahore with a professional driver. Executive sedans, SUVs and luxury cars for meetings, hotels, MM Alam Road dinners and events.",
    keywords: ["rent a car gulberg lahore", "car rental gulberg", "rent a car mm alam road", "executive car rental lahore", "hotel car rental lahore"],
    category: "Rent a car",
    date: "2026-11-15",
    image: "/categories/corporate.jpg",
    imageAlt: "Executive car with driver outside an office tower in Gulberg, Lahore",
    intro: `Gulberg is Lahore's business and hotel district: Main Boulevard offices, MM Alam Road restaurants and the city's international hotels. If you **rent a car in Gulberg**, you usually need it for meetings, client dinners or guests staying at a hotel, so the car and driver need to look the part.

Here is how executive car rental works in Gulberg and what it costs.`,
    sections: [
      {
        h: "Where we pick up in Gulberg",
        body: `We cover [Gulberg I](/areas/gulberg-i-lahore), [Gulberg II](/areas/gulberg-ii-lahore), [Gulberg III](/areas/gulberg-iii-lahore) and [Main Boulevard Gulberg](/areas/main-boulevard-gulberg-lahore), as well as the hotels around Liberty, Mall Road and the Canal. Drivers can wait in hotel car parks, which avoids the street-parking problem on MM Alam Road.`,
      },
      {
        h: "Executive cars and rates",
        body: `| Car | Impression | Day with driver |
| --- | --- | --- |
| [Honda Civic](/fleet/honda-civic) | Smart, modern sedan | {{rate:honda-civic}} |
| [Toyota Corolla Grande](/fleet/toyota-corolla-grande-1-8) | Reliable executive sedan | {{rate:toyota-corolla-grande-1-8}} |
| [Haval H6](/fleet/haval-h6) | Premium crossover | {{rate:haval-h6}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | Senior management SUV | {{rate:toyota-land-cruiser-prado}} |
| [Audi A6](/fleet/audi-a6) | Luxury sedan | {{rate:audi-a6}} |
| [Mercedes C-Class](/fleet/mercedes-benz-c-class-c180) | Luxury sedan | {{rate:mercedes-benz-c-class-c180}} |

Companies with regular needs can open a monthly account through [corporate rentals](/services/corporate-rentals), with one invoice at the end of the month.

::cars honda-civic, audi-a6, toyota-land-cruiser-prado`,
      },
      {
        h: "Good to know for Gulberg bookings",
        body: `- **Evening traffic:** Main Boulevard and MM Alam Road slow down sharply after 7 pm and on weekends. Leave 15 extra minutes for dinners and events.
- **Smog advisories:** in November, the Punjab government has at times ordered markets and restaurants to close early during severe smog. Check the latest notice before planning a late evening. More in our [smog travel guide](/blog/lahore-smog-fog-travel-guide).
- **Hotel guests:** if you are hosting visitors, we can meet them at the [airport](/blog/rent-a-car-lahore-airport) and stay with them for the whole visit.
- **Sightseeing between meetings:** the Walled City and Badshahi Mosque are 20–30 minutes away. See our [Lahore city tour by car](/blog/lahore-city-tour-by-car).

![Uniformed chauffeur opening the door of a black Mercedes](/blog/chauffeur-rental.jpg "A chauffeur-driven car removes the parking problem on MM Alam Road.")`,
      },
    ],
    faqs: [
      {
        q: "Can the driver wait during a long meeting?",
        a: "Yes. A daily booking includes waiting time, so the driver stays with the car until you are ready.",
      },
      {
        q: "Do you provide cars for foreign delegations?",
        a: "Yes. We regularly look after foreign guests with English-speaking drivers. See [car rental in Lahore for foreigners](/blog/car-rental-lahore-for-foreigners).",
      },
      {
        q: "Can I get an invoice for my company?",
        a: "Yes. We issue invoices for every booking, and monthly billing is available for corporate accounts.",
      },
    ],
    related: ["mercedes-on-rent-lahore", "rent-a-car-dha-lahore", "car-rental-lahore-for-foreigners"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-model-town-lahore",
    title: "Rent a Car in Model Town Lahore",
    metaTitle: "Rent a Car in Model Town Lahore with Driver",
    description:
      "Rent a car in Model Town Lahore, every block from A to S and the Extension, with doorstep pickup. Rates for sedans, 7-seaters, SUVs and vans.",
    keywords: ["rent a car model town lahore", "car rental model town", "rent a car model town extension", "rent a car faisal town lahore"],
    category: "Rent a car",
    date: "2026-11-14",
    image: "/categories/about_fleet.jpg",
    imageAlt: "Iris Tours cars ready for pickup in Lahore",
    intro: `Model Town is one of Lahore's oldest planned neighbourhoods, with wide green blocks, Model Town Park and quick access to Ferozepur Road. To **rent a car in Model Town**, send us your block and date and a car with driver will reach your gate.

Below are rates, the cars Model Town families book most, and the trips people make from here.`,
    sections: [
      {
        h: "Model Town blocks and nearby areas",
        body: `We pick up from all blocks, for example [Block A](/areas/model-town-block-a-lahore), [Block C](/areas/model-town-block-c-lahore), [Block G](/areas/model-town-block-g-lahore), [Block K](/areas/model-town-block-k-lahore) and the [Model Town Extension](/areas/model-town-block-extension-lahore), plus Faisal Town, Garden Town and Township nearby.`,
      },
      {
        h: "Rates for Model Town",
        body: `| Car | Seats | Day with driver | Intercity day |
| --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{rate:toyota-yaris}} | {{city:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{rate:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{rate:honda-br-v}} | {{city:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{rate:toyota-fortuner}} | {{city:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |

The intercity rate applies when you travel to another city such as Islamabad, Faisalabad or Sialkot.

::cars honda-br-v, toyota-corolla-altis-1-6, toyota-hiace-grand-cabin`,
      },
      {
        h: "Popular trips from Model Town",
        body: `- **Family functions:** a [Hiace](/fleet/toyota-hiace-grand-cabin) moves the whole family to a wedding or dinner in one trip, with no parking stress.
- **Kartarpur:** Model Town is a good starting point for the 2.5-hour drive to Gurdwara Darbar Sahib. See [Lahore to Kartarpur by car](/blog/lahore-to-kartarpur-by-car).
- **Wagah border:** the flag ceremony is an easy evening trip. See [Wagah border ceremony from Lahore](/blog/wagah-border-ceremony-from-lahore).
- **Weekend in the hills:** the [Lahore to Murree guide](/blog/lahore-to-murree-by-car-snowfall) covers the snowfall season.

![Family beside a white van outside a Mughal monument](/blog/hiace-rental.jpg "A van keeps the whole family together for functions and day trips.")`,
      },
    ],
    faqs: [
      { q: "Is the 7-seater BR-V available for intercity trips?", a: "Yes, at the intercity rate of {{city:honda-br-v}} per day with driver." },
      { q: "Can I book for just a few hours?", a: "Short trips such as airport drops are quoted separately. Send the details on WhatsApp for a price." },
    ],
    related: ["rent-a-car-johar-town-lahore", "lahore-to-kartarpur-by-car", "rent-a-car-lahore-price-list"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "self-drive-car-rental-lahore",
    title: "Self Drive Car Rental in Lahore: Rules, Deposit and Rates",
    metaTitle: "Self Drive Rent a Car Lahore: Deposit, Documents & Rates",
    description:
      "Thinking of a self drive car rental in Lahore? Documents you need, security deposits, age rules, fuel policy, and when a car with driver is the better choice.",
    keywords: ["self drive car rental lahore", "rent a car without driver lahore", "self drive rent a car", "car rental lahore without driver", "security deposit car rental"],
    category: "Rent a car",
    date: "2026-11-13",
    image: "/blog/lahore-to-kpk-motorway-travel.jpg",
    imageAlt: "Corolla and Prado on a Punjab motorway at sunset",
    intro: `Many people search for a **self drive car rental in Lahore** because they want privacy and freedom. We offer self-drive on standard cars, but it comes with rules, a refundable deposit and responsibility for the car. This guide explains exactly what is needed, and when booking a car **with a driver** actually works out better.`,
    sections: [
      {
        h: "Documents you need",
        body: `- **Pakistani citizens:** original CNIC and a valid Pakistani driving licence held for at least one year.
- **Overseas Pakistanis and foreigners:** passport, plus an International Driving Permit or a licence we can verify.
- **Minimum age:** 21 years. Luxury cars may require an older driver and more driving experience.
- **A local contact number** that you will answer during the rental.

We may also ask for a utility bill or a reference for first-time customers.`,
      },
      {
        h: "Security deposit and payment",
        body: `A refundable security deposit is required for every self-drive rental. It depends on the car, for example:

| Car | Day rate | Refundable deposit |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | {{rate:toyota-yaris}} | {{deposit:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{deposit:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} | {{deposit:honda-civic}} |

Rates shown are our standard daily rates; self-drive pricing is confirmed with your booking. The deposit is returned when the car comes back in the same condition, with the same fuel level.

::cars toyota-yaris, toyota-corolla-altis-1-6, honda-civic`,
      },
      {
        h: "Rules for self-drive",
        body: `- **Fuel:** the car is handed over with a full tank and must be returned full. Check today's prices on our [fuel prices page](/fuel-prices-pakistan).
- **Mileage:** unlimited inside the city; a daily kilometre allowance applies on intercity trips.
- **Fines and tolls:** traffic challans, motorway fines and tolls during the rental are your responsibility. The [National Highways & Motorway Police](https://nhmp.gov.pk) publishes current motorway rules.
- **No off-road or northern areas** on self-drive. Mountain routes are only available with our own trained drivers.
- **Damage:** any damage is deducted from the deposit, so photograph the car with the driver at handover.`,
      },
      {
        h: "Self drive or with driver: which is better?",
        body: `For many trips, a car **with driver** costs less in practice than it seems:

- **No deposit** is needed for chauffeur-driven bookings.
- **No parking problems** at hospitals, markets or wedding halls.
- **No risk of fines or damage** charges.
- **Safer in fog and smog season**, when visibility on the motorway drops suddenly. See our [smog and fog guide](/blog/lahore-smog-fog-travel-guide).
- **Essential on mountain roads** to [Naran](/blog/lahore-to-naran-kaghan-by-car), [Hunza](/blog/lahore-to-hunza-by-road) or [Skardu](/blog/lahore-to-skardu-by-road).

If you are visiting from abroad and don't know Lahore's traffic, we strongly suggest a driver for at least the first few days.

![Car driving with headlights on through fog on a Punjab highway](/blog/intercity-highway-fog-safe-driving.jpg "Winter fog is one of the best reasons to let an experienced driver take the wheel.")`,
      },
    ],
    faqs: [
      {
        q: "Can I take a self-drive car to Islamabad?",
        a: "Yes, on the motorway, with the intercity kilometre allowance. Northern areas are not allowed on self-drive.",
      },
      {
        q: "When do I get my security deposit back?",
        a: "Once the car is checked on return. If there is no damage, fines or fuel shortfall, the deposit is returned in full.",
      },
      {
        q: "Are luxury cars available on self-drive?",
        a: "Luxury cars such as the Mercedes, Audi, Range Rover and G-Wagon are rented with our drivers only.",
      },
    ],
    related: ["rent-a-car-lahore-price-list", "lahore-car-rental-with-driver", "car-rental-lahore-for-foreigners"],
  },
];

export default part1;
