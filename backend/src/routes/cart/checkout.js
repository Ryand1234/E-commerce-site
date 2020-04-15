var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var {User, product} = require("../../config/User.js");
var session = require('express-session');


router.get('/', async (req, res, next)=> {
	User.findOne({accessToken:req.session.accessToken}, (err, users)=> {
    if (err) 
	{	
		console.log(er);
		res.status(401).send(er);
	}
	else
	{
		var list = users.cart.productdetail;
		var total_price = 0;
		var cart_product = new Array();
		for(var i=0;i<list.length;i++)
      	{
      		total_price += parseInt(list[i].number*list[i].price);
      		cart_product.push(list[i]);
      	}
		res.json({price: total_price,
				product: cart_product });
	} 
													});
});

module.exports = router;