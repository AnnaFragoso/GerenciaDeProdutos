import Product from '../models/Product';

class ProductController {
    async index(res){
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(request, response){
        //console.log(req)
        //const data = await this.productParams(request);
        //console.log(data)
        const product = await Product.create(request.body);

        return response.json(product);
    }

    async update(request, response) {
        const product = await Product.findByPk(request.params.id);

        if (product) {
            const { id, name, descricao, preco, quantidade } = await product.update(request.body);

            return response.json(
                {
                    id, 
                    name, 
                    descricao,
                    preco,
                    quantidade
                }
            )
        } else {
            return response.json('Produto não encontrado')
        }
    }

    async delete(request, response){
        await Product.destroy({ where: { id: request.params.id }});

        return response.json('Produto deletado');
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