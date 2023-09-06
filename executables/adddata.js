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

const addDepartment = (answers) => {
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;
    const input = answers.deptName

    db.query(sql, input, (err, result) => {
        if (err) {
            console.log(err);
        }
    })
}

const addRole = (answers) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`
    const input = [answers, answers, answers] //takes input from inquirer answers

    db.query(sql, input, (err, result) => {
        if (err) {
            console.log(err);
        }
    })
}

const addEmployee = (answers) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`
    const input = [answers, answers, answers, answers] //takes input from inquirer answers

    db.query(sql, input, (err, result) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}