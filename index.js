//add requires for all modules required as well as external file that generates readme
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//single empty variable for license badge link
let license = "";

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of the project?",
    name: "name",
    default: "Read-me Generator",
    vaildate: function (response) {
      // validates for actual project name of length 5 characters or more
      if (response.length < 5) {
        console.log("\n Please enter a valid project name");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Write a description about your project",
    name: "description",
    default:
      "This projects gives prompts to the user and generates a readme based on there responses",
    vaildate: function (response) {
      //ensures user is entering a sufficent description
      if (response.length < 100) {
        console.log("\n A valid project description is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message:
      "Please advise of any installation instructions required to run your project",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please advise of any installation instructions required to run your project if applicable",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please note any sources or collaborators that helped with this project and how users can contribute further to your project",
    name: "credit",
  },
  {
    type: "input",
    message:
      "Please include any tests created along with instructions on how to run them",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license for your project",
    choices: ["GNU GPLv3", "MIT License", "The Unlicense"],
    name: "license",
  },
  {
    type: "input",
    message: "Please include a email for users to contact you on",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github username",
    name: "github",
    default: "alexwalland1997",
    vaildate: function (response) {
      //ensures user is a valid github username
      if (response.length < 5) {
        console.log("\n A valid github username is reequired.");
      } else {
        return true;
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  //wait for all prompts to be completed before printing to console
  const uResponses = await inquirer.prompt(questions);

  console.log("Thank you for your responses!");
  console.log("Now generating your readme");

  //get code for licence badge then generate the document code
  await getLicense(uResponses);
  const markdown = generateMarkdown(uResponses, license);

  //save readme file using usual readme file name
  await writeToFile("readme.md", markdown);
}

// function call to initialize program
init();
