// 1. Import express
const express = require('express');

// 2. Create an Express app
const app = express();

// 3. Choose a port number
const PORT = 4000;

// 4. Define a route for GET requests to the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// 5. Start the server and listen on the chosen port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
