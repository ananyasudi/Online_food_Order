const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
    contact:{
        type:String,
        required:true
    },
    age:{
        type:Number,
		required:true
    },
	batch:{ //possible fields ug1,2,3,4,5
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});


module.exports = User = mongoose.model("Users", UserSchema);

