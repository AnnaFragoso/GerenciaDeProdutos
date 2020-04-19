import Product from '../models/Product';
import { request } from 'express';

class ProductController {
    async index(response, view){
        const products = await Product.findAll();
       // return res.json(products);
       //response.send(view.render('index', { products })
       return view.render('index',{ products })
    }

    async store(request, response){
        //console.log(req)
        //const data = await this.productParams(request);
        //console.log(data)
        const product = await Product.create(request.body);
        return response.redirect('/produtos');
        //await index();
    }

    async edit(request, view) {
        console.log(request.params.id)
        const data = await request.params;
        console.log(data)
        return view.render('editForm', { data });
    }

    async update(request, response) {
        const product = await Product.findByPk(request.params.id);

        if (product) {
            //const { id, name, descricao, preco, quantidade } = 
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

    async productParams(request) {
        return request.only([
            'name',
            'descricao',
            'preco',
            'quantidade'
        ])
    }
} export default new ProductController();