import express from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';
//const bodyparser = require('body-parser');

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.routes();
    }

    routes(){
        this.server.use(routes);
        //this.server.use(bodyparser.urlencoded({ extended: true }));
    }

} export default new App().server;