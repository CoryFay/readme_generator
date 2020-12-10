const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projName'
    },
    {
        type: 'input',
        message: 'Please give a dscription of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please explain how to install your project.',
        name: 'install'
    },
    // {
    //     type: 'input',
    //     message: 'Please explain how to use your project.',
    //     name: 'usage'
    // },
    // {
    //     type: 'checkbox',
    //     message: 'Please select which type of license you used.',
    //     choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU GPLv3'],
    //     name: 'license'
    // },
    // {
    //     type: 'input',
    //     message: 'Please explain your contribution guidelines.',
    //     name: 'contributions'
    // },
    // {
    //     type: 'input',
    //     message: 'Please explain how to run tests for your project.',
    //     name: 'tests'
    // },
    // {
    //     type: 'input',
    //     message: 'Please enter your Github Username.',
    //     name: 'username'
    // },
    // {
    //     type: 'input',
    //     message: 'Please enter your e-mail address.',
    //     name: 'eMail'
    // },
    // {
    //     type: 'input',
    //     message: 'Please enter instructions on how you might be contacted.',
    //     name: 'contactInfo'
    // },
];
let emptyData;

// function to write README file
function writeToFile(fileName, emptyData) { 
    console.log(emptyData); 
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => {
        emptyData = data;
    });
}

// function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.projName}
  
//   `;
  
//   //writeToFile();
//   }

// function call to initialize program
init();
writeToFile();