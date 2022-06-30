const { products } = require('../database/db');

module.exports = {
    async create(req, res) {
        try {
            const { name, price, description } = req.body;
            const product = {
                name,
                price,
                description
            };
            const newProduct = await products.add(product);
            res.json({
                message: "Product created successfully",
                data: newProduct
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    },

    async getAll(req, res) {
        try {
            const data = await products.get();
            res.json({
                message: "Products retrieved successfully",
                data: data
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}
