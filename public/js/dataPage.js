//Change activity type dropdown text to match selected text
$("#Type .dropdown .dropdown-menu li").click(function(e) {
	$("#Type .dropdown .btn").text($(this).text());

	//call for user data
	$.get("/data/charts", addChart);
});



//set bar graph output
$("#Graph #Bar").click(function(e) {
	$("#Graph #Line").attr('class', "btnOff")
	$("#Graph #Bar").attr('class', "btnOn")
		
	//give correct class attribute for modal
	$("#dataGraph").removeClass("line").addClass("bar");

	//graph
	//call for user data
	$.get("/data/charts", addChart);

});

//set line graph output
$("#Graph #Line").click(function(e) {
	$("#Graph #Bar").attr('class', "btnOff")
	$("#Graph #Line").attr('class', "btnOn")
	//call create graph function(dummy image right now)
	$("#dataGraph").attr('src', "https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png");

	//give correct class attribute for modal
	$("#dataGraph").removeClass("bar").addClass("line");

	//call for user data
	$.get("/data/charts", addChart);

});

//set previous graph output
$("#Timeline #Previous").click(function(e) {
	$("#Timeline #Last5").attr('class', "btnOff")
	$("#Timeline #Last10").attr('class', "btnOff")
	$("#Timeline #Previous").attr('class', "btnOn")
	//call create graph function


	//give correct class attribute for modal
	$("#dataGraph").removeClass("last5 last10").addClass("previous");

	//call for user data
	$.get("/data/charts", addChart);

});

//set last5 graph output
$("#Timeline #Last5").click(function(e) {
	$("#Timeline #Previous").attr('class', "btnOff")
	$("#Timeline #Last10").attr('class', "btnOff")
	$("#Timeline #Last5").attr('class', "btnOn")
		
	//call create graph function

	//give correct class attribute for modal
	$("#dataGraph").removeClass("previous last10").addClass("last5");

	//call for user data
	$.get("/data/charts", addChart);

});

//set last10 graph output
$("#Timeline #Last10").click(function(e) {
	$("#Timeline #Previous").attr('class', "btnOff")
	$("#Timeline #Last5").attr('class', "btnOff")
	$("#Timeline #Last10").attr('class', "btnOn")	
	//call create graph function

	//give correct class attribute for modal
	$("#dataGraph").removeClass("previous last5").addClass("last10");

	//call for user data
	$.get("/data/charts", addChart);

});


//display correct modal for data, doesn't depend on if you click a line or bar graph
$("#dataGraph").click(function(e){
	if($(this).hasClass("previous") == true){
		$("#dataGraph").attr('data-target', "#previousData" );
	}
	if($(this).hasClass("last5") == true){	
		$("#dataGraph").attr('data-target', "#last5Data" );
	}
	if($(this).hasClass("last10") == true){
		$("#dataGraph").attr('data-target', "#last10Data" );
	}
});


//later create graph function
function addChart(result){
//get title
var Title = $("#Type .dropdown .btn").text();

//get number timeframe
var num = 0;
if($("#dataGraph").hasClass("previous") == true){
	num = 1;
}
if($("#dataGraph").hasClass("last5") == true){
	num = 5;
}
if($("#dataGraph").hasClass("last10") == true){
	num = 10;
}

//get bar or line
var graphType = null;
if($("#dataGraph").hasClass("bar") == true){
	graphType = "column";
}
if($("#dataGraph").hasClass("line") == true){
	graphType = "line";
}

//get proper index following activities
var actIndex = null;
for(var i = 0; i<result['activities'].length; i++){
	//console.log(Title);
	//console.log(result['activities'][0]['name']);
	if(Title == result['activities'][i]['name']){
		actIndex = i;
		break;
	}
}
//console.log(actIndex);
//do nothing if activity doesnt'exist
if(actIndex == null){
	return;
}


var dataPoints = [];


//get start index of data
var index = null;
if(result['activities'][actIndex]['instances'].length>num){
	index = result['activities'][actIndex]['instances'].length - num;
}
else if(result['activities'][actIndex]['instances'].length<=num){
	index = 0;
}
	
//console.log(result['activities'][actIndex]['instances'][0]['total']);

//get proper counts, fill dataPoints
for (var i = index; i < num + index; i++) {
	if(i>=result['activities'][actIndex]['instances'].length){
		dataPoints.push({
			x: i+1			
		});
	}
	else{
		//console.log(index);
	//console.log(parseInt(result['activities'][actIndex]['instances'][i]['distractions']));
		if(result['activities'][actIndex]['instances'][i]['distractions'].length == 0){
			dataPoints.push({
				x: i+1,
				y: 0
			});
		}
		else{
			dataPoints.push({
				x: i+1,
				y: parseInt(result['activities'][actIndex]['instances'][i]['total'])//actually want this --['totalCount']-- to replace [0]['count'];
			});
		}
	}
}

var chart = new CanvasJS.Chart("dataGraph", {
	animationEnabled: true,
	theme: "light1",
	title: {
		text: Title
	},
	axisY: {
		title: "Distraction Count",
		titleFontSize: 20
	},
	data: [{
		type: graphType,
		yValueFormatString: "#,### Units",
		dataPoints: dataPoints
	}]
});
chart.render();

}