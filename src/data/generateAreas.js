const fs = require('fs');

const data = [];

function generateSlug(name, city) {
  return `${name}-${city}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function addArea(name, group, isPopular = false, city = "Lahore") {
  const slug = generateSlug(name, city);
  data.push({
    name: `${name}, ${city}`,
    city,
    slug,
    group,
    isPopular,
    metaTitle: `Rent a Car in ${name}, ${city} | Premium Car Rental - Iris Tours`,
    metaDescription: `Looking for a car on rent in ${name}, ${city}? Iris Tours offers premium cars, SUVs, and vans with professional chauffeurs. Quick booking and reliable service in ${name}, ${city}.`,
    description: `Whether you are a resident of **${name}, ${city}** or visiting for business or leisure, Iris Tours provides top-tier car rental services right at your doorstep. We offer a wide range of well-maintained vehicles, from economical compact cars to luxury sedans and spacious SUVs. Avoid the hassle of unreliable transport and travel in absolute comfort and style with our professional chauffeur service. Book your ride today in ${name} and experience seamless travel across ${city} and beyond.`,
  });
}

// ==========================================
// LAHORE
// ==========================================

// 1. DHA Phases
const dhaPhases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6", "Phase 7", "Phase 8", "Phase 9", "Raya", "EME", "Pentagon"];
dhaPhases.forEach(p => addArea(`DHA ${p}`, "DHA Lahore", ["Phase 5", "Phase 6", "Raya"].includes(p), "Lahore"));

// 2. Model Town Blocks
const mtBlocks = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "Extension"];
mtBlocks.forEach(b => addArea(`Model Town Block ${b}`, "Model Town (Lahore)", b === "C" || b === "H", "Lahore"));

// 3. Johar Town Blocks
const jtBlocks = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R"];
jtBlocks.forEach(b => addArea(`Johar Town Block ${b}`, "Johar Town (Lahore)", b === "G" || b === "D", "Lahore"));

// 4. Bahria Town Sectors
const btSectors = ["Safari Villas", "Sector A", "Sector B", "Sector C", "Sector D", "Sector E", "Sector F"];
btSectors.forEach(s => addArea(`Bahria Town ${s}`, "Bahria Town (Lahore)", s === "Sector C", "Lahore"));

// 5. Gulberg
const gulbergAreas = ["Gulberg I", "Gulberg II", "Gulberg III", "MM Alam Road", "Liberty Market", "Main Boulevard Gulberg", "Ghalib Market"];
gulbergAreas.forEach(a => addArea(a, "Gulberg (Lahore)", ["MM Alam Road", "Liberty Market", "Gulberg III"].includes(a), "Lahore"));

// 6. Cantt / Military Areas
const canttAreas = ["Cavalry Ground", "Sarfaraz Rafiqui Road", "Tufail Road", "Lahore Cantt", "Askari 1", "Askari 2", "Askari 3", "Askari 4", "Askari 5", "Askari 6", "Askari 7", "Askari 8", "Askari 9", "Askari 10", "Askari 11"];
canttAreas.forEach(a => addArea(a, "Cantonment & Askari (Lahore)", ["Lahore Cantt", "Cavalry Ground", "Askari 11"].includes(a), "Lahore"));

// 7. Other Major Societies
const otherSocieties = [
  "Wapda Town", "Faisal Town", "Allama Iqbal Town", "Garden Town", "Township", 
  "Valencia Town", "Lake City", "Tariq Gardens", "Tech Society", "Canal View", 
  "Izmir Town", "Bahria Orchard", "Fazaia Housing Scheme", "Al-Jalil Garden", 
  "SA Gardens", "Tariq Road", "Samanabad", "Sabzazar", "Mustafa Town", 
  "Tricon Village", "State Life Housing Society", "Sui Gas Society", "NFC Phase 1", "NFC Phase 2"
];
otherSocieties.forEach(a => addArea(a, "Other Major Areas (Lahore)", ["Wapda Town", "Faisal Town", "Lake City", "Garden Town"].includes(a), "Lahore"));

// ==========================================
// ISLAMABAD
// ==========================================
const isbSectors = ["F-6", "F-7", "F-8", "F-10", "F-11", "G-6", "G-7", "G-8", "G-9", "G-10", "G-11", "G-13", "G-14", "I-8", "I-9", "I-10", "E-7", "E-11", "D-12"];
isbSectors.forEach(s => addArea(`Sector ${s}`, "Islamabad Sectors", ["F-6", "F-7", "F-11", "G-11", "I-8"].includes(s), "Islamabad"));

const isbDha = ["Phase 1", "Phase 2", "Phase 5", "Defense Valley"];
isbDha.forEach(p => addArea(`DHA ${p}`, "DHA Islamabad", p === "Phase 2", "Islamabad"));

const isbBahria = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6", "Phase 7", "Phase 8", "Enclave"];
isbBahria.forEach(p => addArea(`Bahria Town ${p}`, "Bahria Town Islamabad", ["Phase 4", "Phase 7", "Enclave"].includes(p), "Islamabad"));

const isbOther = ["Blue Area", "Centaurus", "Bani Gala", "Chak Shahzad", "CBR Town", "PWD Housing Society", "Soan Gardens", "Gulberg Greens", "Multi Gardens B-17", "Faisal Town", "Top City-1"];
isbOther.forEach(a => addArea(a, "Other Major Areas (Islamabad)", ["Blue Area", "Gulberg Greens"].includes(a), "Islamabad"));

// ==========================================
// RAWALPINDI
// ==========================================
const rwpMajor = ["Saddar", "Commercial Market", "Satellite Town", "Chaklala Scheme 3", "Westridge", "Peshawar Road", "Murree Road", "Raja Bazaar", "Adiala Road", "Lalkurti", "Tench Bhatta", "Askari 1", "Askari 7", "Askari 11", "Askari 13", "Askari 14", "Gulraiz", "High Court Road"];
rwpMajor.forEach(a => addArea(a, "Rawalpindi Areas", ["Saddar", "Commercial Market", "Chaklala Scheme 3"].includes(a), "Rawalpindi"));

// ==========================================
// FAISALABAD
// ==========================================
const fsdMajor = ["Peoples Colony", "Madina Town", "D-Ground", "Kohinoor City", "Saeed Colony", "Eden Valley", "Wapda City", "Citi Housing", "FDA City", "Ghulam Muhammad Abad", "Samnabad", "Sargodha Road", "Jaranwala Road", "Canal Road"];
fsdMajor.forEach(a => addArea(a, "Faisalabad Areas", ["Peoples Colony", "D-Ground", "Kohinoor City"].includes(a), "Faisalabad"));

// ==========================================
// MULTAN
// ==========================================
const mulMajor = ["Multan Cantt", "Bosan Road", "Gulgasht Colony", "DHA Multan", "Wapda Town", "Buch Villas", "Royal Orchard", "Fatima Jinnah Town", "Shalimar Colony", "Shah Rukn-e-Alam Colony", "New Multan"];
mulMajor.forEach(a => addArea(a, "Multan Areas", ["Multan Cantt", "Bosan Road", "DHA Multan"].includes(a), "Multan"));

// ==========================================
// GUJRANWALA
// ==========================================
const gujMajor = ["Citi Housing", "DHA Gujranwala", "Wapda Town", "Master City", "DC Colony", "Satellite Town", "Model Town", "Rahwali Cantt"];
gujMajor.forEach(a => addArea(a, "Gujranwala Areas", ["Citi Housing", "DHA Gujranwala"].includes(a), "Gujranwala"));

// ==========================================
// SIALKOT
// ==========================================
const sktMajor = ["Sialkot Cantt", "Citi Housing", "Defense Road", "Kashmir Road", "Ugoki", "Sambrial", "Model Town"];
sktMajor.forEach(a => addArea(a, "Sialkot Areas", ["Sialkot Cantt", "Citi Housing"].includes(a), "Sialkot"));

fs.writeFileSync('./src/data/serviceAreas.json', JSON.stringify(data, null, 2));
console.log(`Generated ${data.length} areas.`);
