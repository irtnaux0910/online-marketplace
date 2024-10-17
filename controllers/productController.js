const Product = require('../models/product');

exports.AddNewProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.description) {
      product.description = req.body.description;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }
    if (req.body.quantity) {
      product.quantity = req.body.quantity;
    }
    if (req.body.category) {
      product.category = req.body.category;
    }
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.DeleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    res.json({ message: 'All products deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.findProductsByName= async (req, res) => {
  try {
    const productName = req.params.name;
    const products = await Product.findOne({ name: new RegExp('^' + productName + '$', 'i') });
    if (products) {
      res.json(products);
    }
    else {
      res.status(404).json({ message: 'Product not found' });
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

