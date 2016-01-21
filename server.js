var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');
//be careful, otherwise /can't GET
app.use(express.static(path.join(__dirname,'./client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000,function(){
	console.log("listenning on port 8000...");
})