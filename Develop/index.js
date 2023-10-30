const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Enter the title of your project:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Provide a short description of your project:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter installation instructions:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide usage information:',
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter contribution guidelines:',
    },
    {
        name: 'test',
        type: 'input',
        message: 'Enter test instructions:',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        name: 'github',
        type: 'input',
        message: 'Enter your GitHub username:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:',
    },
];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log('README.md created successfully!');
    });
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error during prompt', error);
        })
}

init();
