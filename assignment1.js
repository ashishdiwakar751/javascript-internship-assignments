// Assignment 1: Variables, Data Types, and Console Operations
var userName = "Alice";                      // var  -> function scoped, re-assignable
let age = 25;                                // let  -> block scoped, re-assignable
const isEmployed = true;                     // const -> cannot be re-assigned
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills).replace(/,/g, ", ")} (Type: ${typeof skills})`);
