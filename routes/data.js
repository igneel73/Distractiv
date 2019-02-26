/*
 * GET data page.
 */
var act = require('../public/activities.json');

exports.view = function(req, res){
	act['viewAlt'] = false;
	console.log(act);
	console.log(act['viewAlt']);
	res.render('data', act);

};

exports.viewAlt = function(request, response){
	act['viewAlt'] = true;
	console.log(act);
  	response.render('data', act);
};

