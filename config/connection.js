const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    // console.log(`connected as id ${connection.threadId}`);
});

// const orm = {
//     all: (table) => {
//         return new Promise((resolve, reject) => {
//             const queryString = "SELECT * FROM ??"
//             connection.query(queryString, (table), (err, result) => {
//                 if (err) {
//                     reject(err);
//                 }
//                 resolve(result);
//             });

//         });
//     }
// }

// orm.all("burgers").then((result) => {
//     console.log(result);
// });


module.exports = connection;