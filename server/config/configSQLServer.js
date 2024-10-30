const SQL = require("mssql");
require('dotenv').config({path: "./config/.env"})
// SQL Server configuration
const config = {
    database: 'RandomAppDB',
    server: 'MSI\\SQLEXPRESS',
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWD,
    options: {
        encrypt: false,
    }
};

const pool = new SQL.ConnectionPool(config)

// Connect to SQL Server
pool.connect().catch(err => {
    if (err) throw err
    else console.log("Connection Successful!!!")
})


module.exports = pool
