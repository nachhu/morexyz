var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://king:123@ds123182.mlab.com:23182/employees',["employees"]);
var Employee = mongoose.model('Employee', mongoose.Schema({
	name:String,
	empid:Number,
	dept:String,
	area:String,
	status:String,
	contact:String,
	salary:String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/employees', function(req, res){
	Employee.find(function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});

app.get('/api/employees/:id', function(req, res){
	Employee.findOne({empid:req.params.id}, function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
});
app.post('/api/employees', function(req, res){
	Employee.create( req.body, function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});

var port = process.env.PORT||9000;

app.listen(port, function(){
	console.log('server is running on port 9000..');
});