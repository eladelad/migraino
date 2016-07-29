/**
 * Created by elad on 7/29/16.
 */

function registerEvents(token, id){
    var events = ["userArrivedHome", "userArrivedHomeFromWork", "userArrivedToWork", "userArrivedAtGroceryStore", "userArrivedAtAirport", "userArrivedAtHospital", "userLeftAirport", "userArrivedAtClinic", "userArrivedAtRestaurant", "userLeftCafe", "userLeftHospital", "userArrivedAtCafe", "userLeftRestaurant", "userArrivedAtPharmacy", "userArrivedAtActiveZone", "userArrivedToGym", "userStartedRunning", "userStartedWalking", "userStartedTransitByWalking", "userLeftWork", "userLeftHome", "userArrivedWorkFromHome", "userFinishedRunning", "userFinishedDriving", "userStartedDriving", "userFinishedWalking", "userFinishedTransitByWalking", "userStartedWorkOut", "userIsOnTheWayToWork", "userIsOnTheWayToActiveZone", "userIsOnTheWayHome", "userLeftSchoolCampus", "userArrivedAtSchoolCampus", "userLeftActiveZone", "userLeftGym", "userWokeUp", "userStartedSleeping", "userGotUp", "userFinishedWorkOut", "userIsIdleFor2Hours", "userIsIdleFor1Hour", "userIsIdleAtHome"]
    events.forEach(function(value){
        subscribe(value, token, id);
    });
}

function subscribe(event, token){
    var endpoint = "subscriptions";
    var request = require("request")
    var neuraAPI = "https://wapi.theneura.com/v1/" + endpoint;
    var requestData = {
        "event_name": event,
        "method": "webhook",
        "identifier": id + "_" + event,
        "webhook_id": "all-events"
    };
    //var token = "0b21c72af304db9e8b4976a13f7854f4c31e072737ca77043a97522df582c6b3";
    var request = require("request")
    console.log("Subscribing to event: " + event);
    request({
        headers: {
            'Authorization': 'Bearer ' + token
        },
        url: neuraAPI,
        method: "POST",
        json: requestData
    }, function (error, response, body) {
        console.log(response.statusCode);
        if (!error && response.statusCode === 200) {
            console.log("good: " + body)
        } else {
            // Error handle required
            console.log("error: Cant subscribe to event:" + event + " Error was: " + error)
        }
    })
}

exports.registerEvents = registerEvents;