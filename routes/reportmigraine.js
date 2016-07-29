/**
 * Created by elad on 7/29/16.
 */

var express = require('express');
var router = express.Router();

var elastic = require('../es_client');

router.post('/', function(req, res, next){
    var indexTime = new Date().toISOString();
    indexTime = indexTime.substring(0, indexTime.indexOf('T'));
    var indexName = 'migraino-' + indexTime;
    var cur_date = new Date();
    var documentJson = {
        user: {
            id: "test_id"
        },
        migraine: req.body
    };
    documentJson.migraine.time = cur_date.getHours();
    documentJson.date = cur_date.toISOString();
    elastic.addDocument(documentJson, "migraine", indexName).then(function (result, error) {
        console.log("Error: " + error);
        console.log("Result: " + result);
        res.json(result);
    });
});

module.exports = router;
