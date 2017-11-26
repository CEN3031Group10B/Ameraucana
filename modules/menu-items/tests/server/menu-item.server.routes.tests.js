'use strict';

/**
 * Module dependencies.
 */
process.env.NODE_ENV = 'test';


var should = require('should'),
  mongoose = require('mongoose'),
  path = require('path'),
  request = require('supertest'),
  express = require(path.resolve('./config/lib/express')),
  MenuItem = require('../../server/models/menu-items.server.model.js'),
  User = require('../../../users/server/models/user.server.model.js');


mongoose.connect('mongodb://admin:password@ds157740.mlab.com:57740/db-test');
/**
 * Globals
 */
var pizzaMenuItem, menuItem_id, app, agent;

pizzaMenuItem = {
  name: "Pizza with Olives",
  description: "Yummy slice of zza",
  price: "1.89",
  category: "Food",
  show: true
};

describe('MenuItem CRUD tests', function() {
  before(function (done) {
    app = express.init(mongoose);
    agent = request.agent(app);
    done();
  });

  it('should be able to get menu items', function(done) {
    agent.get('/api/menu-items').expect(200).end(function (err, res) {
      done();
    });
  });

  it('should be able to create a menu item', function(done) {
    agent.post('/api/menu-item').send(pizzaMenuItem).expect(200).end(function (err, res) {
      agent.get('/api/menu-items').end(function(err, res) {
        res.body[0].name.should.match(pizzaMenuItem.name);
        res.body[0].description.should.match(pizzaMenuItem.description);
        res.body[0].price.should.match(pizzaMenuItem.price);
        res.body[0].category.should.match(pizzaMenuItem.category);
        res.body[0].show.should.match(pizzaMenuItem.show);
        done();
      });
    });
  });

  it('should be able to delete a menu item', function(done) {
    agent.post('/api/menu-item').send(pizzaMenuItem).expect(200).end(function (err, res) {
      agent.get('/api/menu-items').end(function(err, res) {
        agent.delete(res.body[0]._id).expect(200).end(function(err, res) {
          agent.get('/api/menu-items').end(function(err, res) {
            done();
          });
        });
      });
    });
  });

  it('should be able to update a menu item', function(done) {
    agent.post('/api/menu-item').send(pizzaMenuItem).expect(200).end(function (err, res) {
      agent.get('/api/menu-items').end(function(err, res) {
        var body = {
          name: "BananaPizza",
          description: "Fruity Pizza",
          price: "12.00",
          category: "Pizza",
          show: true
        }

        agent.put(res.body[0]._id, body).expect(200).end(function(err, res) {
          done();
        });
      });
    });
  });

  afterEach(function (done) {
    MenuItem.remove().exec(done);
  });
});
