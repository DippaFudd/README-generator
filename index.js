// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license is the project under?',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readmeContent = generateMarkdown(responses);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
