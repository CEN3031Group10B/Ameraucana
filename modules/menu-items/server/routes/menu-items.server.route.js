'use strict';

module.exports = function (app, db) {
  var items = require('../controllers/menu-items.server.controller');

  app.route('/api/menu-items-analytics').get(items.getItemsAnalytics);
  app.route('/api/menu-item').post(items.createMenuItem);
  app.route('/:menuItemId').delete(items.deleteMenuItem);

  app.param('menuItemId', items.menuItemById);
};
