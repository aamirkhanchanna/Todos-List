#! /usr/bin/env node
import inquirer from "inquirer";
const toDos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([{
            type: "toDo",
            message: "What would you like to do?",
            name: "toDo"
        },
        {
            type: "confirm",
            message: "Would you like to add another to do?",
            name: "another",
            default: false
        }]);
    const { another, toDo } = answers;
    console.log(answers);
    loop = another;
    if (toDo) {
        toDos.push(toDo);
    }
    else {
        console.log(`" Kindly add valid input " `);
    }
}
// console.log(toDos);
if (toDos.length > 0) {
    console.log(" your todo list: \n ");
    toDos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log(" no todos found ");
}
