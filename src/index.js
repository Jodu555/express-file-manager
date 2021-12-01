const process = require('process');

const inquirer = require('inquirer');

async function start() {
    console.log(process.argv);
    if (process.argv.includes('--y')) {

    } else {
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
}



const errorCatch = (error) => {
    if (error.isTtyError) {
        console.error('Your System does not support this type of Terminal interaction!');
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
}

start();

// console.log(process.cwd());
