/*var newAct = require("../public/activities.json");

$("#Start #startButton").click(function(e){
	console.log("help");
	var newActivity = {
		"name": $(".text-center #inAct").val()	
	}
	console.log(newActivity)
	newAct.activity.push(newActivity);
});*/


// vars for time
var mins = 0;
var hrs = 0;


$("a.time-btns").hide();

$(".time_prompt").click(function(e) {
	if($(".time_prompt").text().includes("Set Time")) {
		$(".time_prompt").text("Cancel");
		$(".time-btns").show();
	} else {
		$(".time_prompt").text("Set Time");
		$(".time-btns").hide();
		$("#mins").text("00");
		$("#hours").text("00");
		$("#secs").text("00");
	}

});

$("#l1").click({num:1}, dec);
$("#l2").click({num:2}, dec);
$("#r1").click({num:1}, inc);
$("#r2").click({num:2}, inc);


function inc(e){

	mins = parseInt($("#mins").text());
	hrs = parseInt($("#hours").text());

	if(e.data.num==1){
		mins += 5;
		if(mins >= 60){
			hrs += 1;
			mins = mins - 60;
		}
	} else {
		mins += 30;
		if(mins >= 60) {
			hrs += 1;
			mins = mins - 60;
		}
	}

	// format with 0 and update display
	if(hrs<10){
		$("#hours").text("0" + hrs);
	} else {
		$("#hours").text(hrs);
	}

	if(mins<10){
		$("#mins").text("0" + mins);
	} else {
		$("#mins").text(mins);
	}

}


function dec(e){
	
	mins = parseInt($("#mins").text());
	hrs = parseInt($("#hours").text());

	
	if(e.data.num==1){
		if(mins == 0){
			if(hrs > 0){
				hrs -= 1;
				mins = 55;
			} else{
				mins = 0;
			}
		} else {
			mins -=5;
		}
	} else {
		mins -= 30;
		if(mins <= 0) {
			if(hrs > 0){
				hrs -= 1;
				mins = 60 + mins;
			} else {
				mins = 0;
			}
		}
	}

	// format with 0 and update display
	if(hrs<10){
		$("#hours").text("0" + hrs);
	} else {
		$("#hours").text(hrs);
	}

	if(mins<10){
		$("#mins").text("0" + mins);
	} else {
		$("#mins").text(mins);
	}

}
