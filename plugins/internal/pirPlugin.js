/**
 * Created by Kostas on 23/10/2017.
 */

var resources = require('./../../resources/model');

var interval, sensor;
var model = resources.pi.sensors.pir;
var pluginName = resources.pi.sensors.pir.name;
var localParams = {'simulate': false, 'frequency': 2000};

exports.start = function (params) {


}