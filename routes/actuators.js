/**
 * Created by Kostas on 23/10/2017.
 */

var express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');

router.route('/').get(function (req, res, next) {
    req.result = resources.pi.actuators;
    next();
});

router.route('/leds').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds;
    next();
});

router.route('/leds/:id').get(function (req, res, next) { //#A
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function(req, res, next) { //#B
    console.log('put:');
    console.log(req.params);
    console.log(req.body);
    var selectedLed = resources.pi.actuators.leds[req.params.id];
    // selectedLed.value = req.body.value; //#C
    selectedLed.value = true;
    req.result = selectedLed;
    next();
}).post(function(req, res, next) {
    console.log('post:');
    console.log(req.body);
    var selectedLed = resources.pi.actuators.leds[req.params.id];
    selectedLed.value = req.body.value; //#C
    req.result = selectedLed;
    next();
});

module.exports = router;

//#A Callback for a GET request on an LED
//#B Callback for a PUT request on an LED
//#C Update the value of the selected LED in the model