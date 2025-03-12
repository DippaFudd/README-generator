const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Assuming generateMarkdown is in the same directory

// Prompt the user with questions to get data for README
inquirer.prompt([
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
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who contributed to this project? (List collaborators or contributors)',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Provide badges for your project (e.g., shield.io links):',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List the features of your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
]).then((data) => {
  // Generate the markdown text from the user's input
  const markdown = generateMarkdown(data);

  // Write the markdown to a README.md file in the current project directory
  fs.writeFile('README.md', markdown, (err) => {
    if (err) {
      console.log('Error writing README file:', err);
    } else {
      console.log('README.md has been generated!');
    }
  });
});
