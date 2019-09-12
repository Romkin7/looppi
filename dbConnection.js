//Dateabase connection

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "romka",
    password: "password123",
    database: "wrappi_db"
});

connection.connect();
