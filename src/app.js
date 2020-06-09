import express from 'express';
import 'express-async-errors';
import routes from './routes';
import cors from 'cors';
import './database';

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.server.use(cors());
        this.routes();
    }

    routes(){
        this.server.use(routes);
    }

} export default new App().server;