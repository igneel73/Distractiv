
var data = require('../public/data.json');
const fs = require('fs');

exports.view = function(req, res) {
	res.render('login');
}

// TODO check if user exists
// save user in data
exports.log = function(req, res) {
	var name = req.params.name;
	data.active_user = name;
	if((typeof data) === 'object'){
		var write = JSON.stringify(data, null, 2);
	}
	fs.writeFileSync('./public/data.json', write);
	res.json(data);
}