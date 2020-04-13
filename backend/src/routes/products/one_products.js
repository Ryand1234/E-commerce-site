var express = require('express');
var router = express.Router();
var mongo = require('mongodb');


router.get('/:token', (req, res, next)=> {
	
	mongo.MongoClient.connect('mongodb://localhost:5000', (err, client)=>{
		if(err) throw(err);

		var dbfind = client.db('ecommerce');
		dbfind.collection('products').findOne({name : req.params.token}, (error,prod)=> {
		if (error) console.log(error)
		else
			{
				res.status(200).json(prod);
			}
			
	});
	});
	
});

module.exports = router;
