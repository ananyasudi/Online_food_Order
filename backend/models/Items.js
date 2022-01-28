const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Vendor = require("../models/Vendors");


const ItemSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: false
	},
    rating:{
        type:Number,
        required:false
    },
    kind:{ //veg or non-veg
        type:String,
		required:false
    },
	food_addons:{ 
		type:Map,
		required:false
	},
	vendorid:{ type: Schema.Types.ObjectId, ref: 'Vendor',required:false }
});


module.exports = Item = mongoose.model("Items", ItemSchema);

