# Socket.IO Tutorial – Week 7

This is a simple example showing how to use **Express** and **Socket.IO** to create real-time communication between a server and client.  

## How it works
- The server (`server.js`) sends a random number every second to connected clients.  
- The client (`index.html` + `script.js`) receives the number via WebSockets and displays it on the page.  

## Run the project
1. Install dependencies:
   ```bash
   npm install express socket.io
2. Start the server:
   ```bash
   node server.js
or 
  ```bash
  npm run start

3. open your browser at: 
http://localhost:3000
