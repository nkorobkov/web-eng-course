
### Local network and Firewall
See command at http://192.168.1.82:5174/fix-ip.md
replace WSL_IP with ip from linux

`netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=WSL_IP`
wsl ip
`ip addr` in wsl
``
### Text Area tag
```html
-- input for multi line 
<textarea id="note" type="textarea" rows="4" placeholder="Note"></textarea>
```

```html
-- new line
</br>
```

```javascript
new Date().toDateString() // get date string
```

### Send info over HTTP from JS

```javascript

fetch("192.168.1.82:3000/note", {
	method: "POST", 
	headers: {
		'Content-Type': 'application/json' // Specify JSON content
	},
	body: JSON.stringify({
		name: "name", 
		note: "notes"
	})
})
```

### Serve static files over HTTP

in the directory with your index.html run 
```shell
vite --host
```