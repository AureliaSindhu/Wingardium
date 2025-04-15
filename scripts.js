let spells =[]

fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    spells = data;
    displaySpells(spells);
    populateFilterOptions();
  })
  .catch((error) => console.error("Error loading spells:", error));

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
    const matchesCategory = (filterValue === "all") || spell.category.some(cat => cat.toLowerCase() === filterValue);
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