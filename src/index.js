const process = require('process');
const inquirer = require('inquirer');
const fs = require('fs');
const ExpressApp = require('./ExpressApp');

async function start() {
    console.log(process.argv);
    const options = {
        dir: '.',
        morgan: true,
        helmet: true,
        cors: true
    };
    if (!fs.existsSync('./describe.json')) {
        if (process.argv.includes('--y')) {
            const app = new ExpressApp(options);
            app.create();
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
    } else {

    }
}



const errorCatch = (error) => {
    if (error.isTtyError) {
        console.error('Your System does not support this type of Terminal interaction!');
    } else {
        // Something else went wrong
    }
}

start();

// console.log(process.cwd());
