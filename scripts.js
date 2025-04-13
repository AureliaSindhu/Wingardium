const spells = [
  {
    id: 1, 
    name: "Aguamenti",
    category: ["Charm", "Conjuration"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/9/95/B6C28_Aguamenti_PM.png/revision/latest?cb=20241130182413",
    pronunciation: "AH-gwah-MEN-tee",
    description: "Produces a clean, drinkable jet of water from the wand tip.",
    mentioned: [
      "Used by Fleur Delacour in 1994 to extinguish her skirt, which had caught flame during a fight against a dragon.",
      "Harry used this spell twice in 1997, both on the same night; once to attempt to provide a drink for Dumbledore.",
      "Then again to help douse Hagrid's hut after it was set aflame by Thorfinn Rowle, who used the Fire-Making Spell."
    ]
  },
  {
    id: 2,
    name: "Alarte Ascendare",
    category: ["Charm"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/c/c4/Alarte_Ascendare.gif/revision/latest?cb=20190402152136",
    pronunciation: "a-LAR-tay a-SEN-der-ay",
    description: "Shoots the target high into the air.",
    mentioned: [
      "Used by Gilderoy Lockhart in 1992 to send a snake high into the air during the first and last meeting of the Duelling Club."
    ]
  },
  {
    id: 3,
    name: "Anti-Intruder Jinx",
    category: ["Jinx"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUZd96O51hqa5yAvVljuqZ91orNzfoWb-4g&s",
    pronunciation: "N/A",
    description: "Prevents intruders from entering an area; similar in effect to the Anti-Apparition Charm.",
    mentioned: [
      "Placed on Hogwarts School of Witchcraft and Wizardry in 1996 for extra protection during an invasion of Death Eaters."
    ]
  },
  {
    id: 4,
    name: "Antonin Dolohov's Curse",
    category: ["Curse"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/6/69/DeathEatersBattle.jpg/revision/latest?cb=20081115070554",
    pronunciation: "N/A",
    description: "An unknown curse that causes injuries capable of killing if cast with sufficient power.",
    mentioned: [
      "Used by Antonin Dolohov during the Battle of the Department of Mysteries twice; while under a Silencing Charm, the curse's effect was weakened—saving Hermione from death but incapacitating her, requiring ten potions a day for recovery."
    ]
  },
  {
    id: 5,
    name: "Aparecium",
    category: ["Charm"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/0/02/Aparecium.jpg/revision/latest?cb=20180801200919",
    pronunciation: "AH-par-EE-see-um",
    description: "Reveals secret messages written in invisible ink or other hidden markings; also works against Concealing charms.",
    mentioned: [
      "Used (to no avail) in 1993 by Hermione Granger to try and reveal hidden writing in a diary."
    ]
  },
  {
    id: 6,
    name: "Appare Vestigium",
    category: ["Charm"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/0/01/COG_Newt_Appare_Vestigium.gif/revision/latest?cb=20190224141035",
    pronunciation: "ah-PAR-ay ves-TEE-jee-um",
    description: "Reveals traces of magic, including footprints and other track marks.",
    mentioned: [
      "Newton Scamander used it to search for traces of Porpentina Goldstein."
    ]
  },
  {
    id: 7,
    name: "Avifors",
    category: ["Transfiguration"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/9/96/Avifors.jpg/revision/latest?cb=20090904212154",
    pronunciation: "AH-vi-fors",
    description: "Transforms the target into a bird.",
    mentioned: [
      "Taught in Transfiguration class."
    ]
  },
  {
    id: 8,
    name: "Avada Kedavra",
    category: ["Curse"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/7/78/Avada-Kedavra.gif/revision/latest/thumbnail/width/360/height/360?cb=20180412031022",
    pronunciation: "ah-VAH-dah keh-DAV-rah",
    description: "Causes instantaneous and painless death, leaving no physical injury or trace of violence. Cast with a bright flash or a long stream of green light and a rushing noise.",
    mentioned: [
      "Used by Tom Riddle to murder many victims and sparingly on Harry Potter under unique circumstances."
    ]
  },
  {
    id: 9,
    name: "Apparition",
    category: ["Transportation"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/3/30/Hermione_and_Harry_apparating.gif/revision/latest/scale-to-width-down/250?cb=20240608194641",
    pronunciation: "N/A",
    description: "Magically teleports the user to another location instantly. The destination is one the user has seen or been to before and can sometimes transport multiple people if they hold on to each other (Side-Along Apparition). No incantation is required.",
    mentioned: [
      "Frequently used by wizards for rapid travel."
    ]
  },
  {
    id: 10,
    name: "Anapneo",
    category: ["Healing Spell", "Vanishment"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/2/2e/Celestina_Warbeck%27s_throat_unblocked_HM.png/revision/latest?cb=20220818132336",
    pronunciation: "ah-NAP-nee-oh",
    description: "Clears the target's airway if they are choking on something.",
    mentioned: [
      "Used by Horace Slughorn on Marcus Belby in 1996 when the latter choked on a pheasant."
    ]
  },
  {
    id: 11,
    name: "Anteoculatia",
    category: ["Dark Charm"],
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/11/pansy-parkinson-trying-to-turn-harry-to-voldemort-in-harry-potter-and-the-deathly-hallows.jpg",
    pronunciation: "an-tee-oh-kyoo-LAY-chee-ah",
    description: "Causes the target to grow antlers.",
    mentioned: [
      "Used to make Pansy Parkinson grow antlers in 1996."
    ]
  },
  {
    id: 12,
    name: "Amato Animo Animato Animagus",
    category: ["Transfiguration"],
    image: "https://static.wikia.nocookie.net/harrypotter/images/8/8e/B3C18M1_Marauders.jpg/revision/latest?cb=20241207131613",
    pronunciation: "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh an-a-MAY-jus",
    description: "Spell used as part of the process of becoming an Animagus. The incantation is recited at sunrise and sundown, every day before consuming the Animagus Potion, and also just after a lightning storm starts while placing the wand’s tip over one's heart.",
    mentioned: []
  }
];

// ------------------
// functions 
// ------------------

// 1. Spell Cards 
function displaySpells(spellsArray = spells) { //update to accept array (default to spells arr)  
  const container = document.getElementById("spellsContainer");
  container.innerHTML = ""; // Clear previous content

  spellsArray.forEach(spell => {
    const card = document.createElement("div");
    card.classList.add("spell-card");
    
    const img = document.createElement("img");
    img.src = spell.image;
    img.alt = spell.name;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = spell.name;
    card.appendChild(title);

    const desc = document.createElement("p");
    let shortDesc = spell.description.substring(0, 50) + "...";
    if (spell.description.length <= 15) {
      shortDesc = spell.description;
    }
    desc.textContent = shortDesc;
    card.appendChild(desc);

    const button = document.createElement("button");
    button.textContent = "See Details";
    button.classList.add("see-details");
    button.addEventListener("click", () => { //show details on click
      showSpellDetails(spell);
    });
    card.appendChild(button);

    container.appendChild(card);
  });
}

// 2. Spell Details -- call pop-up
function showSpellDetails(spell){
  const detailContent = document.getElementById("detailContent"); 
  detailContent.innerHTML = `
    <h3>${spell.name}</h3>
    <img src="${spell.image}" alt="${spell.name}">
    <div class="detail-category"><strong>Category:</strong> ${spell.category.join(", ")}</div>
    <p class="detail-pronunciation"><strong>Pronunciation:</strong> ${spell.pronunciation}</p>
    <p class="detail-description"><strong>Description:</strong> ${spell.description}</p>
    <p><strong>First Mentioned:</strong></p>
    <ul class="detail-mentioned">
      ${spell.mentioned.map(item => `<li>${item}</li>`).join("")}
    </ul>
    `
}

// 3. Filter function 
function filterSpells(){
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const filterValue = document.getElementById("filterSelect").value.toLowerCase();

  const filteredSpells = spells.filter(spell => {
    const matchesSearch = spell.name.toLowerCase().includes(searchTerm) || spell.description.toLowerCase().includes(searchTerm);
    const matchesCategory = (filterValue === "all") || spell.category.some(
      cat => cat.toLowerCase() === filterValue
    );
    return matchesSearch && matchesCategory;
  });
  displaySpells(filteredSpells);
}

// ------------------
// on load  
// ------------------
document.addEventListener("DOMContentLoaded", () => {
  displaySpells();

  document.getElementById("searchBar").addEventListener("input", filterSpells);
  document.getElementById("filterSelect").addEventListener("change", filterSpells);
});