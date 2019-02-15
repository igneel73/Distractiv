/*
 * GET progress page.
 */

var data = require("../public/data.json");
var newAct = require("../public/activities.json")

exports.view = function(req, res){
	console.log("here");
	console.log("hereagain");

	var newActivity = {
		"name": "hi"//$(".text-center #inAct").text()	
	}
	console.log(newActivity)
	newAct.activity.push(newActivity);

	res.render('progress',data);
};

