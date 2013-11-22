		// begin validation fuction on button click
function validateForm() {		
		var fname = document.getElementById("fn"),
			fnameSpan = document.getElementById("errorFn");
		var lname = document.getElementById("ln"),
			lnameSpan = document.getElementById("errorLn");
		var email = document.getElementById("em"),
			emailSpan = document.getElementById("errorEm");
		var comm = document.getElementById("com"),
			commSpan = document.getElementById("errorCom");
						
		var fNameReg = /^[a-zA-Z]+$/;  //first name alpha no spaces
		var lNameReg = /^[a-zA-Z ]+$/; //last name alpha with spaces
		var emailReg = /^[a-zA-Z][a-zA-Z0-9]+[@][a-zA-Z0-9]+[\.][a-zA-z]{3,4}$/; //start with characters, have a @ symbol, have another set of characters have a period and end with 3 characters
		//var htmlReg = /^[<][a-zA-Z0-9> ]+|[<a-zA-Z0-9 ]+[>]$/;
		var htmlReg = /^[<].+[>]$/; //test for html tags
		//var htmlReg = /<.+?>/g;
		
		// function to test regex
		function testRegEx( reg, str ){
			return reg.test( str )
		}
		 var counter = 0; // counts validated fields
		
		
		var spl = comm.value.split(/<.+?>/g);  //split comments by html tag
		var splLen = spl.length; //get length
				
		var rejoin = []  //declare array
		while (splLen--){ //while len is not 0
			
			var mat = spl[splLen].match(htmlReg);  //match split strings in array
			
			var rep = spl[splLen].replace(mat, "");	//replace matches with nothing
			
			
			rejoin.unshift(rep); //put array back together
			var joined = rejoin.join(" "); //turn array back to string
			
		}
		 // test code
		//console.log(joined);
		
		//var testString = "<Hel lo>";
		//var testString2 = "HelloThere";		
		//t = testS.match(htmlReg);
		//d = testS.replace(t, " ");
		
		//console.log(t);
		//console.log(d);
		//console.log(spl.length);
		
		
		//validate first name
		if (fname.value.length == 0){
			fname.className = 'errorb';	
			fnameSpan.innerHTML = "* must not be blank";
			fnameSpan.className = 'error';				
		}else if (testRegEx(fNameReg, fname.value) == false){ //test regex
			fname.className = 'errorb';	
			fnameSpan.innerHTML = "* must have alpha characters only and no spaces";
			fnameSpan.className = 'error';
		}else{ //if it validates...
			fname.className = 'noError';	
			fnameSpan.innerHTML = "";
			counter += 1;
		}
		
		
		//validate last name
		if (lname.value.length == 0){
			lname.className = 'errorb';	
			lnameSpan.innerHTML = "* must not be blank";
			lnameSpan.className = 'error';
		}else if (testRegEx(lNameReg, lname.value) == false){ //test regex
			lname.className = 'errorb';	
			lnameSpan.innerHTML = "* must have alpha characters, no numbers";
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
		}else if (testRegEx(emailReg, email.value) == false){ //test regex
			email.className = 'errorb';	
			emailSpan.className = 'error';
			emailSpan.innerHTML = "Email form has set of chars that starts with a character, has '@', has set of chars, has '.', then set 3 or 4 chars";
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
			comm.value = joined;
			counter += 1;
		}
		
		//run if all four fields validate
		if (counter === 4){
			document.getElementById("formDiv").className = 'formDone'; //hide form
			document.getElementById("confirmation").className = 'confirm'; //set confirm div attributes
			//fill confrmation box with labels and values.
			document.getElementById("confirmation").innerHTML = "<h3>CONFIRMED</h3> <br /> FIRST NAME: <span>" + fname.value + "</span><br /> LAST NAME: <span>" + lname.value + "</span><br /> EMAIL ADDR: <span>" + email.value + "</span><br /> COMMENTS: <span>" + comm.value + "</span>";
			document.getElementById("simpleForm").reset();
		}
		
		
}		
		
	// add event listener on button	
var sButton = document.getElementById("sub-button");		
sButton.addEventListener("click", validateForm);
		
