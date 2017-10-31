'use strict';

// var User = require('../models/user.server.model.js');

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */

// exports.allUsers = function(req, res) {
//   User.find().exec(function(err, users) {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.json(users);
//     }
//   });
// };


module.exports = _.extend(
  require('./users/users.authentication.server.controller'),
  require('./users/users.authorization.server.controller'),
  require('./users/users.password.server.controller'),
  require('./users/users.profile.server.controller')
);
