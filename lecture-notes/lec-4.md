
### HTTP Requests

Components of HTTP Request
- Method (GET, POST, DELETE)
- Resource locator -- in the url, after /
- Headers
- Body

Response:
- Code
- Headers
- Body


This is the type of request that is sent by your browser to retrieve the document.


### Javasctipt Event Loop

Javascript has only one thread that you cannot make to wait. 

You can. Not. Block. JS.

To perform blocking operations, we delegate the long process somewhere outside of the main JS environment. 

```javascript 
console.log("start")

setTimeout(5000, function () { console.log("after timeout")})

console.log("end")

--> 
start
end
// 5 seconds pass
after timeout


const promise = takeLongTime(6000)
promise.then(function() {})
```

### Callback API vs Promises

Function can either accept callback and execute it after the external process completes
Or return a promise that we can decide how to handle. 

Those two options represent the same process, but different syntax

### Fetch API

```javascript

// Returns promise
fetch("http://sigmacamp.org/api").then(process_response)

function process_response(response) {
	console.log(response.headers)
}
```



### API we would use
- Sunrise data: https://sunrise-sunset.org/api
- Geolocation data: https://geocode.maps.co/search?q=new%20york&api_key=API_KEY_ASK_INSTRUCTOR
