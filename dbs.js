var mysql = require('mysql')
const _CONFIG = require('./dbConfig')
    // 创建连接池
let pool = mysql.createPool(_CONFIG)

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.end()
                })
            }
        })
    })
}
console.log( ' asasasasas');
module.exports = {
    query
}