const inquirer = require('inquirer');
const fs = require('fs');

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
  // Add more questions for installation, usage, contribution guidelines, test instructions, license, GitHub username, and email address.
];
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}
async function init() {
  try {
    // Prompt the user for information
    const answers = await inquirer.prompt(questions);

    // Generate the README content based on user input
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

<!-- Continue with other sections as described in the previous example -->

`;

    // Write the README file
    writeToFile('README.md', readmeContent);

    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function call to initialize app
init();
