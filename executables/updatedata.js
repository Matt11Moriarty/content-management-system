const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'payroll'
    },
    console.log(`Connected to the payroll database.`)
  );

const updateEmployeeRole = (answers) => {
    sql = `UPDATE employees
    SET role_id = ?
    WHERE id = ?`
    input = [answers, answers] 

    db.query(sql, input, (err, result) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    updateEmployeeRole
}