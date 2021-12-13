# express-file-manager
An CLI Tool to create a new express server or add routes or something like that

## TODO
* [ ] CLI Tool
* [ ] General Express App
    * [ ] Morgan Support
    * [ ] Helmet Support
    * [ ] Cors Support
* [ ] All Authentication / Authorization required generation
* [ ] controller creation for more cleaner look
* [ ] Auto Setup with database


## Folder Structure 

```
├── src
│   ├── index.js  : App Entry Point
│   ├── utils  : All Utility files
|   |   ├── authManager.js  : Authentication-Handling
|   |   └── middleware.js  : Not Found and Error Middleware
|   ├── database  : All Database related Stuff
|   |   └── index.js  : Table definitions and Schemas
|   └── routes  : All Routes
|       └── exampleRoute  : one Route
|           ├── index.js  : Where the router livs and the function calls
|           └── controller.js  : Where the functions live
├── static  : All static files
├── views  : All ejs files
|   ├── pages : All Real pages
|   └── partials  : Partials which are used in the pages
├── .env  : The Environment Variables
└── README.md
```
