// products.js
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.AddNewProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductsById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.delete('/', productController.DeleteAllProducts);
router.get('/name/:name',productController.findProductsByName);
module.exports = router;