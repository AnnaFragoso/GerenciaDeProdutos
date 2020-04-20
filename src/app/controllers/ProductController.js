import Product from '../models/Product';
import { request } from 'express';

class ProductController {
    async index(response, view){
        const products = await Product.findAll();
       return view.render('index',{ products })
    }

    async store(request, response){
        const product = await Product.create(request.body);
        return response.redirect('/produtos');
    }

    async edit(request, view) {
        const data = await request.params;
        return view.render('editForm', { data });
    }

    async update(request, response) {
        const product = await Product.findByPk(request.params.id);

        if (product) {
            await product.update(request.body);

            return response.redirect('/produtos');
            
        } else {
            return response.json('Produto não encontrado')
        }
    }

    async delete(request, response){
        await Product.destroy({ where: { id: request.params.id }});

        return response.redirect('/produtos');
    }
} export default new ProductController();