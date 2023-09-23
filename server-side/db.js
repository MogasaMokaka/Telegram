const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'github',
  connectionLimit: 5, // Adjust as needed
});

module.exports = pool;
