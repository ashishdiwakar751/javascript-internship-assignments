// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Scope demonstration
{
  let blockVar = "I live only inside this block";
}
try {
  console.log(blockVar);                     // block scope limit
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}
