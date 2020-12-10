const inquirer = require('inquirer');
const fs = require('fs');
// const { fileURLToPath } = require('url');

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
    {
        type: 'input',
        message: 'Please explain how to use your project.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Please select which type of license you used.',
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU GPLv3'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please explain your contribution guidelines.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Please explain how to run tests for your project.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your Github Username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your e-mail address.',
        name: 'eMail'
    },
    {
        type: 'input',
        message: 'Please enter instructions on how you might be contacted.',
        name: 'contactInfo'
    },
];

function init() {
    inquirer.prompt(questions)
        .then(({
            projName,
            description,
            install,
            usage,
            license,
            contributions,
            tests,
            contactInfo,
            username,
            eMail

        }) => 
        {
const template =
`# ${projName}
                
# Table of Contents
* [Description](description)
* [Installation](install)
* [Usage](usage)
* [License](license)
* [Contributions](contributions)
* [Tests](tests)
* [Contact Information](contactInfo)

## Description
* ![License: ${license}](https://img.shields.io/badge/License-${license}-hotpink.svg)
 ${description}

## Installation
 ${install}

## Usage
 ${usage}

## License
 ${license}

## Contributions
 ${contributions}

## Tests
 ${tests}

## Contact Information
 ${contactInfo}
* Github: ${username}
* Email: ${eMail}
`
            makeTheFile(projName, template);
        }
        )
    } 

    function makeTheFile(name, data){
        fs.writeFile('README.md', data, (err) => {
            if (err){
                console.log(err);
            }
            console.log("README has been successfully generated.")
        })
    }

init();
