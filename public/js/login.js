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
	console.log(name);
	console.log(pass);
	//error modal
	if(name=="" | pass==""){
		$("#log").attr('data-target', "#logAndSignReq");
	}
	else if(name!="" && pass!=""){
		console.log("here");
			$.get("/login/username/password", userCheck); 
	}
});

function userCheck(result){
console.log(result);
/*			for(var i = 0; i<"{{users.length}}"; i++){
				if("{{users[i].name}}" == name && "{{users[i].pass}}" == pass){
					$.get("/login/" + name, redirect);
				}
			}
		
		else{
			console.log("no user found");
		}
		//$.get("/login/" + name, redirect);*/
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