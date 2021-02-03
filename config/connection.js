// Set up MySQL connection.
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.host || 'localhost',
    port: 3306,
    user: process.env.user || 'root',
    password: process.env.password || 'password',
    database: process.env.db || 'burgers_db',
});
// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});
// Export connection for our ORM to use.
module.exports = connection;