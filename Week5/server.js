const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const helloRoute = require('./routes/hello');
const foodRoutes = require('./routes/food');

// Mount the route at /api/food
app.use('/api/food', foodRoutes);
// Mount the route at /api/hello
app.use('/api/hello', helloRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});