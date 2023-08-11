const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require("./generateMarkdown");

const licenses = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  'GPL v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
};

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage informations: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing: ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions: ',
  },
  {
    type: 'list',
    name: "license",
    message: "please select a license applicable to this project",
    choices: Object.keys(licenses)
  },
  {
    type: "input",
    name: "github",
    message: "Please enter GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter email address: ",
  },
];
//initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("creating professional README.md file...");
    const markdownContent = generateMarkdown(responses);
    fs.writeFileSync("./README.md", markdownContent);
    console.log("README.md file created successfully!");
  });
}
init();


   