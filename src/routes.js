import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
const bodyparser = require('body-parser');

const routes = new Router();
routes.use(bodyparser.urlencoded({ extended: true }))

routes.post('/produtos', ProductController.store);
routes.get('/produtos', ProductController.index);
routes.get('/edit/produtos/:id', ProductController.edit);
routes.post('/update/produtos/:id', ProductController.update);
routes.get('/delete/produtos/:id', ProductController.delete);
routes.get('/form', (req, res) => res.render('form'));


export default routes;