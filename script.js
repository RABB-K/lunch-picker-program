   // Array to hold lunch items starting with somme lunches
   let lunchMenu = [
  "Grilled Chicken Salad",
  "Veggie Sandwich",
  "Sushi Rolls",
  "Spaghetti Bolognese",
  "Falafel Wrap"
];

const menuDisplay = document.getElementById("menu-display");
const input = document.getElementById("lunch-input");
const resultMessage = document.getElementById("result-message");

// 🔁 Update visible menu
function updateMenuDisplay() {
  if (lunchMenu.length === 0) {
    menuDisplay.textContent = "The menu is empty.";
  } else {
    menuDisplay.textContent = lunchMenu.join(", ");
  }
}

// ➕ Add to end
document.getElementById("add-end-btn").addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    lunchMenu.push(value);
    resultMessage.textContent = `"${value}" added to the end of the menu.`;
    updateMenuDisplay();
    input.value = "";
  }
});

// ➕ Add to start
document.getElementById("add-start-btn").addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    lunchMenu.unshift(value);
    resultMessage.textContent = `"${value}" added to the start of the menu.`;
    updateMenuDisplay();
    input.value = "";
  }
});

// ➖ Remove last
document.getElementById("remove-end-btn").addEventListener("click", () => {
  if (lunchMenu.length) {
    const removed = lunchMenu.pop();
    resultMessage.textContent = `"${removed}" removed from the end.`;
  } else {
    resultMessage.textContent = "No lunch to remove.";
  }
  updateMenuDisplay();
});

// ➖ Remove first
document.getElementById("remove-start-btn").addEventListener("click", () => {
  if (lunchMenu.length) {
    const removed = lunchMenu.shift();
    resultMessage.textContent = `"${removed}" removed from the start.`;
  } else {
    resultMessage.textContent = "No lunch to remove.";
  }
  updateMenuDisplay();
});

// 🎲 Get random lunch
document.getElementById("random-btn").addEventListener("click", () => {
  if (lunchMenu.length) {
    const randomIndex = Math.floor(Math.random() * lunchMenu.length);
    resultMessage.textContent = `Today's lunch pick: 🍽️ ${lunchMenu[randomIndex]}`;
  } else {
    resultMessage.textContent = "No lunches available to pick.";
  }
});

// 🔁 Load menu on page load
window.addEventListener("DOMContentLoaded", updateMenuDisplay);