var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(__dirname + "./static"));

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/basic_mongoose");

var api1955Schema = new mongoose.Schema({
	name:String,
})

var api1955 = mongoose.model('api1955',api1955Schema);

app.get('/',function(req,res){
	api1955.find({},function(err,output){
		if(err){
			console.log('something wrong...');
		}else{
			res.json(output);
		}
	})
})

app.get('/new/:name',function(req,res){
	console.log('POST DATA',req.params.name);
	var person = new api1955({
		name:req.params.name,
	});
	person.save(function(err){
		if(err){
			console.log('something wrong...');
		}else{
			console.log('successfully added a new person');
			res.redirect('/');
		}
	})
})

app.get('/remove/:name',function(req,res){
	api1955.remove({name:req.params.name},function(err,output){
		if (err) {
			console.log('something wrong');
		}else{
			console.log('successfully remove that person');
			res.redirect('/');
		}
	})
})


app.listen(8000,function(){
	console.log("listenning on port 8000...");
})