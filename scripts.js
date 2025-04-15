const spells = [
  {
    id: 1, 
    name: "Aguamenti",
    category: ["Charm", "Conjuration"],
    image: "./img/aguamenti.webp",
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
    image: "./img/alarte.webp",
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
    image: "./img/anti-intruder.webp",
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
    image: "./img/antonin.webp",
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
    image: "./img/aparecium.webp",
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
    image: "./img/appare.webp",
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
    image: "./img/avifors.webp",
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
    image: "./img/avada.webp",
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
    image: "./img/apparition.webp",
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
    image: "./img/anapneo.webp",
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
    image: "./img/anteoculatia.avif",
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
    image: "./img/amato.avif",
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

  if (spellsArray.length === 0) {
    container.classList.add("no-results-state");
    const noResults = document.createElement("p");
    noResults.classList.add("no-results");
    noResults.textContent = "No results";
    container.appendChild(noResults);
    return;
  } else {
    container.classList.remove("no-results-state");
  }

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
      console.log("See Details clicked for:", spell.name); // Check which spell's details are being shown
      showSpellDetails(spell);
    });
    card.appendChild(button);

    container.appendChild(card);
  });
}

// 2. Spell Details -- call pop-up
function showSpellDetails(spell){
  console.log("Showing details for spell:", spell); // Debugging: Check the spell object being passed
  const detailContent = document.getElementById("detailContent"); 
  
  const categoriesHTML = spell.category //map through each category for design purposes
    .map(cat => `<span class="category">${cat}</span>`)
    .join(" ");

  detailContent.innerHTML = `
    <h2>${spell.name}</h2>

    <img src="${spell.image}" alt="${spell.name}">

    <div class="detail-category">
      <strong></strong> 
      ${categoriesHTML}
    </div>

    <p class="detail-pronunciation">
      <strong>Pronunciation:</strong> 
      ${spell.pronunciation}
    </p>

    <p class="detail-description">
      <strong>Description:</strong> 
      ${spell.description}
    </p>

    <p>
      <strong> Mentioned:</strong>
    </p>
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

// 4. Create modal 
function createSpellRequestModal(){
  const modal = document.createElement("div");
  modal.id = "requestModal";
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const title = document.createElement("h2");
  title.textContent = "Request a Spell";
  modalContent.appendChild(title);

  const form = document.createElement("form");
  form.id = "spellRequestForm";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Spell Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "spellNameInput";
  nameInput.placeholder = "Spell name...";
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);

  const descLabel = document.createElement("label");
  descLabel.textContent = "Description: ";
  const descInput = document.createElement("textarea");
  descInput.id = "spellDescriptionInput";
  descInput.placeholder = "Enter spell description...";
  descLabel.appendChild(descInput);
  form.appendChild(descLabel);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submitSpellRequest";
  submitButton.textContent = "Submit Request";
  form.appendChild(submitButton);

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.id = "closeSpellRequest";
  closeButton.textContent = "Close";
  form.appendChild(closeButton);

  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const spellName = nameInput.value.trim();
    const description = descInput.value.trim();

    if (spellName && description) {
      modalContent.innerHTML = `
        <h2>Thank You!</h2>
        <p>Thanks for submitting your request for <strong>${spellName}</strong>!</p>
      `;

      console.log("Spell request submitted:", {
        spellName,
        description,
      });

      setTimeout(() => {
        modal.style.display = "none";
        modal.remove();
      }, 2000);
    } else {
      if (!spellName) nameInput.style.border = "1px solid red";
      if (!description) descInput.style.border = "1px solid red";
    }
  });
}

// ------------------
// on load  
// ------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded. Initializing...");
  displaySpells();

  document.getElementById("searchBar").addEventListener("input", () => {
    console.log("Search input changed:", document.getElementById("searchBar").value);
    filterSpells();
  });
  document.getElementById("filterSelect").addEventListener("change", () => {
    console.log("Filter changed:", document.getElementById("filterSelect").value);
    filterSpells();
  });

  document.getElementById("requestButton").addEventListener("click", () => {
    let modal = document.getElementById("requestModal");
    if (!modal){
      createSpellRequestModal();
      modal = document.getElementById("requestModal");
    }
    modal.style.display = "block";
  });
});