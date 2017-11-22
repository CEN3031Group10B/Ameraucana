'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  MenuItem = require('../../server/models/menu-items.server.model.js');


mongoose.connect('mongodb://admin:password@ds161164.mlab.com:61164/ameraucana')
/**
 * Globals
 */
var pizzaMenuItem, menuItem_id;

pizzaMenuItem = {
  name: "Pizza",
  description: "Yummy slice of zza",
  price: "1.89",
  category: "Food",
  show: true
};

/**
 * Unit tests
 */
describe('MenuItem Model Unit Tests:', function(done) {
  describe('Creating menu items', function(done) {
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
        done();
      });
    });

    it('does not save to database if missing name', function(done) {
      new MenuItem({
        description: pizzaMenuItem.description,
        price: pizzaMenuItem.price,
        category: pizzaMenuItem.category,
        show: pizzaMenuItem.show
      }).save(function(err, menuItem) {
        should.exist(err);
        done();
      });
    });

    it('saves to database if missing description', function(done) {
      new MenuItem({
        name: pizzaMenuItem.name,
        price: pizzaMenuItem.price,
        category: pizzaMenuItem.category,
        show: pizzaMenuItem.show
      }).save(function(err, menuItem) {
        should.not.exist(err);
        menuItem_id = menuItem._id;
        done();
      });
    });

    it('does not save to database if missing price', function(done) {
      new MenuItem({
        name: pizzaMenuItem.name,
        description: pizzaMenuItem.description,
        category: pizzaMenuItem.category,
        show: pizzaMenuItem.show
      }).save(function(err, menuItem) {
        should.exist(err);
        done();
      });
    });

    it('does not save to database if missing category', function(done) {
      new MenuItem({
        name: pizzaMenuItem.name,
        description: pizzaMenuItem.description,
        price: pizzaMenuItem.price,
        show: pizzaMenuItem.show
      }).save(function(err, menuItem) {
        should.exist(err);
        done();
      });
    });

    it('does not save to database if missing show', function(done) {
      new MenuItem({
        name: pizzaMenuItem.name,
        description: pizzaMenuItem.description,
        price: pizzaMenuItem.price,
        category: pizzaMenuItem.category,
      }).save(function(err, menuItem) {
        should.exist(err);
        done();
      });
    });

    afterEach(function(done){
      if(menuItem_id) {
        MenuItem.remove({ _id: menuItem_id }).exec(function(){
          menuItem_id = null;
          done();
        });
      } else {
        done();
      }
    });

  });

});
