var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
	name: {type: String, required: true},
	color: {type: String, required: true},
	upc: {type: String, required: true},
	vendor: {type: Schema.Types.ObjectId, ref: "Vendor"},
	quantity: {type: Number, required: true},
}, {timestamps: true})

var Product = mongoose.model('Product', productSchema);