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
    elastic.addDocument(req.body).then(function (error, result) {
        res.json(result);
    });
});


function sendRequest(req, endpoint, token, callback){

    var googleKey = req.app.get("googleKey");

    var request = require("request")
    var neuraAPI = "https://wapi.theneura.com/v1/" + endpoint;
    var requestData = {
        "hello": "hello"
    };

    var request = require("request")
    //console.log("Making request to " + googleAPI)
    request({
        headers: {
            'Authorization': 'Bearer' + token
        },
        url: neuraAPI,
        method: "POST",
        json: requestData
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            if(body.hasOwnProperty('status')) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            // Error handle required
            callback(false);
        }
    })
}

module.exports = router;
