/**
 * Created by elad on 7/29/16.
 */


var initial = true;

var cures = ["Drink Coke", "Eat Vegetables", "Sleep More", "Don't Over Sleep", "Meditate", "Walk", "Drink Coffee"];
var elastic = require('./es_client');

function createUser(){
    var id = makeid();
    var email = "my@email.com";
    var gender = makeGender();
    var age = makeAge();
    var cure = makeCures();
    var user = {
        "user": {
            "id": id,
            "email": email,
            "age": age,
            "gender": gender,
            "cure": cure
        }
    };
    console.log(user);
    //elastic.addDocument(user, "user", "users", user.id).then(function (error, result) {
    //    if (!error) {
    //        console.log(user);
    //    }
    //});
}

function makeCures(){
    var curCures = [];
    var numberOfCures = Math.floor((Math.random() * 4) + 1);
    for(var i = 0; i < numberOfCures; i++) {
        var cureIndex = Math.floor(Math.random() * cures.length)
        curCures.push(cures[cureIndex])
    }
    return curCures;
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makeAge(){
    return Math.floor((Math.random() * 7) + 11)
}

function makeGender(){
    if (Math.floor((Math.random() * 2) + 1) > 1){
        return "male";
    } else {
        return "female";
    };
}

for(var i = 0; i < 5; i++) {
 createUser();
}