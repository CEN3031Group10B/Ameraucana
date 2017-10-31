/* Import mongoose */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create Schema */
var menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    required: true
  }
});

var MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
