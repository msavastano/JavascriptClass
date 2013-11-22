//start jscrpt jquery

// 3. add class to nav boxes
$("#nav1,#nav2, #nav3, #nav4").addClass("contentBox");

// 1. animate 'this' nav tab on hover
$("#nav li").mouseover(function() {

	$( this ).animate(
	{
		marginTop: "-10px"		
	},  300);

});

// 1. animate 'this' nav tab on mouse out
$("#nav li").mouseout(function() {

	$( this ).animate(
	{
		marginTop: "0px"
	},  300);

});

// 2. toggle fade in / fade out in link clicks
	$("#link1").click(function(){
		$("#nav1").fadeToggle(500);	
	});
	
	$("#link2").click(function(){
		$("#nav2").fadeToggle(500);	
	});
	
	$("#link3").click(function(){
		$("#nav3").fadeToggle(500);	
	});
	
	$("#link4").click(function(){
		$("#nav4").fadeToggle(500);	
	});

// end js
