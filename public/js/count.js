// vars for time
var secs = 0;
var mins = 0;
var hrs = 0;

// hide popup at the start
// start the clock too
$(".pop-up").hide();

var clock = setInterval(tick, 1000);
var clockanim = setInterval(anim, 250);

// increase distraction counter by one
$(".distracted").click(function(e) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
	$(".pop-up").show();
	pause();

});


$(".pause").click(pause);

$(".ok").click(function(e){
	// save the entry
	// hide the popup
	$(".pop-up").hide();
	pause();
});

$(".cancel").click(function(e){
	// don't save the entry
	// hide the popup
	$(".pop-up").hide();
	pause();
})

function pause(e) {
	var text = $(".pause").text();
	if(text.includes("Pause")){
		$(".pause").text("Start");
		clearInterval(clock);
	} else {
		$(".pause").text("Pause");
		clock = setInterval(tick,1000);
	}
}

// update clock
function tick(){

	secs = parseInt($("#secs").text());
	mins = parseInt($("#mins").text());
	hrs = parseInt($("#hours").text());

	// check if 1 minute has passed
	if(secs==60){
		mins++;
		secs = 0;
	}
	else if(mins==60){
		hrs++;
		mins = 0;
	} else {
		secs++;
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

	if(secs<10){
		$("#secs").text("0" + secs);
	} else {
		$("#secs").text(secs);
	}

}

// animate clock
function anim(){

	var clock = $(".clock-motion");
	
}

/*dynamically push inputted activity into activity type drop down on data page
$("#Start #startButton").click(function(e){
	console.log("hereagain");
	$(this).text("No");
	/*var newActivity = {
		"name": $(".text-center #inAct").text()	
	}
	//console.log(newActivity)
	//newAct.activity.push(newActivity);
});*/


//Change activity type dropdown text to match selected text
$("#Type .dropdown .dropdown-menu li").click(function(e) {
	$("#Type .dropdown .btn").text($(this).text());
});

//set bar graph output
$("#Graph #Bar").click(function(e) {
		$("#Graph #Line").attr('class', "btnOff")
		$("#Graph #Bar").attr('class', "btnOn")
		//call create graph function(dummy image right now)
		$("#graphPic").attr('src',"https://www.mathsisfun.com/data/images/bar-graph-fruit.svg");
		
		//give correct class attribute for modal
		$("#graphPic").removeClass("line").addClass("bar");

});

//set line graph output
$("#Graph #Line").click(function(e) {
	$("#Graph #Bar").attr('class', "btnOff")
	$("#Graph #Line").attr('class', "btnOn")
	//call create graph function(dummy image right now)
	$("#graphPic").attr('src', "https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png");

	//give correct class attribute for modal
	$("#graphPic").removeClass("bar").addClass("line");

});

//set day graph output
$("#Timeline #Day").click(function(e) {
		$("#Timeline #Week").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOff")
		$("#Timeline #Day").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("week month").addClass("day");

});

//set week graph output
$("#Timeline #Week").click(function(e) {
		$("#Timeline #Day").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOff")
		$("#Timeline #Week").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("day month").addClass("week");

});

//set month graph output
$("#Timeline #Month").click(function(e) {
		$("#Timeline #Day").attr('class', "btnOff")
		$("#Timeline #Week").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("day week").addClass("month");

});


//display data
$("#graphPic").click(function(e){
	if($(this).hasClass("day") == true){
		console.log("yeet");
		$(".text-center #dataGraph a").attr('data-target', "#dayData" );
	}
	if($(this).hasClass("week") == true){
		console.log("yelp");	
		$(".text-center #dataGraph a").attr('data-target', "#weekData" );
	}
	if($(this).hasClass("month") == true){
		console.log("yorp");
		$(".text-center #dataGraph a").attr('data-target', "#monthData" );
	}
});

/*bar and day image click
$("#graphPic,.bar,.day").click(function(e){
	if($(this).hasClass("bar day") == true){
		console.log("yeet");
	}
	//.attr("data-toggle", )
});


//bar and week image click
$("#graphPic,.bar,.week").click(function(e){
	console.log("here");
	if($(this).hasClass("bar week") == true){
		console.log("yelp");	
		$(".text-center #dataGraph a").attr('data-target', "#barWeek" );
	}

});

//bar and month image click
$("#graphPic,.bar,.month").click(function(e){
	if($(this).hasClass("bar month") == true){
		console.log("yorp");
	}

	//var selection = ".text-center"+" #dataGraph";
	//console.log(String(selection));
	//var dataHTML = '<p>'+'here'+'</p>'; 
	//console.log(dataHTML);
	//$(selection).html(dataHTML);
});

//line and day image click
$("#graphPic,.line,.day").click(function(e){
	if($(this).hasClass("line day") == true){
		console.log("yefe");
	}




});

//bar and day image click
$("#graphPic,.line,.week").click(function(e){
	if($(this).hasClass("line week") == true){
		console.log("yeup");
	}
});

//bar and day image click
$("#graphPic,.line,.month").click(function(e){
	if($(this).hasClass("line month") == true){
		console.log("yuti");
	}
});*/

//later create graph function
