const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
