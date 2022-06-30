const { products } = require('../database/db');


module.exports = {
    async create(req, res) {
        try {
            
            
            // const { name, price, description } = req.body;
            // const product = {
            //     name,
            //     price,
            //     description
            // };
            
            await products.add(req.body);
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
            const data = await await (await products.get()).docs.map(doc => doc.data());

            console.log(data);
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
    },
}
