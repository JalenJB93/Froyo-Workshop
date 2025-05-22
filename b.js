function countFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor) {
      counts[flavor] = (counts[flavor] || 0) + 1;
    }
  }
  return counts;
}

function handleFlavorCount() {
  const input = document.getElementById("flavorInput").value;
  const flavorsArray = input
    .toLowerCase()
    .split(",")
    .map((f) => f.trim());
  const flavorCounts = countFlavors(flavorsArray);

  console.clear();
  console.log("Froyo Flavor Counts:");
  for (const flavor in flavorCounts) {
    console.log(`${flavor}: ${flavorCounts[flavor]}`);
  }

  // Optional: Show results on the page
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Flavor Counts:</h3>";
  const ul = document.createElement("ul");
  for (const flavor in flavorCounts) {
    const li = document.createElement("li");
    li.textContent = `${flavor}: ${flavorCounts[flavor]}`;
    ul.appendChild(li);
  }
  outputDiv.appendChild(ul);
}

document
  .getElementById("countButton")
  .addEventListener("click", handleFlavorCount);
