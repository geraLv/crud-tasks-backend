const mysql = require("mysql2/promise")

const conectar = async(req, res)=>{
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "tasks_db"

    })
}

module.exports = conectar