/*
 * GET data page.
 */
var act = require('../public/activities.json');
var  = require();

exports.view = function(req, res){
	res.render('data', act);
};

