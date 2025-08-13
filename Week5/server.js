const express = require('express');
const app = express();
var port = process.env.port || 3000;
const path = require('path');
const mongoose = require('mongoose');

// Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import route file
const helloRoute = require('./routes/hello');
const foodRoutes = require('./routes/food');
const projectRoutes = require('./routes/projectRoutes');

// Mount the route at /api/food
app.use('/api/food', foodRoutes);
// Mount the route at /api/hello
app.use('/api/hello', helloRoute);
// Mount the route at /api/hello
app.use('/api',projectRoutes)

mongoose.connect('mongodb://localhost:27017/myprojectDB2');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  console.log("App listening to: " + port)
})

