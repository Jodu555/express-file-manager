const process = require('process');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ExpressApp = require('./ExpressApp');

async function start() {

    //TO get some own files: path.join(__dirname, 'name')
    //TO get some files from the dir where its executed: process.cwd()

    console.log(process.argv);
    const options = {
        dir: process.cwd(),
        middleware: ['morgan', 'helmet', 'cors'],
        type: 'REST',
        ejs: false
    };
    if (!fs.existsSync('./describe.json')) {
        if (process.argv.includes('--y')) {
            const app = new ExpressApp(options);
            app.create();
        } else {
            inquirer
                .prompt(
                    [

                        {
                            type: 'checkbox',
                            name: 'middlewares',
                            message: 'Please select any type of middleware you want to use!',
                            choices: ['cors', 'morgan', 'helmet', 'ejs'],
                            highlight: true,
                            default: ['morgan'],
                        }
                    ])
                .then((answers) => {
                    if (answers.middleware.includes('ejs'))
                        options.type = 'SERVER'; //IF EJS is used as middleware then the app type is clear
                    console.log(answers);
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
