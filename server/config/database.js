const mysql = require("mysql");
const ini = require("ini");
const fs = require("fs");

const INIconfig = ini.parse(fs.readFileSync(__dirname + "/../config.ini", "utf-8"));

const sql = mysql.createConnection({
    host: INIconfig.database.db_host,
    user: INIconfig.database.db_user,
    //password: INIconfig.database.db_pass,
    database: INIconfig.database.db_name
});
const connection = sql.connect();

module.exports = {
    sql,
    connection
}

