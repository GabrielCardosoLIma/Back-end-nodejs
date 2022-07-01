const categoriesRoutes = require('express').Router();
const Categories = require('../controllers/categories.controller');

categoriesRoutes.get('/all', Categories.findAll)

categoriesRoutes.get('/show/:id', Categories.findOne)

categoriesRoutes.post('/create', Categories.create)

categoriesRoutes.put('/update', Categories.update)

categoriesRoutes.delete('/delete/:id', Categories.delete)

module.exports = categoriesRoutes;