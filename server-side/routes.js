const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import the database connection module

// Define a sample route with a database query
router.get('/api/sample_data', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query('SELECT * FROM your_table'); // Replace with your SQL query
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes and handlers as needed

module.exports = router;
