// Import required modules
const fs = require('fs');  // File system module
const readlineSync = require('readline-sync');  // Synchronous user input module
const text = require('./lib/text');  // Custom text module
const shapes = require('./lib/shapes');  // Custom shape module
const basicTemplate = require('./lib/svgGenerator');  // Custom SVG template module

// Function to generate SVG shapes
function generateShapes(shape, shapeColor) {
  // Check the shape type and return the corresponding SVG code
  return shapes.generateShapes(shape, shapeColor);
}

// Get user inputs for initials, character color, shape, and shape color
const initials = readlineSync.question('What are the three characters you want to use? ');
const charColor = readlineSync.question('What do you want the character color to be? (You can also type the hex number) ');
const shape = readlineSync.question('What is the shape you want to use? (Triangle, Circle, Square) ');
const shapeColor = readlineSync.question('What do you want the shape color to be? (You can also type the hex number) ');

// Function to handle user input for shape and shape color
function shapeUserInput(shapeInput, shapeColorInput) {
  // Check if the shape is valid and return the corresponding SVG shape code
  return shapes.generateShapes(shapeInput, shapeColorInput);
}

// Generate the SVG logo based on user inputs
const textEl = text.getTextEl(initials);
const colorTextEl = textEl.replace('white', charColor);
const svgLogo = basicTemplate.writeBaseTemplate(shapeUserInput(shape, shapeColor), colorTextEl);

// Output the generated SVG logo
console.log(svgLogo);

// Write the SVG logo to a file named 'logo.svg'
fs.writeFile('logo.svg', svgLogo, (err) => {
  if (err) throw err;
  console.log('Generated logo.svg');
});