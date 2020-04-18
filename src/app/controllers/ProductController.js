import Product from '../models/Product';

class ProductController {
    async index(res){
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(req, response){
        //try{
        //const nome = request.only;
        console.log(req)
        const product = await Product.create(req.body);

        return res.json(product);
        //} catch(error) {
        //    console.log(error)
        //}
    }

    async update(req, res) {
        
    }

    async delete(req, res){
    }
} export default new ProductController();