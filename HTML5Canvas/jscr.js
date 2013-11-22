var temps = {
	'year': ['1900', '1920', '1940', '1960', '1980', '2000', '2010'],
	'temp': ['0.05', '0.38', '.4', '.5', '0.42', '0.5', '.62',  '0.85',  '1.0', '1.1']	 
}
// vars
var canv = document.getElementById("myCanvas"),
	ctx = canv.getContext("2d"),
	btnAn = document.getElementById("aniBtn"),
	btnStp = document.getElementById("stepBtn");
	
// constants and setters
var temp_space = canv.width / temps['temp'].length;
var HEIGHT = canv.height;
var SCALE_OFFSET = 50;  // this determines start of chart
var TEMP_OFFSET = temp_space;  // scales ani line based on amount of temps
var CIRCLE_WID = 4;
	
draw()  // start program

function draw(){

	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	
	ctx.beginPath();
	// rec for chart boundary
	ctx.rect(50, 50, 600, 300);	
	
	// draws chart lines
	for ( var i = 100; i < 301; i += 50 ) {			
		ctx.moveTo(50, i); 
		ctx.lineTo(650, i);		
	}
	ctx.stroke();

	ctx.fillStyle = "black";
	ctx.font = "25px Helvetica";
	ctx.fillText("Pretend Temperature 1900 - 2010", 10, 25);
	
	// text years
	var num = 1.2, year = 1900;
	for (var j = 50; j < 351; j += 50){
		
		ctx.fillStyle = "black";
		ctx.font = "15px Helvetica";
		ctx.fillText(num.toFixed(1), 20, j);
		num -= .2;
	}	
	// text temps
	yearc = 0
	for (var k = 45; k < 600; k += 100){		
		ctx.fillStyle = "black";
		ctx.font = "15px Helvetica";
		ctx.fillText(temps['year'][yearc], k, 370);
		yearc++;		
	}
}

var counter = 0;  // for line ani
var scale_formula;  // for initial ani
var last_scale_formula; // for initial ani
var tempsArr = []  // holds array for circle ani
var tempX = SCALE_OFFSET;  // init x value

function animateLine(){
	// these formula determine y on lines
	scale_formula = HEIGHT - (((temps['temp'][counter]*25) / .1) + SCALE_OFFSET);
	last_scale_formula = HEIGHT - (((temps['temp'][counter-1]*25) / .1) + SCALE_OFFSET);
	
	ctx.lineWidth = 5;
	ctx.strokeStyle = "red";
	ctx.lineJoin = "round";
	ctx.lineCap = "round";	
	
	// ends line ani, calls circle ani
	if (counter >= temps['temp'].length) {
		intC(); //callback to timer which fires off circle animation function	
		clearInterval(aniTimer);	
	} 
	
	// fills tempArr
	if (counter < (temps['temp'].length)){
		tempsArr.push(scale_formula);
	}	
	
	// calls function that draws line
	line()	
	
	ctx.stroke();	
	counter++;	
}

// draw line step-by-step or ani
function line(){
	(function(){
		ctx.beginPath();
		ctx.moveTo(tempX, last_scale_formula);		
		
		if (counter != 0){
			tempX+=TEMP_OFFSET;
		}
		
		if (counter < temps['temp'].length){		
			ctx.lineTo(tempX, scale_formula);
				
		}
	}) ();
}

// vars and function to animate circle
var circleCount = 0;
var rad = 0;
function drawCircle(){
	//clear screen during circle ani
	ctx.clearRect(0, 0, canv.width, canv.height);	
	if (circleCount < 4){
		rad+=CIRCLE_WID;
	}else if (circleCount < 8){
		rad-=CIRCLE_WID;
	}else{
		// end ani
		clearInterval(circleInt);		
	}
	
	
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle="black";
	ctx.arc(tempX,tempsArr[tempsArr.length-1],rad,0,2*Math.PI);
	ctx.fillStyle = 'red';	
	ctx.fill();	
	
	ctx.stroke();
	circleCount++;
	
	draw(); // redraw graph and text
	redraw(); // redraw ani line
}

// data used for y of redrawn ani line
var redraw_scale_formula;  
var redraw_last_scale_formula;

//function to redraw function line after clears
function redraw(){	
	tempX = 50;
	
	ctx.lineWidth = 5;
	ctx.strokeStyle = "red";
	ctx.lineJoin = "round";
	ctx.lineCap = "round";	
	
	for (var i = 0; i < temps['temp'].length; i++){
		// sets y
		redraw_scale_formula = HEIGHT - (((temps['temp'][i]*25) / .1) + SCALE_OFFSET);
		redraw_last_scale_formula = HEIGHT - (((temps['temp'][i-1]*25) / .1) + SCALE_OFFSET);
		
		if (i==0){
			ctx.beginPath();
			ctx.moveTo(tempX, redraw_scale_formula);						
		}		
		if (i > 0){
			tempX+=TEMP_OFFSET;
			ctx.lineTo(tempX, redraw_scale_formula);					
		}
		ctx.stroke();	
	}
}
	
// animation timer function
function intervalAni() {
	aniTimer  = setInterval(animateLine, "500");		
}

// timer function for circle
function intC(){
	circleInt = setInterval(drawCircle, "100");
}

// button click events
btnAn.addEventListener('click', intervalAni);
btnStp.addEventListener('click', animateLine);
