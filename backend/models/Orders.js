const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const OrderSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
    rating:{
        type:Number,
        required:true
    },
    kind:{ //veg or non-veg
        type:String,
		required:true
    },
	food_addons:{ 
		type:Map,
		required:true
	}
});


module.exports = Item = mongoose.model("Items", ItemSchema);

