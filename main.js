#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const ans = await inquirer.prompt([
    {
        name: "sent",
        type: "input",
        message: chalk.greenBright.bold("enter your sentence to count the words")
    }
]);
const done = ans.sent.trim().split(" ");
console.log(done);
console.log(`your sentence word count is ${done.length}`);
