const express = require('express');
const expressJWT = require('express-jwt');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/');
const appRoutes = require('./routes/app');
// const userRoutes = require('./routes/user'); 
const jwt = require('jsonwebtoken');

const app = express();
const mysql = require('mysql');

const User = require('./models').User;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'better_invoice02',
    debug: true
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

// app.use(expressJWT({ secret: 'secret'}).unless({path: ['/user/login', 'login', '/user/register', '/register', 'register']}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/user_invoices', express.static(path.join(__dirname, 'user_invoices')));

app.use('/', routes)
// app.post('/address', routes.createAddress);
// app.get('/address/:addressId', routes.getAddressByCoId);
// app.put('/address/:addressId', routes.updateAddress);
// // app.get('/companies', routes.getAllCompanies);
// app.get('/companies/:companyId', routes.getCompanyById);
// app.get('/companies', routes.getCompaniesByUserId);
// app.post('/companies', routes.createCompany);
// app.put('/companies/:companyId', routes.updateCompany);
// app.get('/items/:itemId', routes.getItemById);
// app.post('/items', routes.createItem);
// app.put('/items/:itemId', routes.updateItem);
// app.post('/invoices', routes.createInvoice);
// app.get('/invoices', routes.getAllInvoices);
// app.get('/invoices/:invoiceId', routes.getInvoiceById);
// app.post('/user/login', routes.login);
// app.post('/user', routes.register);

// app.use('/', appRoutes);

// catch 404 and route back to the front end to be handled 
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;


// https://jwt.io/introduction/