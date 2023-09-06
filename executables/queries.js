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

const queries = {
    viewDepartmentsTable: async () => {
        db.query(`SELECT * FROM departments`, function (err, results) {
            console.table(results);
        })
    },
    viewRolesTable: async () => {
        db.query(`SELECT * FROM roles`, function (err, results) {
            console.table(results);
        })
    },
    viewEmployeesTable: async () => {
        db.query(`SELECT * FROM employees`, function (err, results) {
            console.table(results);
        })
    },
    addDepartment: async (answers) => {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const input = answers.deptName

        db.query(sql, input, (err, result) => {
            if (err) {
                console.log(err);
            }
    })},
    addRole: async (answers) => {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`
        const input = [answers.roleName, answers.roleSalary, answers.department]

        db.query(sql, input, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    },


    allDepartmentsArray: async () => {
        const [departments] = await db.promise().query('SELECT * FROM departments')
        return departments;
    },
}
// const viewDepartmentsTable = () => {
//     db.query(`SELECT * FROM departments`, function (err, results) {
//         console.table(results);
//     })
// }

module.exports = queries