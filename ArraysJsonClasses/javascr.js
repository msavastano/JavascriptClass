// declare and fill JSon object data
var ad_metadata = {
	//'ad0' : {'title' : "", 'message' : ""},
	'ad0' : "BORED?  - Play ANGRY Hippopotomuses",
	'ad1' : "Need fun? - text 12345 to *234",
	'ad2' : "Learn code at CodeAcademy.com!",
	'ad3' : "Watch the Boston RedSox on NESN",
	'ad4' : "Post all your code at github.com"			
};

	randomAdDisplay(); // call main function
		
	// get a random key
	function getRandAdKey( len ) {
		return Math.floor(Math.random()*len);
	}
// begin main function
function randomAdDisplay() {
	
	var ad_div = document.getElementById("ad");	// div var	
	var ad_keys = [];	//declare array	
	var ad_key = ""; // declare key string
		
	// fill array with json keys
	for ( ad_key in ad_metadata ){
		ad_keys.push(ad_key);
	}
		
		
	var ad_keys_len = ad_keys.length;  // var for array length
	var rand_ad_key = getRandAdKey(ad_keys.length);	// assigns var to function call to get key
		
	var ad_key_value = ad_keys[rand_ad_key];  // assigns var to random array index
		
	var ad_metadata_value = ad_metadata[ad_key_value];  //assigns var to value retrieved from json object
		
	ad.innerHTML = "<span id='inner'>" + ad_metadata_value + "</span>";  // adds html to div
		
	document.title = ad_metadata_value.substr(0,15); // changes title to first 15 characters of ad
		
} 
