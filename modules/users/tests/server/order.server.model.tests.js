'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  MenuItem = require('../../../menu-items/server/models/menu-items.server.model.js'),
  Order = require('../../server/models/order.server.model.js');



mongoose.connect('mongodb://admin:password@ds157740.mlab.com:57740/db-test');
/**
 * Globals
 */
var pizzaMenuItem, menuItem_id, orderItem, order_id;

pizzaMenuItem = {
  name: "Pizzaaa",
  description: "Yummy slice of zza",
  price: "1.89",
  category: "Food",
  show: true
};



/**
 * Unit tests
 */
describe('Order Model Unit Tests:', function(done) {
  describe('Creating orders', function(done) {
    this.timeout(10000);
    it('saves to the database if valid', function (done) {
      new MenuItem({
        name: pizzaMenuItem.name,
        description: pizzaMenuItem.description,
        price: pizzaMenuItem.price,
        category: pizzaMenuItem.category,
        show: pizzaMenuItem.show
      }).save(function(err, menuItem) {
        should.not.exist(err);
        menuItem_id = menuItem._id;

        new Order({
          order: menuItem_id,
          data: Date.now(),
          fulfilled: false,
          paid: false
        }).save(function(err, order) {
          should.not.exist(err);
          order_id = order._id;
          done();
        });
      });
    });

    afterEach(function(done){
      if(order_id) {
        Order.remove({_id: order_id}).exec(function() {
          if(menuItem_id) {
            MenuItem.remove({ _id: menuItem_id }).exec(function(){
              menuItem_id = null;

              done();
            });
          } else {
            done();
          }
        });
      } else {
        done();
      }
    });

  });

});
