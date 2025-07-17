// Import required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// POST route to perform calculation based on user input
app.post('/calculate', (req, res) => {
  // Extract inputs from the request body
  const { num1, num2, operation } = req.body;

  // Convert inputs to numbers
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  // Basic input validation
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Please enter valid numbers.' });
  }

  // Perform selected operation
  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = b !== 0 ? a / b : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operation';
  }
  // Send result back to the client
  res.json({ result });
});

// Start the server
app.listen(PORT,()=>{
  console.log("App listening to: "+PORT)
  console.log("App listening http://localhost:"+PORT)
  })