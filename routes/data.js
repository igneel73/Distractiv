/*
 * GET data page.
 */
var act = require('../public/activities.json');
var data = require('../public/data.json')

exports.view = function(req, res){
	for (let val of act.users){
		if(val.name == data.active_user){
			var curAct = val;
		}
	}
	res.render('data', curAct);
};

