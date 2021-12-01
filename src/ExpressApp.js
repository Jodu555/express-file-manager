const fs = require('fs');

class ExpressApp {
    constructor(options) {
        this.options = options;
        this.information = {
            type: 'REST|SERVER', //REST is only with REST Endpoints | SERVER is e.g. with also html and ejs
            entry: 'src/index.js',
            database: true, //Uses the @jodu555/mysqlapi api
            authentication: {

            },
            routes: [
                {
                    name: 'todo',
                }
            ]
        };
    }
    create() {

    }
    update() {

    }
    saveInfo() {

    }
    loadInfo() {

    }
}


module.exports = ExpressApp;