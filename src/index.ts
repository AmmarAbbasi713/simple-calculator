#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNunber" },
  { message: "Enter your second number", type: "number", name: "secondNunber" },
  {
    message: "select one of operator to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

// CODITIONAL STATEMENT
if (answer.operator === "ADDITION"){
    console.log(answer.firstNunber + answer.secondNunber);
}
else if (answer.operator === "SUBTRACTION"){
    console.log(answer.firstNunber - answer.secondNunber);
}
else if (answer.operator === "MULTIPLICATION"){
    console.log(answer.firstNunber * answer.secondNunber);
}
else if (answer.operator === "DIVISION"){
    console.log(answer.firstNunber / answer.secondNunber);
}
else{"Please select correct option"}