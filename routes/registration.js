/**
 * Created by elad on 7/29/16.
 */

var express = require('express');
var router = express.Router();

var elastic = require('../es_client');
var register = require('../register');

router.post('/', function(req, res, next){
    if (req.body.hasOwnProperty("user")){
        var user = req.body.user;
        user.cure = []
        elastic.addDocument(user, "user", "users", user.id).then(function (error, result) {
        res.json(result);
    });
    }
    console.log("Registration started");
    register.registerEvents(user.token);

});

module.exports = router;
