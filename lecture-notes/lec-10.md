## Hosting on a big internet!

---
### Routing
We need to forward ports and make sure no piece of the stack would prevent our requests from coming through.

---
### DNS
We don't want to use ip. We want nice name like **sigma-web.com**

Browser uses another API to get IP from the name. Servers that provide this API called **Domain Name Servers** and their IP addresses are just hardcoded in many places.

DNS uses it's own protocol (not HTTP)
There are levels of caching for DNS resolutions

---
### Encryption

There are trusted authorities that can give out "certificates". Clients use those certificates to verify the identity of a server and establish encryption key.

---
### Infrastructure

To host your service without interuptions, you likely would want to have a dedicated computer. 

There are "cloud" services that can sell you their computers to run your service on. You can connect to them using terminal and vscode same way we did connect to wsl. 

---

### Full Recap
---
- Internet as network of computers with addresses
- HTML/CSS
- Client Side JS
- HTTP protocol
- Fetching 3-d party API over HTTP
- Server side JS
- Express for creating API's
- Connecting to our own API
- Hosting frontend with vite (file server)
- Forwarding ports from WSL
- Debugging with developer console
- Running MongoDB with docker
- Connecting to Mongo from JS and storing data.
- Theoretical steps to host on the web
---

## What can we build with it?

propose things plz

---

## What we missed

---

### Browser Storage
- Cookies
- Local Storage
---
### Error handling
```javascript
Promise.catch(function (error) {console.log(error)})
```
 - Retry
 - Special pages (404, 503)
---
### Multiple pages
```html
<a href="/register">Register</a>
```
---
### Async syntax

Another syntax to work with promises. 
Underlaying process is the same, but it is easier to work with.

```javascript
// Async function will return promise of the actual returned value.
// await can't be called from non-async functions
async function myAsyncFunction() {
	let a = 5
	const response = await fetch("http://sigma-web.com");
	const json_data = await response.json()
	return json_data
}
```
---
### CSS frameworks

Your styles are amazing!
CSS files with some basic styles for basic elements can be shared between projects. 

Bootstrap -- just have okay stiles

---
### SPA vs SSR
**Single Page Application** -- what we have built
Logic rich frontend + API. It evolves into use more sophisticated libraries for management of frontend code. 

**Server Side Rendering** -- we add logic to the file server that serves our html file now and start building all the html on the backend side. Lean frontend. 

---

### Just advice

- Good tools make your code better
	- tools inside IDE
	- CLI tools
- Value good code organisation, it makes your code better.
	- Reuse functions
	- Use nice formatting or set up tools.
- Most logical things that you can think of are possible. Don't reinvent, find an existing solution.