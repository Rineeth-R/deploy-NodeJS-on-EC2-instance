const express = require('express');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
