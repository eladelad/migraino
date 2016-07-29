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
    var documentJson = req.body;
    var indexTime = new Date().toISOString();
    indexTime = indexTime.substring(0, indexTime.indexOf('T'));
    var indexName = 'migraino-' + indexTime;
    var cur_date = new Date();
    documentJson.date = cur_date.toISOString();
    elastic.addDocument(documentJson, "event", indexName).then(function (error, result) {
        res.json(result);
    });
});
module.exports = router;


