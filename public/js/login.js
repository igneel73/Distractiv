'use strict';

$(document).ready(function(e){
	$(".signup").hide();
});

//on login page, click sign up to show sign up page
$(".signup-btn").click(function(e){
	e.preventDefault();
	$(".login").hide();
	$(".signup").show();
});

//on create account/sign up page, click to go back to login
$(".login-btn").click(function(e){
	e.preventDefault();
	$(".signup").hide();
	$(".login").show();
});



//on login page
$("#log").click(function(e){
	e.preventDefault();
	var name = $("#log-name").val();
	var pass = $("#log-pass").val();
	//error modal
	if(name=="" | pass==""){
		$("#log").attr('data-target', "#logAndSignReq");
	}
	else{
		$.get("/login/" + name, redirect);
	}
});


//on create account/sign up page, click sign up to sign up, goes to start activity
$("#sig").click(function(e){
	e.preventDefault();
	var email = $("#inputEmail").val();
	var name = $("#sig-name").val();
	var pass= $("#passWord").val();
	//error modal
	if(email=="" | name=="" | pass==""){
		$("#sig").attr('data-target', "#logAndSignReq");
	}
	else{
		$.get("/signup/" + name + "/" + email, redirect);
	}
});

function redirect(result){
	window.location.href = "/home";
} 