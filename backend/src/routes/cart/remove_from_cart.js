var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var {User, product} = require("../../config/User.js");
var session = require('express-session');


router.get('/:ptoken', async (req, res, next)=> {
	product.findOne({accessToken: req.params.ptoken}, (err, prod)=> {
			if (err) 
			{
				console.log(err);
				res.send(401).json({"error": err});
			}
			else
			{
				User.findOne({accessToken:req.session.accessToken}, (er, cuser)=>{
					if (er) 
					{	
						console.log(er);
						res.status(401).send(er);
					}
					else
					{
						cuser.cart.productname.pull(prod.name);
						cuser.cart.productdetail.pull(prod);
						cuser.save();
						res.status(200).json(cuser);
					}
				});
			}
	});
});


module.exports = router;