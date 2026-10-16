// Assignment 2: Operators, Expressions, and Input Handling
let billInput = prompt("Enter bill amount ($):", "100");
let tipInput = prompt("Enter tip percentage (%):", "15");

// Explicit type conversion
let subtotal = Number(billInput);
let tipPercent = Number(tipInput);

if (isNaN(subtotal) || isNaN(tipPercent)) {
  console.log("Invalid input! Please enter numbers only.");
} else {
  let tip = (subtotal * tipPercent) / 100;   // arithmetic operators
  let total = subtotal;
  total += tip;                              // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
