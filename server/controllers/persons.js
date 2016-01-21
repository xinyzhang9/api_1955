var mongoose = require('mongoose');
var Person = mongoose.model('persons');//collection name
module.exports = (function(){
	return{
		index: function(req,res){
			Person.find({},function(err,output){
				if(err){
					cosole.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var person = new Person({name:req.params.name});
			person.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add successfully');
					res.json(output);
				}
			})
		},
		remove:function(req,res){
			Person.remove({name:req.params.name},function(err,status){
				if(err){
					console.log(err);
				}else{
					console.log('remove successfully');
					res.json({status:'successful'});
				}
			})
		},
	}
})()