//Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

//Array of questions for Inquirer
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Write instructions for installation."
    },
    {
        type: "input",
        name: "usage",
        message: "Explain the usage of your project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain the guidelines for contribution to your project."
    },
    {
        type: "input",
        name: "test",
        message: "If you have included tests for your project, write instructions on how to run them."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: [
            "GNUGPLv3",
            "GNUAGPLv3",
            "GNULGPLv3",
            "Mozilla",
            "Apache",
            "MIT",
            "Boost",
            "Unlicense",
            "None"
        ]
    },
    {
        type: "input",
        name: "gitname",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Created README.md', data)
    );
}

// Initialize app, call Inquirer, call writeToFile function
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((data => writeToFile("README.md", data))
        );
};

// Function call to initialize app
init();
