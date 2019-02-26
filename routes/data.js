/*
 * GET data page.
 */
var act = require('../public/activities.json');
var data = require('../public/data.json')

exports.view = function(req, res){
<<<<<<< HEAD
	act['viewAlt'] = false;
	console.log(act);
	console.log(act['viewAlt']);
	res.render('data', act);

=======
	for (let val of act.users){
		if(val.name == data.active_user){
			var curAct = val;
		}
	}
	res.render('data', curAct);
>>>>>>> c6f0dafc2359eb8632f270beb25126d7bcb6d325
};

exports.viewAlt = function(request, response){
	act['viewAlt'] = true;
	console.log(act);
  	response.render('data', act);
};

