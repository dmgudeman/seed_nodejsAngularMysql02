
const path = require('path');

module.exports = {
    'config': path.resolve('./bin/www', './config/config.json'),
    'migrations-path': path.resolve('./bin/www', './migrations'),
    'models-path': path.resolve('./bin/www', './models')
}