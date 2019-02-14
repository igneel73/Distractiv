// increase distraction counter by one
$(".distracted").click(function(req,res) {
	var count = parseInt($(".dist-num .num").text());
	count+= 1;
	$(".dist-num .num").text(count);
});

//Start, Pause
$(".pause").click(function(req,res) {
	var text = $(this).text();
	if(text.includes("Pause")){
		$(this).text("Start");
	} else {
		$(this).text("Pause");
	}
});

//Change Dropdown text to match selected text
$("#Type .dropdown .dropdown-menu li").click(function(req,res) {
	$("#Type .dropdown .btn").text($(this).text());
});

//Change Dropdown text to match selected text for Graph and correct graph output
$("#Graph .dropdown .dropdown-menu li").click(function(req,res) {
	$("#Graph .dropdown .btn").text($(this).text());
});



