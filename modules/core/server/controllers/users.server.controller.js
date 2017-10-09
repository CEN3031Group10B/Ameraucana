'use strict';

var mongoose = require('mongoose');
var User = require('../models/users.server.model.js');

/* Here is where you will implement any functions you need
   to access/change anything from the user table */

exports.get = function(req, res) {

  User.find({}, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};
