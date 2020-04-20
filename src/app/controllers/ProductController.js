import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
    async index(response, view){
        const products = await Product.findAll();
       return view.render('index',{ products })
    }

    async store(request, response){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            descricao: Yup.string(),
            preco: Yup.number().required(),
            quantidade: Yup.number()
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({error: "Falha na validação"});
        }

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
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                descricao: Yup.string(),
                preco: Yup.number().required(),
                quantidade: Yup.number()
            });
    
            if (!( await schema.isValid(request.body))) {
                return response.status(400).json({error: "Falha na validação"});
            }

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