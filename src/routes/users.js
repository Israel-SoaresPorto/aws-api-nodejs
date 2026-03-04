const route = require('express').Router();
const controller = require('../controllers/users');

// Rota para criar um novo usuário
route.post('/users', controller.createUser);

// Rota para listar todos os usuários
route.get('/users', controller.listUsers);

// Rota para buscar um usuário por ID
route.get('/users/:id', controller.getUserById);

// Rota para atualizar um usuário por ID
route.put('/users/:id', controller.updateUser);

module.exports = route;