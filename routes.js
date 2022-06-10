const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');
const contactController = require('./src/controllers/contactController');

const {loginRequired} = require('./src/middleware/middleware');

// Rotas da Home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index',loginController.index);
route.post('/login/login',loginController.login);
route.get('/login/logout',loginController.logout);

// Rotas de Register
route.get('/register/index',registerController.index);
route.post('/register/register',registerController.register);

// Rotas de Contato
route.get('/contact/index', loginRequired, contactController.index);
route.post('/contact/register', contactController.register);
route.get('/contact/index/:id', contactController.editContact);
route.post('/contact/edit/:id', contactController.updateContact);
route.get('/contact/delete/:id', contactController.deleteContact);
module.exports = route;