
$(document).ready(function(e){
	$(".signup").hide();
});

$(".signup-btn").click(function(e){
	e.preventDefault();
	$(".login").hide();
	$(".signup").show();
});

$(".login-btn").click(function(e){
	e.preventDefault();
	$(".signup").hide();
	$(".login").show();
});