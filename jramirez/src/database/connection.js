const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'ragnar',
  password: 'ragnar',
  database: 'examen',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

});
module.exports= pool;