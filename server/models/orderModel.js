var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new mongoose.Schema({
	vendor: {type: Schema.Types.ObjectId, ref: "Vendor"},
	user: {type: Schema.Types.ObjectId, ref: "User"},
	products: [{type: Schema.Types.ObjectId, ref: "Product"}],
	
}, {timestamps: true})

var Order = mongoose.model('Order', orderSchema)