'use strict';

var Promise = require('bluebird');
Promise.longStackTraces();
Promise.promisifyAll(require('fs'));
require('fast-url-parser').replace(); // This is a faster URL parser
var express = require('express');
var app = express();
require('./app')(app);
app.listen(8080);

var bunyan = require('bunyan');
var logging = bunyan.createLogger({name: 'hashed.space'});

// Expose app
module.exports = app;
logging.info('App started');
logging.info('Node', process.version);

