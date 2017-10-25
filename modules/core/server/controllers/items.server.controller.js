var mongoose = require('mongoose');
var Item = require('../models/items.server.model.js');
var User = require('../../../users/server/models/user.server.model.js');
// http://mongoosejs.com/docs/populate.html
/* Here is where you will implement any functions you need
   to access/change anything from the item table */
exports.getItemsAnalytics = function(req, res) {
  const itemsPromise = new Promise((resolve, reject) => {
    Item.find({}, '', (err, items) => {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    });
  });

  const userPromise = new Promise((resolve, reject) => {
    User.find({}, '', (err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  });

  const analyticsPromise = Promise.all([itemsPromise, userPromise]).then((resolved) => {
    const items = resolved[0];
    const users = resolved[1];
    const itemsAnalytics = [];
    items.forEach((currentItem) => {
      let count = 0;
      users.forEach((user) => {
        count += user.orders.filter((e) => e == currentItem.id).length;
      });

      itemsAnalytics.push({
        item: currentItem,
        count: count
      });
    });
    res.send( itemsAnalytics );
  });
};
