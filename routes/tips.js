/**
 * Created by elad on 7/29/16.
 */

/**
 * Created by elad on 7/28/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var tips = { tips: [
         { type: "Drink", name: "Cola" },
         { type: "Do Activity", name: "Running" }

    ]

    }
    console.log(req.body)
        res.json(tips);
});

module.exports = router;
