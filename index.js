var express = require('express');

module.exports= function(instanceConfig, projectConfig) {
    var router = express.Router();


    router.get('/', function (req, res) {
        res.send(JSON.stringify(req.headers));
    });

    return {routes:router};
};
