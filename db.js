const mysql = require('mysql');

// i am not sure about this... ???????
const connection = mysql.createPool({
  host: 'localhost',          
  user: 'your_username',      
  password: 'your_password',  
  database: 'your_database',  
  connectionLimit: 10,       
});

module.exports = connection;