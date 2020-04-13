var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var {product, User} = require("../../config/User.js")
var mongo = require('mongodb');
/* GET users listing. */

router.post('/add',
[
  check('name').isLength({min: 1}),
  check('detail').isLength({min: 6}),
  check('price').isNumeric(),
  
  
],
 async (req, res, next) => {
	
	const error = validationResult(req);
	if(!error.isEmpty())
	{
		console.log("Error: ",error.array());
		res.status(401).json(error);
	}
	else
	{
		nprodinfo = {}
		nprodinfo.accessToken = req.body.token;
		nprodinfo.name = req.body.name;
		nprodinfo.price = req.body.price;
		nprodinfo.detail = req.body.detail;
		console.log(nprodinfo);


		mongo.MongoClient.connect('mongodb://localhost:5000', (err, client)=>{
			if(err) throw(err);
			var prodb = client.db('ecommerce');

			prodb.collection('products').insertOne(nprodinfo, (error, result)=>{
				if(error) {
					res.status(301).send("Internal Server Error");
				} else {
					res.status(200).send("Product Added");
				}
			});
		});
		
			
	}
	

});


module.exports = router;
