const fs = require('fs');

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
        this.options.morgan ? this.information.dependencies.push('morgan') : null;
        this.options.helmet ? this.information.dependencies.push('helmet') : null;
        this.options.cors ? this.information.dependencies.push('cors') : null;

        this.information.type = this.options.type;
        if (this.options.type == 'SERVER')
            this.options.ejs ? this.information.dependencies.push('ejs') : null;
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