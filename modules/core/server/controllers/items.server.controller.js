var mongoose = require('mongoose');
var Item = require('../models/items.server.model.js');
var User = require('../../../users/server/models/user.server.model.js');
// http://mongoosejs.com/docs/populate.html
/* Here is where you will implement any functions you need
   to access/change anything from the item table */
exports.getItemsAnalytics = function(req, res) {
  Item.find({}, '', function (err, items) {
    /* Do something with all the items
    */
    if(err) {
      res.status(400).send(err);
    } else {
      var itemsAnalytics = []

      items.forEach(function (currentItem) {
        var count = 0

        User.find({}, 'orders', function(err, orders) {

            orders.forEach(function (err, order) {
              if (order.order == currentItem) {
                count += 1
              }
            });

        });
        itemsAnalytics.push({
          item: currentItem,
          count: count
        });
      });

      res.send(itemsAnalytics);
    }
  });

};
