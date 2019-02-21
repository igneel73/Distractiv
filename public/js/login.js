'use strict';

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

$("#log").click(function(e){
	e.preventDefault();
	var name = $("#log-name").val();
	console.log(name);
	$.get("/" + name, redirect);
});

$("#sig").click(function(e){
	e.preventDefault();
	var name = $("#sig-name").val();
	console.log(name);
	$.get("/" + name, redirect);
});

function redirect(result){
	window.location.href = "/home";
} 