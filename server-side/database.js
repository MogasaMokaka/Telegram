const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'github',
  connectionLimit: 5,
});

async function getConnection() {
  return await pool.getConnection();
}

module.exports = { getConnection };