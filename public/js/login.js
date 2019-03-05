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
	//reset data targer
	$("#log").attr('data-target', "#");


	var name = $("#log-name").val();
	var pass = $("#log-pass").val();
	//error modal
	if(name=="" | pass==""){
		$("#log").attr('data-target', "#logAndSignReq");
	}
	else if(name!="" && pass!=""){
		$.get("/login/username/password", userCheck); 
	}
});

function userCheck(result){
	var name = $("#log-name").val();
	var pass = $("#log-pass").val();
	var exists = null; 
	
	for(var i = 0; i<result['users'].length; i++){
		if(result['users'][i]['name'] == name && result['users'][i]['pass'] == pass){
			exists = true;
			$.get("/login/" + name, redirect);
		}
	}		
	if(exists != true){
		$("#notFound").modal('show');
		//console.log("no user found");
	}
}



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