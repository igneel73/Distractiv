// vars for time
var secs = 0;
var mins = 0;
var hrs = 0;
var timeset = true;
var selected = 0;
var preset = ["Facebook", "Instagram", "Twitter", "Reddit"];
var distractions = [];

$(document).ready(function(e){
	secs = parseInt($("#secs").text());
	mins = parseInt($("#mins").text());
	hrs = parseInt($("#hours").text());
	if(secs==0 && mins==0 && hrs==0) {
		$(".time-elap").text("Time Elapsed");
		timeset = false;
	}
});
// hide popup at the start
// start the clock too
$(".pop-up").hide();

var clock = setInterval(tick, 1000);

$(".pause").click(pause);

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

	if(!timeset) {
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
	} else {

		if(secs==0){
			if(mins != 0){
				mins--;
				secs = 59;
			} else if(hrs!=0){
				mins = 59;
				secs = 59;
				hrs--;
			} else{
				clearInterval(clock);

			}
		} else {
			secs--;
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

	if(secs<10){
		$("#secs").text("0" + secs);
	} else {
		$("#secs").text(secs);
	}

}

// distraction functionality

// increase distraction counter by one
$(".distracted").click(function(e) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
	$(".pop-up").show();
	pause();

});

$(".ok").click(function(e){
	// save the entry
	let dist = "";
	if($(".dist-type").val() != ""){
		dist = $(".dist-type").val();
		$(".dist-type").val("");
	} else {
		dist = preset[selected-1];
	}

	$.get("/save/"+ dist, donothing);

	// clear the selected color
	for(let i = 1; i < 5; i++){
		$(`#${i}.icon`).css("color", "black");
	}
	// hide the popup
	$(".pop-up").hide();
	pause();
});


function donothing(result){
	// do nothing
}

$(".cancel").click(function(e){
	// don't save the entry
	// clear the selected color and input
	for(let i = 1; i < 5; i++){
		$(`#${i}.icon`).css("color", "black");
	}
	$(".dist-type").val("");
	// hide the popup
	$(".pop-up").hide();
	pause();
	let count = parseInt($(".dist-num .num").text());
	count--;
	$(".dist-num .num").text(count);
});

$(".icon").click( function(e){
	for(let i = 1; i < 5; i++){
		if($(this).attr('id') == i){
			$(this).css("color", "#646FFF");
			selected = i;
		} else {
			$(`#${i}.icon`).css("color", "black");
		}
	}
});



