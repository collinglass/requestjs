//
// request.js
//
// Dead Simple XHR Request Library
//
// @author Collin Glass <collinglass@gmx.com>
// @copyright 2014 Collin Glass
// @license BSD-3 <https://raw.github.com/collinglass/request/master/LICENSE>
// @version 0.0.1
//

function request(route, method) {
	return new Promise(function(resolve, reject){
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 ) {
				if (xmlhttp.status == 200) {
					resolve((eval("(" + xmlhttp.responseText + ")")))
				} else if (xmlhttp.status == 400) {
					reject((eval("(" + xmlhttp.responseText + ")")))
				} else {
					reject((eval("(" + xmlhttp.responseText + ")")))
				}
			}
		}

		xmlhttp.open(method, route, true);
		xmlhttp.send();
		
	});
}