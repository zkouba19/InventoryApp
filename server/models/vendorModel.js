var mongoose = require('mongoose');
var VendorSchema = new mongoose.Schema({
	companyName: {type: String, required: true},
	mainContact: {type: String, required: true},
	email: {type: String, required: true},
	phoneNumber: {type: String, required: true},
}, {timestamps: true});

var Vendor = mongoose.model('Vendor', VendorSchema);