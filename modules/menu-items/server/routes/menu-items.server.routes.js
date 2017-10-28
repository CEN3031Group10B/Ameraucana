'use strict';

module.exports = function (app, db) {
  var items = require('../controllers/menu-items.server.controller');
  var menuItems = require('../controllers/menu-items-two.server.controller');

  app.route('/api/menu-items-analytics').get(items.getItemsAnalytics);
  app.route('/api/menu-items-two').get(menuItems.getMenuItems);
};
