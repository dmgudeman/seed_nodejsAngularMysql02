
const users = require('express').Router();
const register = require('./register');
const login = require('./login');

users.post('/login', login);
users.post('/', register);
module.exports = users