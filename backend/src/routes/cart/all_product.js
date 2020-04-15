var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var {User, product} = require("../../config/User.js");
var session = require('express-session');
var mongo = require('mongodb')

router.get('/', async (req, res, next)=> {
	 
	 mongo.MongoClient.connect('mongodb://localhost:5000', (error, client)=>{
	 	if(error) throw(error)
		var db = client.db('ecommerce');
	 db.collection('users').findOne({accessToken:req.session.accessToken}, (err, users)=> {
    if (err) 
	{	
		console.log(er);
		res.status(401).json(er);
	}
	else
	{
		if(users == null){
			res.status(401).json("error")
		} else {
		var list = users.cart.productdetail;
		res.status(200).json(list);
		}
	}
	
								});
	});
});


module.exports = router;