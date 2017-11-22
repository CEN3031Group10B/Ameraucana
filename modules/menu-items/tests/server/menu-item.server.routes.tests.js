'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  path = require('path'),
  request = require('supertest'),
  express = require(path.resolve('./config/lib/express')),
  MenuItem = require('../../server/models/menu-items.server.model.js'),
  User = require('../../../users/server/models/user.server.model.js');


mongoose.connect('mongodb://admin:password@ds161164.mlab.com:61164/ameraucana');
/**
 * Globals
 */
var pizzaMenuItem, menuItem_id, app, agent;

pizzaMenuItem = {
  name: "Pizza",
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

  it('should be able to create a menu item', function(done) {
    agent.post('/api/menu-item').send(pizzaMenuItem).expect(200).end(function (err, res) {
      done();
    });
  });
});
