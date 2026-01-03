const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',                 //MySQL root username
    password: 'Mysql@Strong123',    //MySQL root password
    database: 'smart_ward_portal',// database 
    port: 3306
});

db.connect((err) => {
    if (err) console.log('Database connection failed:', err);
    else console.log('Connected to MySQL database');
});

module.exports = db;
