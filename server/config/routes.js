var persons = require('./../controllers/persons.js');

module.exports = function(app){
	app.get('/persons',function(req,res){
		persons.index(req,res);
	});
	app.post('/add/:name',function(req,res){
		persons.add(req,res);
	});
	app.post('/remove/:name',function(req,res){
		persons.remove(req,res);
	})

}