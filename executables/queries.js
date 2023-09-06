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
        const input = [answers.roleName, answers.roleSalary, answers.department_id]

        db.query(sql, input, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    },
    addEmp: async (answers) => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`
        const input = [answers.empFirstName, answers.empLastName, answers.empRole, answers.empManager]

        db.query(sql, input, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    },

    allEmployeesArray: async () => {
        const [employees] = await db.promise().query(`SELECT id, first_name FROM employees`);
        return employees;
    },
    allRolesArray: async () => {
        const [roles] = await db.promise().query('SELECT id, title FROM roles');
        return roles;
    },
    allDepartmentsArray: async () => {
        const [departments] = await db.promise().query('SELECT * FROM departments');
        return departments;
    },
}
// const viewDepartmentsTable = () => {
//     db.query(`SELECT * FROM departments`, function (err, results) {
//         console.table(results);
//     })
// }

module.exports = queries