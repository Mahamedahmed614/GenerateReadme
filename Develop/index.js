// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        
        {
            type: "input",
            name: "title",
            message: "What is your project name?"
        },
      
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "email",
            message:"What is your email?",
        },
        
    ]);
}

function init() {
 
        const answers = await askQuestions();
        const generateContent = generateReadme(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
}
  
  init();  
