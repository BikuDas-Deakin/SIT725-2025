// Import required modules
const express = require('express');
const path = require('path');
// Create an Express app
const app = express();
const PORT = 3000;
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Pass http server to socket.io


// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
  console.log('user disconnected');
  });
  setInterval(()=>{
  socket.emit('number', parseInt(Math.random()*10));
  }, 1000);
});

  
// Start the server
http.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
