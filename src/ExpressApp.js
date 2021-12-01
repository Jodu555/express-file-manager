const fs = require('fs');

class ExpressApp {
    constructor(options) {
        this.options = options;
        this.information = {
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
    saveInfo() {

    }
    loadInfo() {

    }
}


module.exports = ExpressApp;