// Capstone: Interactive Product Inventory & Analytics Dashboard
console.log("--- Initializing Inventory System ---");

// 1) DATA & INPUT --------------------------------------------------
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// 3) LOOPS & FLOW CONTROL : retry bad input (max 3 attempts), break when valid
let newName = "";
let newPrice = NaN;
for (let attempt = 1; attempt <= 3; attempt++) {
  const nameInput = prompt("Enter new product name:", "Monitor");
  const priceInput = prompt("Enter product price ($):", "150");

  if (nameInput === null || nameInput.trim() === "") {
    console.log(`Attempt ${attempt}: Product name is missing. Try again.`);
    continue;                                  // skip bad input
  }
  newPrice = Number(priceInput);               // explicit conversion

  // 2) CONTROL FLOW : validation with if...else
  if (priceInput === null || priceInput.trim() === "" || isNaN(newPrice) || newPrice <= 0) {
    console.log(`Attempt ${attempt}: Invalid price. Try again.`);
    continue;
  }
  newName = nameInput.trim();
  break;                                       // valid -> stop retrying
}

// 3) LOOPS : search the inventory for a duplicate before adding
let duplicate = false;
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].name.toLowerCase() === newName.toLowerCase()) {
    duplicate = true;
    break;
  }
}

if (newName === "" || isNaN(newPrice) || newPrice <= 0) {
  console.log("No valid product entered. Continuing with existing inventory.");
} else if (duplicate) {
  console.log(`"${newName}" already exists. Not added again.`);
} else {
  inventory.push({ name: newName, price: newPrice });
  console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);
}

// 2) CONTROL FLOW : category badge using switch(true)
function getCategory(price) {
  switch (true) {
    case price >= 500: return "Premium";
    case price > 50:   return "Standard";
    default:           return "Budget";
  }
}

// 5) ARRAY METHODS : forEach inventory sheet
console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

// 4) FUNCTIONS & SCOPE : regular + arrow functions
function calculateTotal(items) {
  let total = 0;                               // local scope, not leaked outside
  for (const item of items) total += item.price;
  return total;
}
const applyTaxDiscount = (amount, taxPercent = 0, discountPercent = 0) =>
  amount + (amount * taxPercent) / 100 - (amount * discountPercent) / 100;

console.log("");
console.log("--- Financial Analytics ---");
console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

// 5) filter() and map()
const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable).replace(/,/g, ", ")}`);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(report).replace(/,/g, ", ")}`);

// Bonus: tax & discount demo
console.log("");
console.log("--- Bonus: With 18% Tax and 10% Discount ---");
console.log(`Final Payable Amount: $${applyTaxDiscount(calculateTotal(inventory), 18, 10).toFixed(2)}`);
