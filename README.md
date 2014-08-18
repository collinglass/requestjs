# request.js

Dead simple XHR wrapper.

## Example

``` javascript
var api = 'http://localhost:1337/api'

//	GET request
function getConfig(data){
	var result = data || {};
	return request(api+"/config", "GET", null, true).then(function(response) { return response.data.result });
};

// POST request
function postForm(data){
	var result = data || {};
	return request(api+"/form", "POST", data, true).then(function(response) { return response.data.result });
};
```

## API

request(path, method, data, json)

	path : uri path
	method : GET, POST, PUT, etc.
	data : data to be sent in request body
	json : boolean to return json or plain

## Work in progress.

Currently only supports ```application/json``` POSTs

### Releases

0.0.1 - All json

0.0.2 - Added variable to return json or raw

0.0.3 - Added POST (application/json)