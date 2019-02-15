/*
 * GET progress page.
 */

var data = require("../public/data.json")

exports.view = function(req, res){
	res.render('progress',data);
};

