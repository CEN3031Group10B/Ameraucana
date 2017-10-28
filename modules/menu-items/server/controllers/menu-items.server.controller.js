"use strict";
var mongoose = require('mongoose');
var Item = require('../models/menu-items.server.model.js');
var User = require('../../../users/server/models/user.server.model.js');
var Order = require('../../../users/server/models/order.server.model.js');
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

  var orderPromise = new Promise(function(resolve, reject) {
    Order.find({}, '', function(err, orders) {
      if (err) {
        reject(err);
      } else {
        resolve(orders);
      }
    });
  });

  var analyticsPromise = Promise.all([itemsPromise, userPromise, orderPromise]).then(function(resolved) {
    var items = resolved[0];
    var users = resolved[1];
    var ordersCollection = resolved[2];
    var itemsAnalytics = [];
    items.forEach(function(currentItem) {
      var count = 0;
      users.forEach(function(user) {
        user.orders.forEach(function(user_order) {
          ordersCollection.forEach(function(oc) {
            if (String(oc.id) === String(user_order)) {
              if (String(oc.order) === String(currentItem.id)) {
                count += 1;
              }
            }
          });
        });
      });

      itemsAnalytics.push({
        item: currentItem,
        count: count
      });
    });

    res.json(itemsAnalytics);
  });
};

exports.createMenuItem = function(req, res) {

  var item = new Item(req.body);

  item.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(item);
    }
  });
};

exports.deleteMenuItem = function(req, res) {

  var item = req.item;

  item.remove(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.end();
    }
  });
};

exports.menuItemById = function(req, res, next, id) {
  Item.findById(id).exec(function(err, item) {
    if(err){
      console.log(err);
      res.status(400).send(err);
    } else {
      req.item = item;
      next();
    }
  });
};
