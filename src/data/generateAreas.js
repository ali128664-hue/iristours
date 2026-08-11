const fs = require('fs');

const data = [];

function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function addArea(name, group, isPopular = false) {
  const slug = generateSlug(name);
  data.push({
    name,
    slug,
    group,
    isPopular,
    metaTitle: `Rent a Car in ${name} Lahore | Premium Car Rental - Iris Tours`,
    metaDescription: `Looking for a car on rent in ${name}? Iris Tours offers premium cars, SUVs, and vans with professional chauffeurs. Quick booking and reliable service in ${name}, Lahore.`,
    description: `Whether you are a resident of **${name}** or visiting for business or leisure, Iris Tours provides top-tier car rental services right at your doorstep. We offer a wide range of well-maintained vehicles, from economical compact cars to luxury sedans and spacious SUVs. Avoid the hassle of unreliable transport and travel in absolute comfort and style with our professional chauffeur service. Book your ride today in ${name} and experience seamless travel across Lahore and beyond.`,
  });
}

// 1. DHA Phases
const dhaPhases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6", "Phase 7", "Phase 8", "Phase 9", "Raya", "EME", "Pentagon"];
dhaPhases.forEach(p => addArea(`DHA ${p}`, "DHA Lahore", ["Phase 5", "Phase 6", "Raya"].includes(p)));

// 2. Model Town Blocks
const mtBlocks = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "Extension"];
mtBlocks.forEach(b => addArea(`Model Town Block ${b}`, "Model Town", b === "C" || b === "H"));

// 3. Johar Town Blocks
const jtBlocks = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R"];
jtBlocks.forEach(b => addArea(`Johar Town Block ${b}`, "Johar Town", b === "G" || b === "D"));

// 4. Bahria Town Sectors
const btSectors = ["Safari Villas", "Sector A", "Sector B", "Sector C", "Sector D", "Sector E", "Sector F"];
btSectors.forEach(s => addArea(`Bahria Town ${s}`, "Bahria Town", s === "Sector C"));

// 5. Gulberg
const gulbergAreas = ["Gulberg I", "Gulberg II", "Gulberg III", "MM Alam Road", "Liberty Market", "Main Boulevard Gulberg", "Ghalib Market"];
gulbergAreas.forEach(a => addArea(a, "Gulberg", ["MM Alam Road", "Liberty Market", "Gulberg III"].includes(a)));

// 6. Cantt / Military Areas
const canttAreas = ["Cavalry Ground", "Sarfaraz Rafiqui Road", "Tufail Road", "Lahore Cantt", "Askari 1", "Askari 2", "Askari 3", "Askari 4", "Askari 5", "Askari 6", "Askari 7", "Askari 8", "Askari 9", "Askari 10", "Askari 11"];
canttAreas.forEach(a => addArea(a, "Cantonment & Askari", ["Lahore Cantt", "Cavalry Ground", "Askari 11"].includes(a)));

// 7. Other Major Societies
const otherSocieties = [
  "Wapda Town", "Faisal Town", "Allama Iqbal Town", "Garden Town", "Township", 
  "Valencia Town", "Lake City", "Tariq Gardens", "Tech Society", "Canal View", 
  "Izmir Town", "Bahria Orchard", "Fazaia Housing Scheme", "Al-Jalil Garden", 
  "SA Gardens", "Tariq Road", "Samanabad", "Sabzazar", "Mustafa Town", 
  "Tricon Village", "State Life Housing Society", "Sui Gas Society", "NFC Phase 1", "NFC Phase 2"
];
otherSocieties.forEach(a => addArea(a, "Other Major Areas", ["Wapda Town", "Faisal Town", "Lake City", "Garden Town"].includes(a)));

fs.writeFileSync('./src/data/serviceAreas.json', JSON.stringify(data, null, 2));
console.log(`Generated ${data.length} areas.`);
