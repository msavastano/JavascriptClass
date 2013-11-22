function firNamFun(){
		//console.log();
		var fname = document.getElementById("fn"),
			fnameSpan = document.getElementById("errorFn");
		var lname = document.getElementById("ln"),
			lnameSpan = document.getElementById("errorLn");
		var email = document.getElementById("em"),
			emailSpan = document.getElementById("errorEm");
		var comm = document.getElementById("com"),
			commSpan = document.getElementById("errorCom");
			
		console.log(document.getElementById("em"));
		
		//count how many fields are correct
		var counter = 0;

			//validate first name
		if (fname.value.length == 0){
			fname.className = 'errorb';	
			fnameSpan.innerHTML = "*";
			fnameSpan.className = 'error';				
		}else{ //if it validates...
			fname.className = 'noError';	
			fnameSpan.innerHTML = "";
			counter += 1;
		}
		
			//validate last name
		if (lname.value.length == 0){
			lname.className = 'errorb';	
			lnameSpan.innerHTML = "*";
			lnameSpan.className = 'error';
		}else{ //if it validates...
			lname.className = 'noError';
			lnameSpan.innerHTML = "";
			counter += 1;
		}
		
			//validate email
		if (email.value.length == 0){
			email.className = 'errorb';	
			emailSpan.className = 'error';
			emailSpan.innerHTML = "Please fill in email address";
		}else if (email.value.indexOf("@") == -1){ //check for @
			email.className = 'errorb';	
			emailSpan.className = 'error';
			emailSpan.innerHTML = "Email is not valid, no '@' symbol";
		}else if (email.value.indexOf(".") == -1){  //check for .
			email.className = 'errorb';	
			emailSpan.className = 'error';
			emailSpan.innerHTML = "Email is not valid, no '.' symbol";
		}else{ //if it validates...
			email.className = 'noError';
			emailSpan.innerHTML = "";
			
			counter += 1;		
		}
		
			//validate comment box
		if (comm.value.length == 0){ // more than 0 chars
			comm.className = 'errorb';
			commSpan.className = 'error';
			commSpan.innerHTML = "  Field empty, please fill in comments";
		}else if(comm.value.length > 150){ //150 chars or less
			comm.className = 'errorb';
			commSpan.className = 'error';
			commSpan.innerHTML = "  Too many characters, 150 limit";
		}else{ //if it validates...
			comm.className = 'noError';
			commSpan.innerHTML = "";	
			counter += 1;
		}
		
			//run if all four fields validate
		if (counter === 4){
			document.getElementById("formDiv").className = 'formDone'; //hide form
			document.getElementById("confirmation").className = 'confirm'; //set confirm div attributes
			//fill confrmation box with labels and values.
			document.getElementById("confirmation").innerHTML = "<h3>CONFIRMED</h3> <br /> FIRST NAME: <span>" + fname.value + "</span><br /> LAST NAME: <span>" + lname.value + "</span><br /> EMAIL ADDR: <span>" + email.value + "</span><br /> COMMENTS: <span>" + comm.value + "</span>";
			//resets form in FF and IE
			document.getElementById("simpleForm").reset();
		}
		//console.log(counter);		
		
	}
