import { greeting, capitalizeWords } from "./utils.js";
import inquirer from "inquirer";

console.log(greeting("Ethan"));
console.log(capitalizeWords("node.js is great"));

inquirer
  .prompt([{ type: "input", name: "userName", message: "What is your name?" }])
  .then((answers) => console.log(greeting(answers.userName)));