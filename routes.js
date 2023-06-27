const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')

route.get('/teste', homeController.paginaTeste);
route.get('/home', homeController.paginaHome);
route.get('/')



module.exports = route;