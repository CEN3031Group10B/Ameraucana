'use strict';

/* Dependencies */
var express = require('express');
var Items = require('../controllers/items.server.controller.js');

module.exports = function (app) {
  // Root routing
  var Items = require('../controllers/items.server.controller.js');
  var core = require('../controllers/core.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);

  app.route('/items-analytics').get(Items.getItemsAnalytics);
};
