import { Router } from 'express';
//import Product from './app/models/Product';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.post('/produtos', ProductController.store);
//routes.post('/produtos', (req, res) => { console.log(req) });
routes.get('/produtos', ProductController.index);
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