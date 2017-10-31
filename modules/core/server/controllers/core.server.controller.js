'use strict';
var mongoose = require('mongoose');
var Item = require('../models/items.server.model.js');
var User = require('../../../users/server/models/user.server.model.js');
// http://mongoosejs.com/docs/populate.html
/* Here is where you will implement any functions you need
   to access/change anything from the item table */
exports.getItemsAnalytics = function(req, res) {
  var itemsPromise = new Promise(function(resolve, reject) {
    Item.find({}, '', function(err, items) {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    });
  });

  var userPromise = new Promise(function(resolve, reject) {
    User.find({}, '', function(err, users) {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  });

  var analyticsPromise = Promise.all([itemsPromise, userPromise]).then(function(resolved) {
    var items = resolved[0];
    var users = resolved[1];
    var itemsAnalytics = [];
    items.forEach(function(currentItem) {
      var count = 0;
      users.forEach(function(user) {
        count += user.orders.filter(function(e) {return e === currentItem.id;}).length;
      });

      itemsAnalytics.push({
        item: currentItem,
        count: count
      });
    });
    res.send(itemsAnalytics);
  });
};

/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  res.render('modules/core/server/views/index', {
    user: req.user || null
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
