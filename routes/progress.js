/*
 * GET progress page.
 */

var data = require("../public/data.json");
var fs = require("fs");
var acts = require("../public/activities.json");

exports.view = function(req, res){
	res.render('progress', data);
}

exports.save = function (req, res){
	var dist = req.params.dist;
	data.distractions.push(dist);
	if((typeof data)==='object') {
		var write = JSON.stringify(data, null, 2);
	}
	fs.writeFileSync('./public/data.json', write);
	res.json(data);
}

