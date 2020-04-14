var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {check, validationResult} = require('express-validator');
var {User, product, userschema} = require("../../config/User.js");
var mongo = require('mongodb');
var bodyParser = require('body-parser');

router.post('/', async (req, res, next)=> {

	const email = req.body.email;
	const password = req.body.password;


	mongo.MongoClient.connect('mongodb://localhost:5000', (error, client)=>{
		
		if(error) throw(error)
		var dbfind = client.db('ecommerce')
	
		dbfind.collection('users').findOne({email: email, password: password}, (err, user)=>{
		
		if(err) {
			
			res.status(200).json({'msg': "Email/Password is incorrect"});

		}
		
		if(user != null) {

			res.status(200).json({'token': user.accessToken});
		
		} else {
		
			res.status(200).json({'msg': "Email/Password is incorrect"});
		
		}

		});
	});
});

module.exports = router;
