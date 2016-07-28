/**
 * Created by elad on 7/28/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body)
        res.json(req.body);
});

router.post('/', function(req, res, next){
    console.log(req.body)
        res.json(req.body);
});

module.exports = router;
