const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'local host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

module.exports = connection;