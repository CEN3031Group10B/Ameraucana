/* Import mongoose */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create Schema */
var itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    required: true
  }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
