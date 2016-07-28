/**
 * Created by elad on 7/28/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var elastic = require('../es_client');

router.post('/', function(req, res, next){
    elastic.addDocument(req.body).then(function (result) {
        res.json(result);
    });
});

module.exports = router;
