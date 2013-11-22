var statusCodes = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unassigned",
            426: "Upgrade Required",
            427: "Unassigned",
            428: "Precondition Required",
            429: "Too Many Requests",
            430: "Unassigned",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates (Experimental)",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Unassigned",
            510: "Not Extended",
            511: "Network Authentication Required"
        };

	
		// XML HTTP Request
		var xhr = new XMLHttpRequest();
		
		// element variables
		var content = document.getElementById('content');  
		var results = document.getElementById('showResults');
		// counter
		var pageCounter = 1;
		// url variable
		var url = "http://127.0.0.1:81/javascriptlabweek7/demo.php?page=";
		
		
		
		// main function that puts data from showmore function into div
		function callback() {			 
			var response = xhr.responseText;  			
			content.innerHTML += response;
		}		
		
		// checks status and state - calls main function
		xhr.onreadystatechange = function() { 
									
		   if (xhr.readyState==4 && xhr.status==200) {  
			callback();  
		   } 
		};  
		
		
		
		// function that gets data
		function showMore() {
			// stop counter @ 4
			if (pageCounter == 5) {
				results.removeEventListener('click', showMore);
			}
			// retrieves data by url and pageCounter number
			xhr.open('GET', url +  pageCounter, true);  // need to go into function
			xhr.send(); 
			pageCounter++;	
		}
		
		// load listener calls first page
		// click listener calls next few pages
		results.addEventListener('click', showMore);
		window.addEventListener('load', showMore);	
