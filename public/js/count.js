$(".distracted").click(function(req,res) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
});