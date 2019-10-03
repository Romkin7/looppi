//Dateabase connection

// const mysql = require('mysql');

// const connection = mysql.createConnection({
// //    socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
//     host: "127.0.0.1",
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: "wrappi_db"
// });

// connection.connect();

// // Add or get user
// module.exports.setUser = async (req, res, next) => {
//     try {
//         let user = await connection.query("SELECT Username FROM users WHERE "+req.body.username);
//     } catch(err) {
//         return next(err);
//     }
// };

// connection.end();
