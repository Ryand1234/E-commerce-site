var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var {User, product} = require("../../config/User.js");
var session = require('express-session');
var mongo = require('mongodb')

router.get('/:ptoken', async (req, res, next)=> {
	mongo.MongoClient.connect('mongodb://localhost:5000', (error, client) =>{ 

		if(error) throw(error)

			var db = client.db('ecommerce')
	db.collection('products').findOne({accessToken: req.params.ptoken}, (err, prod)=> {
			if (err) 
			{
				console.log(err);
				res.send(401).send(err);
			}
			else
			{
				db.collection('users').findOne({accessToken:req.session.accessToken}, (er, cuser)=>{
					if (er) 
					{	
						console.log(er);
						res.status(401).json("Internal Server Error");
					}
					else
					{
						if(cuser.cart == undefined){
								res.status(200).json("No Product present in cart!!!!");		
								
								
					
						} else {
					
							var index_name = cuser.cart.productname.indexOf(prod.name);
							var index_prod = cuser.cart.productdetail.indexOf(prod);
							//var rem_name = 
							var len =  cuser.cart.productdetail.length;
							for(var i = 0; i < len; i++){

								if(cuser.cart.productdetail[i].name == prod.name)
								{
									
									cuser.cart.productdetail.splice(i, 1);
									cuser.cart.productname.splice(index_name, 1);
									break;
								}
							}
							
							
							var n_cart = {
									productname : cuser.cart.productname,
									productdetail : cuser.cart.productdetail
								};
								var query = { $set: {
									cart: n_cart
								}}
								
								db.collection('users').updateOne({accessToken: req.session.accessToken}, query, (err, update)=>{
									if(err) throw(err)
									res.status(200).send("Product Added");		
								});					
						}
						
				}
			});
		}
	});
});
});


module.exports = router;