let supplies = ["Pens", "Papers", "Stapler"];
function addSupply(supply) {
  supplies.push(supply);
  console.log(`${supply} added to the inventory.`);
}

function removeSupply(supply) {
  let index = supplies.indexOf(supply);
  if (index !== -1) {
    supplies.splice(index, 1);
    console.log(`${supply} removed from the inventory.`);
  } else {
    console.log(`${supply} not found in the inventory.`);
  }
}

function displaySupplies() {
  console.log("Office Supplies Inventory:");
  for (let supply of supplies) {
    console.log(supply);
  }
}
displaySupplies();
addSupply("Markers");
displaySupplies();
removeSupply("Papers");
displaySupplies();
