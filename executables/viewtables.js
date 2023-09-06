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


const viewDepartments = () => {
    db.query(`SELECT * FROM departments`, function (err, results) {
        console.table(results);
    })
}

const viewRoles = () => {
    db.query(`SELECT * FROM roles`, function (err, results) {
        console.table(results);
    })
}

const viewEmployees = () => {
    db.query(`SELECT * FROM employees`, function (err, results) {
        console.table(results);
    })
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees
}