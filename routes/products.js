const express = require('express');
const productRouter = express.Router(); //allows you to create child routes
const productController = require('../controllers/products');

productRouter.route('/').get(productController.get);

module.exports = productRouter;
