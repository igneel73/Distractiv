var data = require("../public/data.json");
var fs = require("fs");
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
}

exports.next = function(req, res){
	var name = req.params.name;
	var hrs = req.params.hrs;
	var mins = req.params.mins;

	data.activity_name = name;
	data.hours = hrs;
	data.mins = mins;
	data.date = new Date();
	data = JSON.stringify(data, null, 2);
	fs.writeFileSync('./public/data.json', data);
	res.json(data);
}

