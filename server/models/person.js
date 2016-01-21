//model
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name:String,
});

mongoose.model('persons',PersonSchema);