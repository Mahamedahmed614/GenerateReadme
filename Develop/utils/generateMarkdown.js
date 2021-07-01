// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name}
## Project Description
${data.descrip}
## Table of Contents
  1. Licenses
  2. Required Technologies
  3. Installation
  4. Tests
  5. Usage
  6. Contributions
  7. Questions
## Licenses
  ${data.license}  
  ${renderLicenseBadge(data.license)}
## Required Technologies
  ${data.tech}
## Installation
Commands to Run to Install Dependencies:
>${data.depend}
## Tests
Commands to run to run appropriate tests:
>${data.tests}
## Usage
${data.usage}
## Contributions
${data.contribution}
## Questions
For questions regarding the usage of this repo, github account name is:
${data.github}
`;
}

module.exports = generateMarkdown;
