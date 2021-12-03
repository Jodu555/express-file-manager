const process = require('process');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ExpressApp = require('./ExpressApp');

async function start() {

    //TO get some own files: path.join(__dirname, 'name')
    //TO get some files from the dir where its executed: process.cwd()

    // console.log(process.argv);
    const options = {
        dir: process.cwd(),
        middleware: ['morgan', 'helmet', 'cors'],
        type: 'REST',
    };
    if (!fs.existsSync('./describe.json')) {
        if (process.argv.includes('--y')) {
            const app = new ExpressApp(options);
            app.create();
        } else {
            inquirer.prompt(
                [
                    {
                        type: 'checkbox',
                        name: 'middlewares',
                        message: 'Please select any type of middleware you want to use!',
                        choices: ['cors', 'morgan', 'helmet', 'ejs'],
                        highlight: true
                    },
                    {
                        type: 'input',
                        name: 'entry',
                        message: 'Please define what your server entry file should be',
                        default: 'src/index.js'
                    }
                ]
            ).then((answers) => {
                if (answers.middlewares.includes('ejs')) {
                    console.log('Since youve used ejs as middleware your Server_Type is now set to SERVER instead of REST');
                    options.type = 'SERVER'; //IF EJS is used as middleware then the app type is clear
                }
                options.middleware = answers.middlewares;
                options.entry = answers.entry;
                console.log(answers);
            })
                .catch(errorCatch);
        }
    } else {

    }
}



const errorCatch = (error) => {
    console.log(error);
    if (error.isTtyError) {
        console.error('Your System does not support this type of Terminal interaction!');
    } else {
        // Something else went wrong
    }
}

start();
