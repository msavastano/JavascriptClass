// json data
var userdata = {
	'screenSize' : '',
	'userAgent' : '',
	'pageTitle' : '',
	'mouseMovesX' : [],
	'mouseMovesY' : [],
	'name' : '',
	'eMail' : '',
	'mouseCounter' : 0		
	};

	// button press clears and writes to console	
	function showResults() {
		console.clear();
		console.log(userdata);
	}

	var results = document.getElementById('showResults');
	//calls showResults on click
	results.addEventListener("click", showResults);	
	
	// function pushes mouse x and y values into array 
	
	function mouseMove(e){	
	
		userdata.mouseMovesX.push(e.clientX);
		userdata.mouseMovesY.push(e.clientY);
		// tests for array size
		if ( userdata.mouseMovesX.length > 99 ) {
			document.removeEventListener('mousemove', mouseMove);
		}
	}

	document.addEventListener('mousemove', mouseMove);
	
	// function creates name string on form blur
	
	var userName = document.getElementById("fullname");
	
	function getName(e){
		userdata.name = userdata.name + userName.value;
	
	}	
	
	userName.addEventListener('blur', getName);
	
	//  function creates email string on blur
	
	var emailid = document.getElementById("email");
	
	function getEmail(e){
		userdata.eMail = userdata.eMail + emailid.value;
	}
	
	emailid.addEventListener('blur', getEmail);
	
	
	
	// creates page title, screen size, and agent strings
	
	
	function getTitleScreenAgent(e) {
		userdata.pageTitle = document.title;
		userdata.screenSize = window.innerWidth + ", " + window.innerHeight;
		userdata.userAgent = window.navigator.userAgent;
	}
	
	window.addEventListener('load', getTitleScreenAgent);
	
	// counts mouseovers of button
	var count = 0;
	function getMouseOver(e) {
		count = count + 1;
		userdata.mouseCounter = count;			
	}
	
	results.addEventListener('mouseover', getMouseOver);
	
	// end js
	
	
	
