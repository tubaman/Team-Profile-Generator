const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const managerPrompts = require('./ProfilePrompts/Manager.js')
const engineerPrompts = require('./ProfilePrompts/Engineer.js')
const internPrompts = require('./ProfilePrompts/Intern.js')

function init() {
    inquirer.prompt(managerPrompts).then(answer => {

        console.log(answer)


    })
}

init();





function writeToFile(fileName, reject) {
    fs.writeFile(error => {
        if (error) {
            console.log("An error has occurred");
            return callback(error);
        }
    })
}