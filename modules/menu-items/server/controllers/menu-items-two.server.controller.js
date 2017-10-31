"use strict";
var mongoose = require('mongoose');
var Item = require('../models/menu-items.server.model.js');
var User = require('../../../users/server/models/user.server.model.js');
// http://mongoosejs.com/docs/populate.html
/* Here is where you will implement any functions you need
   to access/change anything from the item table */

exports.getMenuItems = function(req, res) {

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
    console.log(items);
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
    console.log("MENU ITEMS TWO");
    res.json(items);
    console.log(itemsAnalytics);
  });
};

exports.deleteMenuItems = function(req, res) {

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
    console.log(items);
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
    console.log("MENU ITEMS TWO");
    res.json(items);
    console.log(itemsAnalytics);
  });
};
