// Assignment 3: Conditional Logic Implementation
let score = Number(prompt("Enter your test score (0-100):", "85"));
let grade;

// if...else : validate the input
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Enter a number between 0 and 100.");
} else {
  // switch : letter grade
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:  grade = "A"; break;
    case 8:  grade = "B"; break;
    case 7:  grade = "C"; break;
    case 6:  grade = "D"; break;
    default: grade = "F";
  }

  // ternary : pass / fail
  let status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
