### Recap

2 folders with 2 node repositories -- Frontend and Backend

Folder structure:

```
day-3
├── client
│   ├── index.html
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── script.js
└── server
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── server.js
```

backend started with `node server.js`
Frontend started with `vite --host` (it finds index.html automatically)

Ports forwarded from Windows to Linux Subsystem with (may work from yesterday)
Forward a new port to make your frontend accessible on the local network.
```bash
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=WSL_IP

netsh interface portproxy add v4tov4 listenport=5137 listenaddress=0.0.0.0 connectport=5137 connectaddress=WSL_IP
```

### Applications of what we learned

- Multiplayer games with no persistence (chess, catan)
	- Multiplayer quiz with timer
- Wrappers over other API's (hiding tokens)

### 2 Problems

-  Problem 1
	- When we stop the server, all notes are deleted
- Problem 2
	- We do not check names of users and anyone can be anyone


### How to add persistence
- Text file
- Multiple servers hoping at least one is always up
- Google docs
- Database


