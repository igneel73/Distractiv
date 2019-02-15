

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
		$("#Graph #Line").removeAttr('class', "on")
		$("#Graph #Line").attr('class', "off")
		$("#Graph #Bar").attr('class', "on")
		//call create graph function(dummy image right now)
		$("#graphPic").attr('src',"https://www.mathsisfun.com/data/images/bar-graph-fruit.svg");
});

//set line graph output
$("#Graph #Line").click(function(e) {
	$("#Graph #Bar").removeAttr('class', "on")
	$("#Graph #Bar").attr('class', "off")
	$("#Graph #Line").attr('class', "on")
	//call create graph function(dummy image right now)
	$("#graphPic").attr('src', "https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png");
});

//set day graph output
$("#Timeline #Day").click(function(e) {
		$("#Timeline #Week").removeAttr('class', "on")
		$("#Timeline #Month").removeAttr('class', "on")
		$("#Timeline #Week").attr('class', "off")
		$("#Timeline #Month").attr('class', "off")
		$("#Timeline #Day").attr('class', "on")
		//call create graph function

});

//set week graph output
$("#Timeline #Week").click(function(e) {
		$("#Timeline #Day").removeAttr('class', "on")
		$("#Timeline #Month").removeAttr('class', "on")
		$("#Timeline #Day").attr('class', "off")
		$("#Timeline #Month").attr('class', "off")
		$("#Timeline #Week").attr('class', "on")
		//call create graph function

});

//set month graph output
$("#Timeline #Month").click(function(e) {
		$("#Timeline #Day").removeAttr('class', "on")
		$("#Timeline #Week").removeAttr('class', "on")
		$("#Timeline #Day").attr('class', "off")
		$("#Timeline #Week").attr('class', "off")
		$("#Timeline #Month").attr('class', "on")
		//call create graph function

});



//later create graph function
