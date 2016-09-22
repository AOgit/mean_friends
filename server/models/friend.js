console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date
})

var Friend = mongoose.model('Friend', FriendSchema);