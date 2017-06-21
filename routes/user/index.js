
const user = require('express').Router();
const register = require('./register');
const login = require('./login');

user.post('/register', register);
user.post('/login', login);
module.exports = user