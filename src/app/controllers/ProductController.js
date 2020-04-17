import Product from '../models/Product';

class ProductController {
    async index(req, res){
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(req, res){
        const product = await Product.create(req);

        return res.json(product);
    }

    async update(req, res) {
        
    }

    async delete(req, res){
        const appointment = await Appointment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'email']
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                }
            ]
        });

        if(appointment.user_id !== req.userId){
            return res.status(401).json({
                error: "You don't have permission to cancel this appointment"
            });
        }

        const dateWithSub = subHours(appointment.date, 2);

        if(isBefore(dateWithSub, new Date())) {
            return res.status(401).json({
                error: 'You can only cancel appointments 2 hours in advance'
            });
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        await Queue.add(CancellationMail.key, {
            appointment,
        })

        return res.json(appointment);
    }
} export default new ProductController();