'use strict';

module.exports = function (app, db) {
  var items = require('../controllers/menu-items.server.controller');

  app.route('/api/menu-items-analytics').get(items.getItemsAnalytics);
};
