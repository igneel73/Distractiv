
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

//Change Dropdown text to match selected text
$("#Type .dropdown .dropdown-menu li").click(function(req,res) {
	$("#Type .dropdown .btn").text($(this).text());
});

//Change Dropdown text to match selected text for Graph and correct graph output
$("#Graph .dropdown .dropdown-menu li").click(function(req,res) {
	$("#Graph .dropdown .btn").text($(this).text());
});

