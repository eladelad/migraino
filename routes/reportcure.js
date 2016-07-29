/**
 * Created by elad on 7/29/16.
 */

var express = require('express');
var router = express.Router();

var elastic = require('../es_client');

router.post('/', function(req, res, next){
    if (req.body.hasOwnProperty("user")){
        var id = req.body.user.id;
        var cure = req.body.cure;
        elastic.updateDocument(cure, "user", "users", id).then(function (error, result) {
        res.json(result);
    });
    }
});

module.exports = router;
