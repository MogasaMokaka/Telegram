// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // You can change the port if needed

// Middleware to parse JSON requests
app.use(express.json());

// Define a sample route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Import required modules
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;
// const routes = require('./routes'); // Import your routes module

// app.use(express.json());

// // Use your routes
// app.use('/api', routes); // Routes will be available under /api/*

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
