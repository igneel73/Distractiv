// vars for time
var mins = 0;
var hrs = 0;

$("#startButton").click(function(e){
	e.preventDefault();
	var name = $("#inAct").val();
	var hrs = $("#hours").val();
	var mins = $("#mins").val();	
	//activity check
	if(name==""){
		$("#Start a").attr('data-target', "#inputRequired");
		console.log("required field");
		//add popover
	}
	else{
		$.get("/home/" + name + "/" + hrs + "/" + mins, redirect);
	}
});

function redirect(result){
	window.location.href = "/start";
}



//24 hour time limit
$("#hours").change(function(){
	//console.log($(this).val());
	if($(this).val()==24){
		//console.log("here");
		var zeroMinutes = '<option value="00">00</option>';
		//console.log(zeroMinutes);
		$("#mins").html(zeroMinutes);
	}
	else{
		var normalMinutes = '<option value="00">00</option>'+
						'<option value="05">05</option>'+
						'<option value="10">10</option>'+
						'<option value="15">15</option>'+
						'<option value="20">20</option>'+
						'<option value="25">25</option>'+
						'<option value="30">30</option>'+
						'<option value="35">35</option>'+
						'<option value="40">40</option>'+
						'<option value="45">45</option>'+
						'<option value="50">50</option>'+
						'<option value="55">55</option>';
		$("#mins").html(normalMinutes);
		}
});



/*var newAct = require("../public/activities.json");

$("#Start #startButton").click(function(e){
	console.log("help");
	var newActivity = {
		"name": $(".text-center #inAct").val()	
	}
	console.log(newActivity)
	newAct.activity.push(newActivity);
});*/
/*
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
*/