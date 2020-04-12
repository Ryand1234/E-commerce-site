var router = require('express').Router()
var mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://localhost:5000');


router.get('/view-feedbacks',  function(req, res) {
	mongodb.MongoClient.connect('mongodb://localhost:5000', (err, client)=>{
	if(err) throw(err);	
	var dbcheck = client.db('ecommerce');
	dbcheck.collection('products').find({}).toArray().then(function(feedbacks) {
 //           	dbcheck.close()
		res.status(200).json(feedbacks);
        });
    });
});


module.exports = router;

