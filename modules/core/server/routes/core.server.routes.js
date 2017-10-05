'use strict';

/* Dependencies */
var items = require('../controllers/items.server.controller.js'),
    users = require('../controllers/users.server.controller.js'),
    express = require('express');

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);
};
