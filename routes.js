const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')

route.get('/teste', homeController.paginaTeste)

module.exports = route;