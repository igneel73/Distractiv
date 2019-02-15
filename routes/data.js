/*
 * GET data page.
 */
var act = require('../public/activities.json');

exports.view = function(req, res){
		res.render('data', act);

};

