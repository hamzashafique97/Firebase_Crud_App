const  express = require('express');
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")
const router = express.Router();

router.post('/create',productController.create);
router.get('/getall',productController.getAll);
router.get('/test',userController.test);


module.exports = router;
