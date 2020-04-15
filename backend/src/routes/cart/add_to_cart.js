var express = require('express');
var router = express.Router();
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
								console.log("CART: ",cuser.cart)
								var name = [prod.name];
								var detail = [prod];
								var n_cart = {
									productname : name,
									productdetail : detail
								};
								var query = { $set: {
									cart: n_cart
								}}
								db.collection('users').updateOne({accessToken: req.session.accessToken}, query, (err, update)=>{
									if(err) throw(err)
									res.status(200).send("Product Added");		
								});
								
					
						} else {
							if (!cuser.cart.productname.includes(prod.name))
						{

							var ex_name = cuser.cart.productname;
							var ex_detail = cuser.cart.productdetail
							cuser.cart.productname.push(prod.name);
							cuser.cart.productdetail.push(prod);
							

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
/*							var prodlist = cuser.cart.productdetail;
							for(var i=0;i<prodlist.length;i++)
							{
								var index;
								if (prod.accessToken == prodlist[i].accessToken)
								{
									prodlist[i].number = req.body.num;
								}
							}
						}
						else{

							var prodlist = cuser.cart.productdetail;
							for(var i=0;i<prodlist.length;i++)
							{
								var index;
								if (prod.accessToken == prodlist[i].accessToken)
								{
									prodlist[i].number = parseInt(prodlist[i].number) + parseInt(req.body.num);
								}
							}
						}
*/						
					//	cuser.save();
						//res.status(200).send("Product Added");
						
					}
						}
						
				}
			});
		}
	});
});
});

module.exports = router;
