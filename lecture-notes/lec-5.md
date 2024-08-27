## Creating an API

### Server -- computer that is configured to respond to HTTP requests with some content. 

We tried geocode.maps.co and sunrise-sunset.org

Now is time to create our own one!


### Running Javascript on the server. 

```shell
#run javascript in CLI
node script.js
```

### Adding libraries

To manage set of library versions, we need to use a tool called npm - Node Packet Manager

It creates a file to track required libraries versions and helps us download all the libraries we need right in the same folder. 

```shell
# initialize your folder as JS repository
npm init --yes

# install libraries (express is the name of the library)
npm install express
```

#### package.json

Configuration file that stores definition of your project. 
Lists libraries that you need 
Allows you to configure scripts to execute within those libraries.

```json
{
	"name": "server",
	"version": "1.0.0",
	"type": "module", // <------ SET THIS BY HAND
	"main": "server.js",
	"scripts": {
		"start": "node server.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"description": "",
	"dependencies": {
		"express": "^4.19.2",
		"mongodb": "^6.8.0",
		"nodemon": "^3.1.4"
	}
}
```


### We would use express library to process requests

```javascript
import express from 'express';
```

### Create app, Add resources, Listen on a port

Port is a level of assigning addresses to individual applications. 

```javascript

// Create express applicaton
const app = express();


// Process GET requests for /notes resource
app.get("/notes", function getNotes(req, res) {
	// Read request body
	console.log("request body is" + req.body)

	// Return object in JSON notation back
	res.json([
		{ 
			name: "note name", 
			note: "note text"
		}
	])
})


// Start accepting connections on port 3000
app.listen(3000)
```


### Middleware

We need to do some housekeeping logic to

1. Read body into convenient JS format:

```javascript
app.use(express.json())
```

2. Assign headers that would allow connections from any host

### OPTIONS request

by default server application would only accept connections from the same origin.
We don't need it, so we need to disable it by setting headers on the OPTIONS request response

```http
OPTIONS /api/resource HTTP/1.1
Origin: https://anotherdomain.com 
Access-Control-Request-Method: POST
```

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization

```

```javascript
import cors from 'cors'

app.use(cors())
```

there is a way to create your own middleware, but so far we don't need it. 


-----------