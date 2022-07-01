const  express = require('express');
const testController = require("../controllers/testController")

const router = express.Router();


router.post('/test1',testController.test1);

router.post('/test2',testController.test2);

router.post('/test3',testController.test3);


module.exports = router;
