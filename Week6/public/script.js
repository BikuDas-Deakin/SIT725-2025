document.getElementById('calc-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Get user inputs
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;

  // Send POST request to server
  const response = await fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ num1, num2, operation })
  });

  // Parse server response and show result
  const data = await response.json();
  const resultElement = document.getElementById('result');

  if (data.error) {
    resultElement.textContent = `Error: ${data.error}`;
  } else {
    resultElement.textContent = `Result: ${data.result}`;
  }
});
