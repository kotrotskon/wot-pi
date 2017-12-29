/**
 * Created by Kostas on 23/10/2017.
 */
var httpServer = require('./servers/http'),
    resources = require('./resources/model');

var ledsPlugin = require('./plugins/internal/ledsPlugin'),
    pirPlugin = require('./plugins/internal/pirPlugin'),
    dhtPlugin = require('./plugins/internal/DH11SensorPlugin');

pirPlugin.start({'simulate': true, 'frequency': 5000 });
dhtPlugin.start({'simulate': true, 'frequency': 10000});
ledsPlugin.start({'simulate': false});

var  server = httpServer.listen(resources.pi.port, function () {
    console.info('Your WoT is up and running on port %s',
    resources.pi.port);
})
