#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { logo } from "./logo.js";

console.log(chalk.blue(logo));

async function main(): Promise<void> {
  let numbers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter your  1st Number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter your  2nd Number:",
    },
    {
      name: "operators",
      type: "list",
      message: "Select the operator to perform calculation:",
      choices: ["+", "-", "*", "/"],
    },
  ]);
  const firstNum: number = numbers.num1;
  const secondNum: number = numbers.num2;
  const operator: string = numbers.operators;
  console.log(firstNum, operator, secondNum);
  const validInput: boolean =
    Number.isInteger(firstNum) &&
    Number.isInteger(secondNum) &&
    isOpe(operator);

  if (validInput) {
    const result = calculate(firstNum, operator, secondNum);
    console.log(chalk.green(result));
  } else {
    console.log(chalk.red("Invalid Inputs"));
    main();
  }
}

function calculate(firstNum: number, operator :string, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}
function isOpe(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}
main();
