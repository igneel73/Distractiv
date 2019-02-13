
// vars for time
var secs = 0;
var mins = 0;
var hrs = 0;

// hide popup at the start
// start the clock too
$(document).ready(function (e){
	$(".pop-up").hide();
});

var clock = setInterval(tick, 1000);

// increase distraction counter by one
$(".distracted").click(function(e) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
	$(".pop-up").show();

});


$(".pause").click(function(e) {
	var text = $(this).text();
	if(text.includes("Pause")){
		$(this).text("Start");
		clearInterval(clock);
	} else {
		$(this).text("Pause");
		clock = setInterval(tick,1000);
	}
})

$(".ok").click(function(e){
	// save the entry
	// hide the popup
	$(".pop-up").hide();
});

$(".cancel").click(function(e){
	// don't save the entry
	// hide the popup
	$(".pop-up").hide();
})

// update clock
function tick(){
	secs++;
	mins = parseInt($("#mins").text());
	hrs = parseInt($("#hours").text());

	if(secs==60){
		mins++;
		secs = 0;
	}
	else if(mins==60){
		hrs++;
		mins = 0;
	}

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