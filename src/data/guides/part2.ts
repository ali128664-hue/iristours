/**
 * part2.ts — price and audience guides: price list, monthly rental,
 * overseas Pakistanis, foreign visitors, Islamabad, Rawalpindi.
 */

import type { Guide } from "./types";

const part2: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-lahore-price-list",
    title: "Rent a Car Lahore Price List: Daily, Weekly and Monthly Rates",
    metaTitle: "Rent a Car Lahore Price List: Per Day, Week & Month",
    description:
      "Full rent a car price list for Lahore: per day, intercity, weekly and monthly rates for 17 cars with driver, from Yaris and Corolla to Prado, V8 and G-Wagon.",
    keywords: [
      "rent a car lahore price",
      "rent a car lahore per day price",
      "car rental rates lahore",
      "rent a car price list lahore",
      "cheap rent a car lahore",
    ],
    category: "Rent a car",
    date: "2026-11-18",
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
    imageAlt: "Sedans, SUVs and vans from the Iris Tours rental fleet in Lahore",
    intro: `How much does it cost to **rent a car in Lahore per day**? The honest answer depends on the car, where you are going and for how long. This page lists our current rates for every car in the fleet, explains what is included, and shows how to pay less for longer bookings.

All prices below are read directly from our live fleet list, so they are always up to date.

::stats 17 = Cars in the fleet | {{rate:toyota-yaris}} = Lowest day rate | 30 = Seats in our largest coach | 24/7 = Booking on WhatsApp`,
    sections: [
      {
        h: "Economy and sedan rates",
        body: `| Car | Day in Lahore | Intercity day | Week | Month |
| --- | --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | {{rate:toyota-yaris}} | {{city:toyota-yaris}} | {{week:toyota-yaris}} | {{month:toyota-yaris}} |
| [Toyota Corolla Altis 1.6](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-altis-1-6}} | {{week:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Toyota Corolla Grande 1.8](/fleet/toyota-corolla-grande-1-8) | {{rate:toyota-corolla-grande-1-8}} | {{city:toyota-corolla-grande-1-8}} | {{week:toyota-corolla-grande-1-8}} | {{month:toyota-corolla-grande-1-8}} |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} | {{city:honda-civic}} | {{week:honda-civic}} | {{month:honda-civic}} |

::cars toyota-yaris, toyota-corolla-altis-1-6, honda-civic`,
      },
      {
        h: "SUV and 7-seater rates",
        body: `| Car | Day in Lahore | Intercity day | Week | Month |
| --- | --- | --- | --- | --- |
| [Honda BR-V](/fleet/honda-br-v) | {{rate:honda-br-v}} | {{city:honda-br-v}} | {{week:honda-br-v}} | {{month:honda-br-v}} |
| [MG HS](/fleet/mg-hs) | {{rate:mg-hs}} | {{city:mg-hs}} | {{week:mg-hs}} | {{month:mg-hs}} |
| [Haval H6](/fleet/haval-h6) | {{rate:haval-h6}} | {{city:haval-h6}} | {{week:haval-h6}} | {{month:haval-h6}} |
| [Kia Sportage](/fleet/kia-sportage) | {{rate:kia-sportage}} | {{city:kia-sportage}} | {{week:kia-sportage}} | {{month:kia-sportage}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} | {{city:toyota-fortuner}} | {{week:toyota-fortuner}} | {{month:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} | {{city:toyota-land-cruiser-prado}} | {{week:toyota-land-cruiser-prado}} | {{month:toyota-land-cruiser-prado}} |
| [Land Cruiser V8](/fleet/toyota-land-cruiser-v8) | {{rate:toyota-land-cruiser-v8}} | {{city:toyota-land-cruiser-v8}} | {{week:toyota-land-cruiser-v8}} | {{month:toyota-land-cruiser-v8}} |

Not sure which SUV to pick? Compare them in our [Prado on rent](/blog/prado-on-rent-lahore) and [V8 on rent](/blog/land-cruiser-v8-on-rent-lahore) guides.

::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-land-cruiser-v8`,
      },
      {
        h: "Van and coaster rates",
        body: `| Vehicle | Seats | Day in Lahore | Intercity day |
| --- | --- | --- | --- |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |
| [Toyota Coaster Saloon](/fleet/toyota-coaster-saloon) | 30 | {{rate:toyota-coaster-saloon}} | {{city:toyota-coaster-saloon}} |

For school trips, staff transport and wedding guests, see [Coaster on rent in Lahore](/blog/coaster-on-rent-lahore).

::cars toyota-hiace-grand-cabin, toyota-coaster-saloon`,
      },
      {
        h: "Luxury car rates",
        body: `| Car | Day in Lahore | Intercity day |
| --- | --- | --- |
| [Audi A6](/fleet/audi-a6) | {{rate:audi-a6}} | {{city:audi-a6}} |
| [Mercedes-Benz C-Class](/fleet/mercedes-benz-c-class-c180) | {{rate:mercedes-benz-c-class-c180}} | {{city:mercedes-benz-c-class-c180}} |
| [Range Rover](/fleet/range-rover) | {{rate:range-rover}} | {{city:range-rover}} |
| [Mercedes G-Wagon](/fleet/mercedes-benz-g-wagon) | {{rate:mercedes-benz-g-wagon}} | {{city:mercedes-benz-g-wagon}} |

Luxury cars are popular for weddings; see [Mercedes on rent](/blog/mercedes-on-rent-lahore) and our [wedding cars](/services/wedding-cars) page.

::cars mercedes-benz-c-class-c180, audi-a6, range-rover`,
      },
      {
        h: "What is included, and what is extra",
        body: `**Included in the day rate:** the car, a professional driver, and pickup anywhere in Lahore.

**Usually extra:**
- **Fuel** on long trips, handed over full-to-full or quoted in advance. Check current petrol prices on our [fuel prices page](/fuel-prices-pakistan).
- **Motorway tolls and parking.**
- **Driver's food and overnight stay** on outstation trips.
- **Late-night hours** beyond the normal day.

Every booking is confirmed in writing on WhatsApp, so you know the total before you travel.`,
      },
      {
        h: "How to pay less",
        body: `- **Book by the week or month.** A weekly Corolla costs {{week:toyota-corolla-altis-1-6}}, much less than seven single days.
- **Pick the right size.** A [BR-V](/fleet/honda-br-v) seats seven at the price of a Civic.
- **Avoid peak dates.** Wedding Fridays and Saturdays from November to February, Eid and long weekends fill up first.
- **Share a van.** For groups, one [Hiace](/fleet/toyota-hiace-grand-cabin) is cheaper than three sedans.`,
      },
    ],
    faqs: [
      {
        q: "What is the cheapest car to rent in Lahore?",
        a: "The [Toyota Yaris](/fleet/toyota-yaris) at {{rate:toyota-yaris}} per day with driver.",
      },
      {
        q: "Is fuel included in the rent a car price?",
        a: "City day rates cover the car and driver. Fuel arrangements for long trips are agreed in advance and shown in your written quote.",
      },
      {
        q: "Do prices change in wedding season?",
        a: "Our listed rates stay the same, but availability is limited on peak dates, so book early to get the car you want.",
      },
    ],
    related: ["rent-a-car-in-lahore", "monthly-car-rental-lahore", "self-drive-car-rental-lahore"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "monthly-car-rental-lahore",
    title: "Monthly Car Rental in Lahore: Packages and Prices",
    metaTitle: "Monthly Car Rental Lahore: Packages with Driver",
    description:
      "Monthly car rental in Lahore for families, companies and overseas visitors. Monthly prices from Rs. 110,000, what is included, and how to choose the right car.",
    keywords: ["monthly car rental lahore", "rent a car monthly basis lahore", "car on monthly rent lahore", "long term car rental lahore", "weekly car rental lahore"],
    category: "Rent a car",
    date: "2026-11-12",
    image: "/blog/chauffeur-rental.jpg",
    imageAlt: "Chauffeur opening the door of a car for a monthly rental customer in Lahore",
    intro: `If you need a car for more than a week, **monthly car rental in Lahore** is far cheaper than paying day by day. It suits families visiting from abroad, companies that need a car for staff, and anyone waiting for their own car to be delivered or repaired.

Here is what our monthly and weekly packages cost and how they work.`,
    sections: [
      {
        h: "Monthly prices",
        body: `| Car | Seats | Week | Month |
| --- | --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | 5 | {{week:toyota-yaris}} | {{month:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | 5 | {{week:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | 5 | {{week:honda-civic}} | {{month:honda-civic}} |
| [Honda BR-V](/fleet/honda-br-v) | 7 | {{week:honda-br-v}} | {{month:honda-br-v}} |
| [Kia Sportage](/fleet/kia-sportage) | 5 | {{week:kia-sportage}} | {{month:kia-sportage}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | 7 | {{week:toyota-fortuner}} | {{month:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | 15 | {{week:toyota-hiace-grand-cabin}} | {{month:toyota-hiace-grand-cabin}} |

Rates for luxury cars and the Prado are on our [price list](/blog/rent-a-car-lahore-price-list).

::cars toyota-yaris, toyota-corolla-altis-1-6, honda-br-v`,
      },
      {
        h: "Who books monthly",
        body: `### Overseas families
Families who come home for weddings or the winter holidays often stay four to eight weeks. A monthly car with driver means grandparents, cousins and shopping trips are all covered. See [car rental for overseas Pakistanis](/blog/car-rental-overseas-pakistanis-lahore).

### Companies
Offices use monthly cars for managers, visiting engineers and pick-and-drop of staff. Our [corporate rentals](/services/corporate-rentals) team handles monthly invoicing.

### Between cars
If your own car is in the workshop or waiting for delivery, a monthly Yaris or Corolla keeps you moving without a long contract.

![Iris Tours cars lined up and ready for customers](/categories/about_fleet.jpg "Monthly cars are serviced and cleaned by our team.")`,
      },
      {
        h: "What a monthly package includes",
        body: `- A dedicated car, serviced and cleaned by us
- A regular driver, so you deal with the same person every day
- A replacement car if yours needs a repair, subject to availability
- Working-day hours agreed at booking, with overtime rates for late nights

Fuel is usually paid by the customer on monthly packages. Keep an eye on the latest petrol price on our [fuel prices page](/fuel-prices-pakistan); you can also estimate trip costs with its calculator.`,
      },
      {
        h: "How to book a monthly car",
        body: `1. Tell us the start date, the number of people and how much you will drive each day.
2. We suggest a car and send the monthly price and terms in writing.
3. The car and driver arrive on the start date. Payment can be made monthly in advance by cash or bank transfer.`,
      },
    ],
    faqs: [
      { q: "Is a monthly rental available without a driver?", a: "Yes, for standard cars with a refundable security deposit. See the [self-drive guide](/blog/self-drive-car-rental-lahore)." },
      { q: "Can I change the car during the month?", a: "Yes, subject to availability. The price is adjusted to the new car from the day of the change." },
      { q: "Is there a weekly option?", a: "Yes. Weekly rates start at {{week:toyota-yaris}} for a Yaris." },
    ],
    related: ["car-rental-overseas-pakistanis-lahore", "rent-a-car-lahore-price-list", "rent-a-car-dha-lahore"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "car-rental-overseas-pakistanis-lahore",
    title: "Car Rental in Lahore for Overseas Pakistanis Visiting Home",
    metaTitle: "Car Rental for Overseas Pakistanis in Lahore",
    description:
      "Coming home for winter weddings? Car rental for overseas Pakistanis in Lahore: airport pickup, monthly cars with driver, family vans and northern trips.",
    keywords: ["car rental for overseas pakistanis", "rent a car lahore for overseas", "overseas pakistani car hire lahore", "winter wedding season lahore car", "family car rental lahore"],
    category: "Rent a car",
    date: "2026-11-11",
    image: "/blog/lahore-airport-car-rental-service.jpg",
    imageAlt: "Chauffeur meeting travellers outside Allama Iqbal International Airport, Lahore",
    intro: `December and January are when many overseas Pakistanis come home: the wedding season is at its peak, schools abroad are on winter break, and families gather in Lahore. If you are planning a visit, booking **car rental before you land** saves a lot of stress.

This guide covers airport pickup, the best cars for big families, monthly pricing, and the trips most visitors take.`,
    sections: [
      {
        h: "Start with an airport pickup",
        body: `International flights often land late at night or early in the morning. Book a car that fits your luggage: overseas families usually travel with four to eight large suitcases, which needs an SUV or a van rather than a sedan.

- Two adults with luggage: [Toyota Fortuner](/fleet/toyota-fortuner) or [Prado](/fleet/toyota-land-cruiser-prado)
- Big families: [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin)

The driver tracks your flight and waits at arrivals. Details in our [Lahore airport guide](/blog/rent-a-car-lahore-airport).

::cars toyota-fortuner, toyota-land-cruiser-prado, toyota-hiace-grand-cabin`,
      },
      {
        h: "A car for your whole stay",
        body: `Instead of booking day by day, most visitors take a weekly or monthly car with driver:

| Car | Week | Month |
| --- | --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{week:toyota-corolla-altis-1-6}} | {{month:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) (7 seats) | {{week:honda-br-v}} | {{month:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{week:toyota-fortuner}} | {{month:toyota-fortuner}} |

A driver who knows Lahore is especially useful if you have been away for years: the city has new roads, signal-free corridors and one-way systems. More details in the [monthly rental guide](/blog/monthly-car-rental-lahore).`,
      },
      {
        h: "Weddings during your visit",
        body: `If there is a wedding in the family, book wedding cars as early as possible. December weekends sell out first.

- **For the couple:** decorated [Mercedes, Audi or V8](/services/wedding-cars)
- **For guests:** [Hiace](/fleet/toyota-hiace-grand-cabin) or [Coaster](/blog/coaster-on-rent-lahore) shuttles between home and the venue
- **For baraat:** a matching convoy of SUVs

Our [wedding season guide](/blog/wedding-car-rental-lahore-shaadi-season) has a full checklist.

![White wedding car decorated with red roses outside a lit-up venue](/categories/wedding.jpg "Book the couple's car first; December weekends sell out early.")`,
      },
      {
        h: "Trips worth adding to your visit",
        body: `- **Murree in the snow:** the official winter tourism season in Murree runs from mid-December to mid-February. See [Lahore to Murree by car](/blog/lahore-to-murree-by-car-snowfall).
- **Kartarpur:** a meaningful day trip for many families. See [Lahore to Kartarpur by car](/blog/lahore-to-kartarpur-by-car).
- **Wagah border ceremony:** an evening children remember. See the [Wagah guide](/blog/wagah-border-ceremony-from-lahore).
- **Old Lahore:** the Walled City, Badshahi Mosque and food street. See [Lahore city tour by car](/blog/lahore-city-tour-by-car).`,
      },
      {
        h: "Practical tips",
        body: `- **Smog:** November and December can bring heavy smog in Lahore. Check the air quality on [IQAir's Lahore page](https://www.iqair.com/pakistan/punjab/lahore) and pack masks for children and elders. Our [smog travel guide](/blog/lahore-smog-fog-travel-guide) explains road closures.
- **Payment:** you can pay by bank transfer before you fly, or in cash on arrival.
- **Driving yourself:** if you want to drive, bring your passport and an International Driving Permit. See the [self-drive guide](/blog/self-drive-car-rental-lahore).`,
      },
    ],
    faqs: [
      { q: "Can I book from abroad and pay later?", a: "Yes. Book on WhatsApp from anywhere; you can pay by bank transfer in advance or in cash on arrival." },
      { q: "Can the same driver stay with us for a month?", a: "Yes. On monthly bookings we assign a regular driver, so your family deals with the same person." },
      { q: "Do you have child seats?", a: "Tell us when booking. We arrange them on request, subject to availability." },
    ],
    related: ["rent-a-car-lahore-airport", "monthly-car-rental-lahore", "wedding-car-rental-lahore-shaadi-season"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "car-rental-lahore-for-foreigners",
    title: "Car Rental with Driver in Lahore for Foreign Visitors",
    metaTitle: "Car Rental in Lahore for Foreigners & Tourists",
    description:
      "A practical guide for foreign visitors renting a car with driver in Lahore: safety, documents, prices, English-speaking drivers and must-see places.",
    keywords: ["car rental lahore for foreigners", "lahore car with driver for tourists", "hire driver lahore", "tourist transport lahore", "private driver lahore"],
    category: "Rent a car",
    date: "2026-11-10",
    image: "/blog/lahore-cultural-tour.jpg",
    imageAlt: "Visitors with a chauffeur-driven car outside the Badshahi Mosque, Lahore",
    intro: `Lahore is one of South Asia's great historic cities, but its traffic can be overwhelming for a first-time visitor. Most foreign visitors, business travellers and tourists alike, find that **hiring a car with a driver in Lahore** is the safest and most relaxed way to get around.

This guide answers the questions visitors ask us most often.`,
    sections: [
      {
        h: "Why a driver is better than self-drive",
        body: `- **Traffic culture:** lane discipline, motorbikes and rickshaws take time to get used to.
- **Navigation:** many addresses are given by landmark rather than street number.
- **Parking:** the driver drops you at the door and waits.
- **Security:** a local driver knows which areas and times to avoid and can speak to police at checkpoints.

Self-drive is possible with an International Driving Permit, but we recommend it only for experienced drivers in Pakistan. See [self-drive rules](/blog/self-drive-car-rental-lahore).`,
      },
      {
        h: "What it costs",
        body: `A full day with driver in Lahore starts at {{rate:toyota-corolla-altis-1-6}} for a Corolla and {{rate:honda-civic}} for a Civic. Business visitors often prefer a [Toyota Prado](/fleet/toyota-land-cruiser-prado) at {{rate:toyota-land-cruiser-prado}}. All prices are in Pakistani rupees; switch the site to USD with the currency button at the top of the page. Full list: [price list](/blog/rent-a-car-lahore-price-list).

::cars toyota-corolla-altis-1-6, honda-civic, toyota-land-cruiser-prado`,
      },
      {
        h: "Places to see in Lahore",
        body: `A one-day route with a driver can cover:

- [Lahore Fort](https://en.wikipedia.org/wiki/Lahore_Fort), a UNESCO World Heritage Site, and the [Badshahi Mosque](https://en.wikipedia.org/wiki/Badshahi_Mosque) opposite it
- The [Walled City](https://walledcitylahore.gop.pk), including Delhi Gate, the Shahi Hammam and Wazir Khan Mosque
- Shalimar Gardens, Lahore Museum and Minar-e-Pakistan
- The [Wagah border ceremony](/blog/wagah-border-ceremony-from-lahore) at sunset

Our [Lahore city tour by car](/blog/lahore-city-tour-by-car) lays out a full-day plan.

::route Lahore Fort > (5 min walk) > Badshahi Mosque > (walk) > Walled City > (40–60 min) > Wagah border`,
      },
      {
        h: "Beyond Lahore",
        body: `- [Lahore to Islamabad](/blog/lahore-to-islamabad-car-rental) is about four and a half hours on the M-2 motorway.
- [Kartarpur](/blog/lahore-to-kartarpur-by-car), home of Gurdwara Darbar Sahib, is a popular day trip.
- For the mountains, our private [tours](/tours) cover [Hunza](/tours/hunza-valley), [Skardu](/tours/skardu-deosai) and [Swat](/tours/swat-kalam) with mountain-trained drivers.`,
      },
      {
        h: "Practical advice",
        body: `- Keep a copy of your passport and visa with you.
- Dress modestly when visiting mosques and shrines; women should carry a scarf.
- Check air quality in November and December on [IQAir](https://www.iqair.com/pakistan/punjab/lahore).
- Save the driver's number and our WhatsApp; we are available 24 hours.`,
      },
    ],
    faqs: [
      { q: "Can I get an English-speaking driver?", a: "Tell us when booking and we will do our best to assign a driver who speaks English." },
      { q: "Can I pay in US dollars?", a: "Bookings are priced in Pakistani rupees. Contact us to arrange payment if you don't have rupees yet." },
      { q: "Is it safe to travel by car in Lahore?", a: "Yes, with normal precautions. A local driver who knows the city is the best way to travel comfortably." },
    ],
    related: ["lahore-city-tour-by-car", "rent-a-car-gulberg-lahore", "wagah-border-ceremony-from-lahore"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-islamabad",
    title: "Rent a Car in Islamabad with Driver",
    metaTitle: "Rent a Car in Islamabad with Driver: Rates & Areas",
    description:
      "Rent a car in Islamabad with a professional driver: airport pickup, sector-wise doorstep service, Murree trips and Lahore–Islamabad one-way rides.",
    keywords: ["rent a car islamabad", "car rental islamabad with driver", "islamabad airport car rental", "rent a car f-7 islamabad", "rent a car blue area"],
    category: "Rent a car",
    date: "2026-11-09",
    image: "/blog/lahore-islamabad.jpg",
    imageAlt: "Black SUV on the motorway with green hills behind",
    intro: `Iris Tours is based in Lahore, but we also **rent cars with drivers in Islamabad and Rawalpindi**. Whether you need an airport pickup, a car for a week of meetings in Blue Area, or a family trip to Murree, the same fixed rates and written quotes apply.`,
    sections: [
      {
        h: "Islamabad sectors we cover",
        body: `We pick up anywhere in Islamabad, including [Blue Area](/areas/blue-area-islamabad), [F-6](/areas/sector-f-6-islamabad), [F-7](/areas/sector-f-7-islamabad), [F-10](/areas/sector-f-10-islamabad), [F-11](/areas/sector-f-11-islamabad), [E-7](/areas/sector-e-7-islamabad), [E-11](/areas/sector-e-11-islamabad), [G-11](/areas/sector-g-11-islamabad), [I-8](/areas/sector-i-8-islamabad) and [DHA Islamabad](/areas/dha-phase-1-islamabad). For the twin city, see [rent a car in Rawalpindi](/blog/rent-a-car-rawalpindi).`,
      },
      {
        h: "Rates in Islamabad",
        body: `| Car | Day with driver | Intercity day |
| --- | --- | --- |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-altis-1-6}} |
| [Honda Civic](/fleet/honda-civic) | {{rate:honda-civic}} | {{city:honda-civic}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} | {{city:toyota-fortuner}} |
| [Toyota Prado](/fleet/toyota-land-cruiser-prado) | {{rate:toyota-land-cruiser-prado}} | {{city:toyota-land-cruiser-prado}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |

Availability in Islamabad is best with a day's notice, especially for SUVs.

::cars toyota-corolla-altis-1-6, toyota-fortuner, toyota-land-cruiser-prado`,
      },
      {
        h: "Islamabad airport pickup",
        body: `Islamabad International Airport is on the western edge of the city, roughly 30–45 minutes from the main sectors. Our driver tracks your flight and meets you at arrivals. The same service is available in Lahore; see [Lahore airport pickup and drop](/blog/rent-a-car-lahore-airport) and the [airport transfer page](/services/airport-transfer).`,
      },
      {
        h: "Day trips from Islamabad",
        body: `- **Murree and the Galiyat:** about 1.5–2 hours by the Murree Expressway. Snow season advice is in our [Murree guide](/blog/lahore-to-murree-by-car-snowfall).
- **Naran and Kaghan:** via the Hazara Motorway. See [Lahore to Naran Kaghan by car](/blog/lahore-to-naran-kaghan-by-car).
- **Khewra Salt Mine:** about two hours down the M-2. See the [Khewra and Katas Raj day trip](/blog/khewra-salt-mine-katas-raj-day-trip).
- **Back to Lahore:** one-way rides on the M-2 motorway. See [Lahore to Islamabad car rental](/blog/lahore-to-islamabad-car-rental).

::route Lahore > (M-2, about 4.5 h) > Islamabad > (Murree Expressway, 1.5–2 h) > Murree`,
      },
    ],
    faqs: [
      { q: "Can I book a one-way car from Islamabad to Lahore?", a: "Yes. One-way rides are charged at the intercity day rate, for example {{city:toyota-corolla-altis-1-6}} for a Corolla." },
      { q: "Do you have luxury cars in Islamabad?", a: "Luxury cars are based in Lahore and can be sent to Islamabad with advance booking." },
    ],
    related: ["rent-a-car-rawalpindi", "lahore-to-islamabad-car-rental", "lahore-to-murree-by-car-snowfall"],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "rent-a-car-rawalpindi",
    title: "Rent a Car in Rawalpindi with Driver",
    metaTitle: "Rent a Car in Rawalpindi with Driver: Rates & Areas",
    description:
      "Rent a car in Rawalpindi with doorstep pickup in Saddar, Satellite Town, Bahria, Chaklala and more. Rates, Murree trips and one-way rides to Lahore.",
    keywords: ["rent a car rawalpindi", "car rental rawalpindi", "rent a car saddar rawalpindi", "rawalpindi to murree car", "rent a car bahria town rawalpindi"],
    category: "Rent a car",
    date: "2026-11-08",
    image: "/blog/lahore-islamabad-motorway-salt-range.jpg",
    imageAlt: "Car travelling on the motorway near Rawalpindi",
    intro: `Rawalpindi is the gateway to Murree, the Galiyat and the north, and the busiest twin of Islamabad. We **rent cars with drivers in Rawalpindi** for families, weddings, Murree trips and one-way rides down the M-2 to Lahore.`,
    sections: [
      {
        h: "Areas we cover in Rawalpindi",
        body: `Doorstep pickup in [Saddar](/areas/saddar-rawalpindi), [Satellite Town](/areas/satellite-town-rawalpindi), [Commercial Market](/areas/commercial-market-rawalpindi), [Chaklala Scheme 3](/areas/chaklala-scheme-3-rawalpindi), [Westridge](/areas/westridge-rawalpindi), [Peshawar Road](/areas/peshawar-road-rawalpindi), [Murree Road](/areas/murree-road-rawalpindi), [Raja Bazaar](/areas/raja-bazaar-rawalpindi), [Adiala Road](/areas/adiala-road-rawalpindi) and [Lalkurti](/areas/lalkurti-rawalpindi), plus Bahria Town and DHA.`,
      },
      {
        h: "Rawalpindi car rental rates",
        body: `| Car | Day with driver | Intercity day |
| --- | --- | --- |
| [Toyota Yaris](/fleet/toyota-yaris) | {{rate:toyota-yaris}} | {{city:toyota-yaris}} |
| [Toyota Corolla Altis](/fleet/toyota-corolla-altis-1-6) | {{rate:toyota-corolla-altis-1-6}} | {{city:toyota-corolla-altis-1-6}} |
| [Honda BR-V](/fleet/honda-br-v) | {{rate:honda-br-v}} | {{city:honda-br-v}} |
| [Toyota Fortuner](/fleet/toyota-fortuner) | {{rate:toyota-fortuner}} | {{city:toyota-fortuner}} |
| [Toyota Hiace Grand Cabin](/fleet/toyota-hiace-grand-cabin) | {{rate:toyota-hiace-grand-cabin}} | {{city:toyota-hiace-grand-cabin}} |

::cars toyota-corolla-altis-1-6, toyota-fortuner, toyota-hiace-grand-cabin`,
      },
      {
        h: "Murree from Rawalpindi in winter",
        body: `Rawalpindi is the closest big city to Murree, so it is the natural base for snow trips. In heavy snowfall the district administration sometimes stops tourist entry for safety, as happened in January 2026. For the 2026–27 season, Rawalpindi's administration has announced a winter safety plan with the main tourist season from 15 December to 15 February ([Express Tribune report](https://tribune.com.pk/story/2638187/murree-rolls-out-winter-safety-plan-for-tourists)).

For snow, book a 4x4 such as a [Fortuner](/fleet/toyota-fortuner) or [Prado](/fleet/toyota-land-cruiser-prado) with a driver who has driven in snow. Full advice: [Lahore to Murree by car in snowfall season](/blog/lahore-to-murree-by-car-snowfall).

![White SUV on a winding mountain road with snowy peaks](/blog/northern-areas-fortuner.jpg "A 4x4 with a hill-experienced driver is the safe choice for Murree.")`,
      },
      {
        h: "One-way to Lahore",
        body: `Many customers ride one way from Rawalpindi or Islamabad to Lahore. The M-2 trip takes about four and a half hours, and the price is the intercity day rate. See [Lahore to Islamabad car rental](/blog/lahore-to-islamabad-car-rental) for the route and rest stops.`,
      },
    ],
    faqs: [
      { q: "Do you send cars to Bahria Town Rawalpindi?", a: "Yes. Bahria Town and DHA Rawalpindi are covered at normal rates." },
      { q: "Can I go from Rawalpindi to Naran in a sedan?", a: "In summer, yes. In winter, roads beyond Balakot often close or need a 4x4. See the [Naran Kaghan guide](/blog/lahore-to-naran-kaghan-by-car)." },
    ],
    related: ["rent-a-car-islamabad", "lahore-to-murree-by-car-snowfall", "lahore-to-islamabad-car-rental"],
  },
];

export default part2;
