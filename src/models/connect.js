// import mysql from "mysql2";
// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: 3306,
//     database: "db_youtube",
// });

import Sequelize from "sequelize"

const sequelize = new Sequelize("db_youtube", "root", "1234", {
    host: "localhost",
    port: "3306",
    dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default sequelize

// try {
//     sequelize.authenticate();
//     console.log("connect sucessfully");
// } catch (err) {
//     console.log(err);
//     console.log("connect failed");
// }
