
const users = require('express').Router();
const register = require('./register');
const login = require('./login');

users.post('/register', register);
users.post('/login', login);
module.exports = users