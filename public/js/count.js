// hide popup at the start
$(document).ready(function (e){
	$(".pop-up").hide();
});

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
	} else {
		$(this).text("Pause");
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