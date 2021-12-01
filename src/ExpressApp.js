const fs = require('fs');

//Enums
const SERVER_OPTIONS = {
    REST: 'REST',
    SERVER: 'SERVER'
}

class ExpressApp {
    constructor(options = {}) {
        this.options = options;
        // morgan: true,
        // helmet: true,
        // cors: true
        this.information = {
            type: 'REST|SERVER', //REST is only with REST Endpoints | SERVER is e.g. with also html and ejs
            entry: 'src/index.js',
            database: true, //Uses the @jodu555/mysqlapi api
            dependencies: [],
            authentication: true,
            routes: [
                {
                    name: 'todo',
                }
            ]
        };

        this.setup();
        console.log(this.information);
    }
    setup() {
        if (this.options.middleware)
            this.information.dependencies = [...this.information.dependencies, ...this.options.middleware]

        this.information.type = this.options.type;
        if (this.options.middleware.includes('ejs'))
            this.options.type = SERVER_OPTIONS.SERVER;
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