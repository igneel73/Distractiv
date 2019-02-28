/*
 * GET data page.
 */
var data = require('../public/data.json')
var act = require('../public/activities.json');


exports.view = function(req, res){

	for (let val of act.users){
		if(val.name == data.active_user){
			var curAct = val;
		}
	}
	//curAct['viewAlt'] = false;

	console.log(curAct);
	res.render('data', curAct);


};

/*exports.viewAlt = function(request, response){

	for (let val of act.users){
		if(val.name == data.active_user){
			var curAct = val;
		}
	}
	curAct['viewAlt'] = true;
	console.log(curAct);
  	response.render('data', curAct);
};
*/
