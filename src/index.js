const process = require('process');

const inquirer = require('inquirer');

async function start() {
    await inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'morgan',
                message: 'Do you want morgan',
                default: true,
            }
        ])
        .then((answers) => {
            console.log(answers);
            // Use user feedback for... whatever!!
        })
        .catch(errorCatch);
}



const errorCatch = (error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
}

start();

// console.log(process.cwd());
