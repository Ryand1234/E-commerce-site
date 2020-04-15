var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var productRouter = require('./routes/products/product');
var allProductRouter = require('./routes/products/all_products');
var oneProductRouter = require('./routes/products/one_products');
var registerRouter = require('./routes/user/register');
var addCartRouter = require('./routes/cart/add_to_cart');
var allCartRouter = require('./routes/cart/all_product');
var checkoutRouter = require('./routes/cart/checkout');
var remCartRouter = require('./routes/cart/remove_from_cart');
var loginRouter = require('./routes/user/login');
var logoutRouter = require('./routes/user/logout');
var profileRouter = require('./routes/user/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'helloWorld', resave:true, saveUninitialized: true}));

app.use('/product', productRouter);
app.use('/product/search', oneProductRouter);
app.use('/users/register', registerRouter);
app.use('/users/login', loginRouter)
app.use('/users/logout', logoutRouter)
app.use('/users', profileRouter)
app.use('/cart/remove/', remCartRouter);
app.use('/cart/add/', addCartRouter);
app.use('/cart/checkout', checkoutRouter);
app.use('/cart/all', allCartRouter);
app.use('/all-prod',allProductRouter);


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:5000/ecommerce",{ useUnifiedTopology: true, useNewUrlParser: true}, (err,db)=>{
	if(err){
		console.log("ERROR: ",err);
	}else{
		console.log("CONNECTED");
		console.log(db.readyState);
		db.close();
		}
	});

var db = mongoose.connection;

db.on('error.name', console.error.bind(console.name, 'Mongodb connection error'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("Message: ",err.message);
  console.log("ERROR: ",res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
