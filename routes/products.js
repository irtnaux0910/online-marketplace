const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Get all products
router.get('/', productController.getProducts);

// ... other routes

module.exports = router;