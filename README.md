# C10-SVGLOGO
Challenge 10 - Boot Camp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

  1. [Description of Assignment](#description-of-assignment)
  2. [About](#about)
      1. [User Story](#user-story)
      2. [Acceptance criteria](#acceptance-criteria)
  3. [Live Screen Recording of Application Functionality](#live-screen-recording-of-application-functionality)
  4. [Screenshots](#screenshots)
  5. [Technologies Used](#technologies-used)
  6. [Installation](#installation)
  7. [Credits](#credits)
  8. [Features](#features)
  9. [Usage Information](#usage-information)
 10. [Contributing](#contribution-guidelines)
 11. [Test Instructions](#test-instructions)
 12. [License](#license)
 13. [Contact](#Contact)
 14. [Final Work Review](#final-work-review)


## Description of Assignment

This app empowers freelance web developers to create custom logos without hiring a graphic designer. It uses inquirer to prompt users for logo preferences, such as up to three characters of text, text color, and shape (triangle, square, or circle) with a corresponding color. After answering the prompts, the app generates an SVG file with the user's selections. I also implemented unit testing for the first time, with a test suite consisting of three tests to ensure accurate shapes and colors. This app showcases the potential of back-end developers and the importance of unit testing, even for small projects. I wanted to add minor error handling for the first prompt, limiting text input to three characters. Future development on this application could start with correcting my code, making the logo centered, adding on more error handling (SVG colors), additional unit testing, and adding more polygons and font styles for users to choose from.   

## About 

---
### User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Live Screen Recording of Application Functionality

> **(I have had issues with the recording. The file is too big and won't load properly. )**

## Screenshots


> **(NPM seems to not load properly. I had to reinstall and uninstall it multiple times. Which explains why I re-did my repository multiple times.)**


## Technologies Used

This assignment should utilize Node.js v16, inquirer v8.2.4 (node package manager), and file system module (node package manager), as well as jest v29.5.0 (node package manager) for conducting unit testing. As mentioned above, I've had issues installing the proper packages and files.

## Installation

1. Clone the repo:
   git clone https://github.com/SMarquis85/C10-SVGLOGO.git
2. To access, utilize VS Code. Installation is necessary if not currently installed.
3. To install node.js v16 using the terminal, refer to the documentation for the appropriate command. For instance, if you have homebrew, you can use the command 'brew install node@16'.
4. After installing node.js v16, use the command "npm init -y" in the terminal to create a package.json file for storing project files.
5. Using the terminal, run "npm i" to install the application's dependencies. For inquirer and jest, developers can install them directly from the command line using "npm i inquirer@8.2.4" for version 8.2.4 of inquirer and "npm i jest" for the latest version of jest.
6. Type "node index.js" in the terminal to run the application.

## Credits

  Built by [Sophie N. Marquis](https://github.com/SMarquis85) 

## Features

Features of this application include the users ability to generate logos quickly and easily through the use of SVG files, entirely from the command line. No UI (user interface) needed, and no front end tools needed.  

## Usage Information

To run the application, navigate to its directory using the command line, install dependencies (npm i), and run the command "node index.js". Answer the questions that follow and once done, a message will appear confirming the logo generation. Check the newly generated SVG file for your new logo.

For unit testing, refer to the Test Instructions section.

## Contributing

  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b TYPE BRANCH NAME)
  - Commit your new feature (git commit -m "WRITE COMMIT MESSAGE")
  - Push your branch (git push)
  - Create a new Pull Request

  Following a code review, your feature will be merged.

## Test Instructions

To perform unit testing, execute the command "npm run test" in the terminal. Currently, there is a single test suite containing three tests. This suite verifies that the render() method generates the correct string for the specified shape color in the associated SVG file.


## License

License used for this project - MIT
  * For more information on license types, please reference this website
  for additional licensing information: [https: //choosealicense.com/](https://choosealicense.com/).


## Contact

  * GitHub Username: [SMarquis85](https://github.com/SMarquis85)
  * Email: sophienathalie_85@outlook.com

## Final Work Review

**"Always leave the code a little cleaner than when you found it."**  This action was applied to ALL JAVASCRIPT files. To create this README file, I used Sebastian Springer's Node.js book, references we're found on Google, multiple websites including W3Schools, DEV, GitHub, Insomnia and Tutorialspoint. YouTube was helpful as well as all ZOOM recordings (of previous classes). Looks much cleaner, organised and easier to find what you are looking for. Comments were added in JAVASCRIPT to show what was done and for what purpose. I've also created different files to write the code as JAVASCRIPT is a bit confusing for me but I seem to do better when I separate everything. Very useful trick given by my tutor, Patrick Lake.

> **(CARL-VIRT-FSF-PT-04-2023, Challenge 10 / README.md 2023)**
> **(NODE.js, Sebastian Springer; First edition (2022) pages 31-101, 655-682. )**