const express = require('express');
const upload = require('../middlewares/fileupload');
const {addproductss,getAllProducts, getProductById} = require('../controllers/products.controller');
const router = express.Router();
router.post('/',upload.single('image'),addproductss);
router.get('/',getAllProducts);
router.get('/:id',getProductById);
module.exports = router;