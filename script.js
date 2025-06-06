   // Array to hold lunch items
    const lunches = [];

    // Cache DOM elements for convenience
    const input = document.getElementById("lunch-input");
    const menuDisplay = document.getElementById("menu-display");
    const randomLunchDisplay = document.getElementById("random-lunch-display");

    // Function to update the menu display on the page
    function updateMenuDisplay() {
      menuDisplay.textContent = lunches.length
        ? lunches.join(", ")
        : "The menu is empty.";
    }

    // Add lunch to the start of the array
    function addLunchToStart() {
      const value = input.value.trim();
      if (value) {
        lunches.unshift(value);
        input.value = "";
        updateMenuDisplay();
      }
    }

    // Add lunch to the end of the array
    function addLunchToEnd() {
      const value = input.value.trim();
      if (value) {
        lunches.push(value);
        input.value = "";
        updateMenuDisplay();
      }
    }

    // Remove the first lunch item
    function removeFirstLunch() {
      if (lunches.length > 0) {
        lunches.shift();
        updateMenuDisplay();
      }
    }

    // Remove the last lunch item
    function removeLastLunch() {
      if (lunches.length > 0) {
        lunches.pop();
        updateMenuDisplay();
      }
    }

    // Pick a random lunch from the array and display it
    function pickRandomLunch() {
      if (lunches.length > 0) {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        randomLunchDisplay.textContent = lunches[randomIndex];
      } else {
        randomLunchDisplay.textContent = "No lunches available.";
      }
    }

    // Attach event listeners to buttons after DOM loads
    document.getElementById("add-start-btn").addEventListener("click", addLunchToStart);
    document.getElementById("add-end-btn").addEventListener("click", addLunchToEnd);
    document.getElementById("remove-start-btn").addEventListener("click", removeFirstLunch);
    document.getElementById("remove-end-btn").addEventListener("click", removeLastLunch);
    document.getElementById("pick-random-btn").addEventListener("click", pickRandomLunch);

    // Initialize display on page load
    updateMenuDisplay();