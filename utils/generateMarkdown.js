// generateMarkdown.js
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Badges
${data.badges}

## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}
`;
}

// Export the function
module.exports = generateMarkdown;

