/**
 * Created by elad on 7/28/16.
 */
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){

    console.log(req.body)
        res.json(req.body);
});

module.exports = router;
