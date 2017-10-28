'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({ order: { type: Schema.Types.ObjectId, ref: 'Item' }, date: Date, fulfilled: Boolean, paid: Boolean });

var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
