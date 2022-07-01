const usersRoutes = require('express').Router();
const Users = require('../controllers/users.controller');

usersRoutes.get('/all', Users.findAll)

usersRoutes.get('/show/:id', Users.findOne)

usersRoutes.get('/login', Users.findOne2)

usersRoutes.post('/create', Users.create)

usersRoutes.put('/update', Users.update)

usersRoutes.put('/user-senha', Users.update2)

usersRoutes.delete('/delete/:id', Users.delete)

module.exports = usersRoutes;