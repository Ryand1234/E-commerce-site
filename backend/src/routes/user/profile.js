var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {check, validationResult} = require('express-validator');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var session = require('express-session')

router.get('/', (req, res, next)=> {
	
	mongo.MongoClient.connect('mongodb://localhost:5000', (err, client)=>{
		if(err) throw(err);

		var dbfind = client.db('ecommerce');
		dbfind.collection('users').findOne({accessToken : req.session.accessToken}, (error,prod)=> {
		if (error) console.log(error)
		else
			{
				if(prod == null){
				
						res.status(401).json("error")
					} else {
		
					res.status(200).json(prod);
				}
		}
			
	});
	});
	
});

module.exports = router;
