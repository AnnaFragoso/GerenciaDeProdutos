import { Router } from 'express';
//import Product from './app/models/Product';
import ProductController from './app/controllers/ProductController';
const bodyparser = require('body-parser');

const routes = new Router();
routes.use(bodyparser.urlencoded({ extended: true }))

routes.post('/produtos', ProductController.store);
routes.get('/produtos', ProductController.index);
routes.put('/produtos/:id', ProductController.update);
routes.delete('/produtos/:id', ProductController.delete);
routes.get('/form', (req, res) => res.render('form'));
//routes.get('/', async(req, res) => {
//    const product = await Product.create({
//        name: 'Garfo',
//        descricao: 'pra comer' ,
//        preco: 10.00,
//        quantidade: 1
//    });

//    return res.json(product)
//})


export default routes;