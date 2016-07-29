/**
 * Created by elad on 7/29/16.
 */

/**
 * Created by elad on 7/28/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var cur_date = new Date().toISOString();
    var events = { events: [
         { date: cur_date, name: "test" },
         { date: cur_date, name: "test2" }

    ]

    }
    console.log(req.body)
        res.json(events);
});

module.exports = router;
