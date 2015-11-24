'use strict';

var express = require('express');

module.exports = function (app) {
    var dashboardDir = __dirname + '/../dashboard';
    app.use('/', express.static(dashboardDir));
};
