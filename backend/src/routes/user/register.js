var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {check, validationResult} = require('express-validator');
var {User, product, userschema} = require("../../config/User.js");
var mongo = require('mongodb');
var bodyParser = require('body-parser');

router.post('/', bodyParser.json(), 
[
  check('name').isLength({min: 3}),
  check('email').isLength({min: 1}).isEmail(),
  check('password').isLength({min: 6}),
  check('number').isLength({min:10, max:10}).isNumeric(),
  
  
],
 async (req, res, next) => {

	const error = validationResult(req);
	if(!error.isEmpty())
	{
		console.log("Error: ",error.array());
		res.status(401);
	}
	else
	{
		var exist = true;
		var total_token = 0;
		var new_token = Math.floor(Math.random()*500000);
		console.log("token: "+ new_token);
		
		//while(exist){
			console.log("EXIST: ",exist);
	/*		if(total_token>5)
			{
				res.status(301).send("Database Full");
			//	break;
			}*/
		nuserinfo = {}
		nuserinfo.accessToken = new_token.toString(10);
		nuserinfo.name = req.body.name;
		nuserinfo.sex = req.body.sex;
		nuserinfo.dob = req.body.dob;
		nuserinfo.email = req.body.email;
		nuserinfo.password = req.body.password;
		nuserinfo.number = req.body.number;
		console.log(nuserinfo);

		mongo.MongoClient.connect('mongodb://localhost:5000',(error, client)=>{
			if(error) throw(error)

			var db = client.db('ecommerce');
	//		while(exist){
			
				db.collection('users').findOne({'accessToken': new_token}, (nerror, result)=>{
						if(result){
							new_token = Math.floor(Math.random()*5);
							total_token += 1;
							res.status(301).json({'msg': 'Internal Server Error Occured!!!'})
						} else {
							db.collection('users').insertOne(nuserinfo, (err, record)=>{

								if(err){
										res.status(301).json({'msg': 'Internal Server Error Occured!!!'})
										
										} else {
										 	exist=false;
											res.status(200).json({'msg': 'User Registered'});
											}
							});
						}
				});

		//	}

			});

		//}
	}
	

});

module.exports = router;
