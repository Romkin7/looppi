//Dateabase connection

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "wrappi_db"
});

connection.connect();
