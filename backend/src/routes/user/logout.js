var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {check, validationResult} = require('express-validator');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var session = require('express-session')

router.get('/', (req, res, next)=> {
	
	req.session.destroy((err) => {
        if(err) {
            res.status(200).json({"msg": "Error in Logout\nPlease try again later!!!"});
        }
        res.status(200).json({"msg": "Logout Succesfull"});
    });
	
});

module.exports = router;
