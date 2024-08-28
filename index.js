const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
]).then(answers => {
  // Generate SVG based on the user's input
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});

// Function to generate SVG content
function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement = '';
  switch (shape) {
    case 'Circle':
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'Triangle':
      shapeElement = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
      break;
    case 'Square':
      shapeElement = `<rect x="75" y="50" width="150" height="150" fill="${shapeColor}" />`;
      break;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}