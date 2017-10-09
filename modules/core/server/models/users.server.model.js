/* Import mongoose */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create Schema */
var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  },
  cart: {
    type: Array,
    required: false
  },
  purchases: {
    type: Array,
    required: false
  }
});

var user = mongoose.model('user', userSchema);

module.exports = user;
