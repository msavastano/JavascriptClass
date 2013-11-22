/*//////////////////////////////
Michael Savastano
final project
Agreement Page
////////////////////////////*/

$("document").ready(function() { //document load
//bool variables
var agree1 = false;
var agree2 = false;
var fullScroll = false;
var fullScroll2 = false;

//variable for id'd elements
var radioAgree = document.getElementById('agree');
var radioDisagree = document.getElementById('notagree');
var link1 = document.getElementById('agreeLink1');
var link2 = document.getElementById('agreeLink2');
var objDiv = document.getElementById("agreeScroll");
var objDiv2 = document.getElementById("agreeScroll2");
var subButton = document.getElementById('submitAgreement');
var modalP = document.getElementById('modalPop');
var sec2 = document.getElementById('section2');
var sec1 = document.getElementById('section1');
var pageTitle = document.getElementById('title');

    //checks to see what/if inline message should be showing
	function checkInline(){
            if (agree1 == false || agree2 == false){
	       $('#no-agree-span').css('display', 'inline').html('Please click both links to view documents');
	       subButton.value = "Review Terms";	
            }else if (fullScroll == false || fullScroll2 == false){
	       $('#no-agree-span').css('display', 'inline').html('Please scroll through and read both documents');
	       subButton.value = "Review Terms";	
            }else if (radioDisagree.checked == false && radioAgree.checked == false){
	       $('#no-agree-span').css('display', 'inline').html('Please select "Agree" or "Disagree"');
	       subButton.value = "Review Terms";
            }else{
	       $('#no-agree-span').css('display', 'none');
            }
/*
		if (radioDisagree.checked == true || fullScroll == false || agree1 == false || agree2 == false){
			$('#no-agree-span').css('display', 'inline').html('You have not yet agreed to all the specified terms ');
			subButton.value = "Review Terms";	
		}else if (radioDisagree.checked == false && radioAgree.checked == false && agree1 == true && agree2 == true && fullScroll == true && fullScroll2 == true){
			$('#no-agree-span').css('display', 'inline').html('Please select "Agree" or "Disagree"');
			subButton.value = "Review Terms";	
		}else{
			$('#no-agree-span').css('display', 'none');
		}
*/
	}
		
	// run on doc one click
	function agreeLinkFun1(){
		agree1 = true;
		link1['className'] += 'clicked';
		link1.removeEventListener('click', agreeLinkFun1);
		$('#agreeScroll span').css('color', 'black');
		$('#agreeScroll').css('overflow', 'auto');
	}
	
	 // run on doc two click
	function agreeLinkFun2(){
		agree2 = true;
		link2['className'] += 'clicked';
		link2.removeEventListener('click', agreeLinkFun2);
		$('#agreeScroll2 span').css('color', 'black');
		$('#agreeScroll2').css('overflow', 'auto');		
	}
	
	
	// checks for scroller amount
	function scroller(){			
		if ( ($('#agreeScroll')[0].scrollHeight) <= $('#agreeScroll').scrollTop() + $('#agreeScroll').innerHeight()) {
			fullScroll = true;
		}
				
		if ( ($('#agreeScroll2')[0].scrollHeight) <= $('#agreeScroll2').scrollTop() + $('#agreeScroll2').innerHeight()) {
			fullScroll2 = true;
		}
		
		//console.log(fullScroll);
		console.log("fullScroll " + fullScroll);
		console.log("fullScroll2 " + fullScroll2);
		if (fullScroll == true && fullScroll2 == true && agree1 == true && agree2 == true){	// if all clicked and scrolled...		
			radioAgree.disabled = false;
			radioDisagree.disabled = false;				
		}		
	}
		//unlocks button after radio button pressed
	function radioToButton(){
                checkInline()  
		if (radioAgree.checked == true ){
			subButton.disabled = false;
			subButton.value = "Continue";			
		}
                if (radioDisagree.checked == true){
                         subButton.value = "Review Terms";
                         $('#no-agree-span').css('display', 'inline').html('Are you sure you want to Disagree?');
                }
				
	}	
	
	// run on continue button click
	function pushButton() {		
		checkInline()	
		//opacity for background and calls of modal popup
		if (radioDisagree.checked == false && radioAgree.checked == true && agree1 == true && agree2 == true && fullScroll == true){			
			sec2.style.opacity = '0.3';
			sec1.style.opacity = '0.3';
			pageTitle.style.opacity = '0.3';
			modalP.style.display = 'inline';
			modalP.innerHTML += 'Thank you!  All terms and conditions read and agreed to.';	
			bodyEvent();			
		}else if (radioDisagree.checked == true && agree1 == true && agree2 == true && fullScroll == true){
			sec2.style.opacity = '0.3';
			sec1.style.opacity = '0.3';
			pageTitle.style.opacity = '0.3';
			modalP.style.display = 'inline';
			modalP.innerHTML += 'You have disagreed to the terms and conditions.';	
			bodyEvent();				
		}			
	}
	
	// fires off mouseup event for any body click
	function bodyEvent(){		
			document.body.addEventListener('mouseup', bodyClick)		
	}
	// turns page into redirect at end
	function bodyClick(){
		document.body.innerHTML = '<h3> New Page</h3>';
		document.body.removeEventListener('click', bodyClick)					
	}
	
	function ajaxDocs() {		
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", "/agreeTermsConditions/king.php", true);
			xmlhttp.send();	
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){				
					document.getElementById("agreeScroll2").innerHTML=xmlhttp.response;				
				}
			}		
			var xmlhttp2 = new XMLHttpRequest();
			xmlhttp2.open("GET", "/agreeTermsConditions/hedges.php", true);
			xmlhttp2.send();	
			xmlhttp2.onreadystatechange = function(){
				if (xmlhttp2.readyState==4 && xmlhttp2.status==200){				
					document.getElementById("agreeScroll").innerHTML=xmlhttp2.response;				
				}
			}	
	}	
	// event listerners 
	link1.addEventListener('click', agreeLinkFun1);	
	link2.addEventListener('click', agreeLinkFun2);	
	objDiv.addEventListener('scroll', scroller);
	objDiv2.addEventListener('scroll', scroller);
	radioAgree.addEventListener('click', radioToButton);
	radioDisagree.addEventListener('click', radioToButton);
	subButton.addEventListener('click', pushButton);
	window.addEventListener('load', ajaxDocs);	
});	