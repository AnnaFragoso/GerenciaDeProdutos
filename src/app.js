import express from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes(){
        this.server.use(routes);
    }

} export default new App().server;