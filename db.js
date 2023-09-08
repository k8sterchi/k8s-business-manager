const mysql = require('mysql');

// Create a connection pool to manage database connections
const connection = mysql.createPool({
  host: 'localhost',          
  user: 'your_username',      
  password: 'your_password',  
  database: 'your_database',  
  connectionLimit: 10,       
});

module.exports = connection;