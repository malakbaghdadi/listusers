const mongoose = require('mongoose');

// user Schema for the application not db
//passed object to it
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		dropDups: true,
		unique : true
	},
	mobile:{
		type: Number
	},
	image_url:{
		type: String,
		required: true
	},
	facebook_url:{
		type: String
	},
	facebook_id:{
		type: String
	},
	education:{
		type: String
	},
	hestory_work:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
// make it accessable from outside
const User = module.exports = mongoose.model('User', userSchema);

// get users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}
// Get user , findbyid is a mongo method 
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}
// Add user
module.exports.addUsers = (user, callback) => {
	User.create(user, callback);
}


// Update user
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		name: user.name,
		email: user.email,
		mobile: user.mobile,
		image_url: user.image_url,
		facebook_url: user.facebook_url,
		facebook_id: user.facebook_id,
		education: user.education,
		hestory_work: user.hestory_work
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete user
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}







