const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
	vendor_name: {
		type: String,
		required: true
	},
	shop_name:{
		type:String,
		required:true
	},
	email: {
		type: String,
		required: true
	},
    contact:{
        type:String,
        required:true
    },
    shop_open:{
		type:String,
		required:false
	},
	shop_close:{
		type:String,
		required:false
	},
	password:{
		type:String,
		required:true
	},
	

});

module.exports = Vendor = mongoose.model("Vendor", VendorSchema);
// module.exports = Item = mongoose.model("Items", ItemSchema);
// module.exports = { Vendor: VendorSchema, Items: ItemSchema };
