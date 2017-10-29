// IGNORE THIS FILE - TRANSFER TO MENU-ITEMS.SERVER.ROUTE.JS

'use strict';

module.exports = function (app, db) {
  var items = require('../controllers/menu-items.server.controller');
  var menuItems = require('../controllers/menu-items-two.server.controller');

  app.route('/api/menu-items-two').get(menuItems.getMenuItems);
  app.route('/api/menu-items-two').get(menuItems.deleteMenuItems);
};
