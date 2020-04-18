import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                descricao: Sequelize.STRING,
                preco: Sequelize.FLOAT,
                quantidade: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
    }
} export default Product;