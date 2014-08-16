# request.js

Dead simple XHR wrapper.

## Example

``` javascript
var api = 'http://localhost:1337/api'

//	Returns api config
function getConfig(data){
	var result = data || {};
	return request(api+"/config", "GET").then(function(response) { return response.data.result });
};
```

## Work in progress.

Currently only tested with GET requests.