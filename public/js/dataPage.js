//Change activity type dropdown text to match selected text
$("#Type .dropdown .dropdown-menu li").click(function(e) {
	$("#Type .dropdown .btn").text($(this).text());
});

//set bar graph output
$("#Graph #Bar").click(function(e) {
		$("#Graph #Line").attr('class', "btnOff")
		$("#Graph #Bar").attr('class', "btnOn")
		//call create graph function(dummy image right now)
		$("#graphPic").attr('src',"https://www.mathsisfun.com/data/images/bar-graph-fruit.svg");
		
		//give correct class attribute for modal
		$("#graphPic").removeClass("line").addClass("bar");

});

//set line graph output
$("#Graph #Line").click(function(e) {
	$("#Graph #Bar").attr('class', "btnOff")
	$("#Graph #Line").attr('class', "btnOn")
	//call create graph function(dummy image right now)
	$("#graphPic").attr('src', "https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png");

	//give correct class attribute for modal
	$("#graphPic").removeClass("bar").addClass("line");

});

//set day graph output
$("#Timeline #Day").click(function(e) {
		$("#Timeline #Week").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOff")
		$("#Timeline #Day").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("week month").addClass("day");

});

//set week graph output
$("#Timeline #Week").click(function(e) {
		$("#Timeline #Day").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOff")
		$("#Timeline #Week").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("day month").addClass("week");

});

//set month graph output
$("#Timeline #Month").click(function(e) {
		$("#Timeline #Day").attr('class', "btnOff")
		$("#Timeline #Week").attr('class', "btnOff")
		$("#Timeline #Month").attr('class', "btnOn")
		//call create graph function

		//give correct class attribute for modal
		$("#graphPic").removeClass("day week").addClass("month");

});


//display correct modal for data, doesn't depend on if you click a line or bar graph
$("#graphPic").click(function(e){
	if($(this).hasClass("day") == true){
		$(".text-center #dataGraph a").attr('data-target', "#dayData" );
	}
	if($(this).hasClass("week") == true){	
		$(".text-center #dataGraph a").attr('data-target', "#weekData" );
	}
	if($(this).hasClass("month") == true){
		$(".text-center #dataGraph a").attr('data-target', "#monthData" );
	}
});

/*bar and day image click
$("#graphPic,.bar,.day").click(function(e){
	if($(this).hasClass("bar day") == true){
		console.log("yeet");
	}
	//.attr("data-toggle", )
});


//bar and week image click
$("#graphPic,.bar,.week").click(function(e){
	console.log("here");
	if($(this).hasClass("bar week") == true){
		console.log("yelp");	
		$(".text-center #dataGraph a").attr('data-target', "#barWeek" );
	}

});

//bar and month image click
$("#graphPic,.bar,.month").click(function(e){
	if($(this).hasClass("bar month") == true){
		console.log("yorp");
	}

	//var selection = ".text-center"+" #dataGraph";
	//console.log(String(selection));
	//var dataHTML = '<p>'+'here'+'</p>'; 
	//console.log(dataHTML);
	//$(selection).html(dataHTML);
});

//line and day image click
$("#graphPic,.line,.day").click(function(e){
	if($(this).hasClass("line day") == true){
		console.log("yefe");
	}




});

//bar and day image click
$("#graphPic,.line,.week").click(function(e){
	if($(this).hasClass("line week") == true){
		console.log("yeup");
	}
});

//bar and day image click
$("#graphPic,.line,.month").click(function(e){
	if($(this).hasClass("line month") == true){
		console.log("yuti");
	}
});*/

//later create graph function