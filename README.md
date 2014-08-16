# request.js

Dead simple XHR wrapper.

## Example

``` javascript
var api = 'http://localhost:1337/api'

//	Returns api config
function getConfig(data){
	var result = data || {};
	return request(api+"/config", "GET", true).then(function(response) { return response.data.result });
};
```

## Work in progress.

Currently only tested with GET requests.

### Releases

0.0.1 - All json

0.0.2 - Added variable to return json or raw