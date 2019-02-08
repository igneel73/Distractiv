// increase distraction counter by one
$(".distracted").click(function(req,res) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
});


$(".pause").click(function(req,res) {
	var text = $(this).text();
	if(text.includes("Pause")){
		$(this).text("Start");
	} else {
		$(this).text("Pause");
	}
})