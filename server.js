
var glimpse = require('@glimpse/glimpse-node');
glimpse.init();

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
var server = app.start();
