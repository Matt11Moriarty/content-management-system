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
            console.log('\n')
            console.table(results);
        })
    },
    viewRolesTable: async () => {
        db.query(`
        SELECT r.title, r.id AS role_id, d.name AS department_name, r.salary
        FROM roles r 
        JOIN departments d ON r.department_id = d.id        
        `, function (err, results) {
            console.log('\n');
            console.table(results);
        })
    },
    viewEmployeesTable: async () => {
        db.query(`
        SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS job_title, d.name AS department_name, r.salary, e2.first_name AS manager
        FROM employees e 
        JOIN roles r ON e.role_id = r.id
        JOIN departments d ON r.department_id = d.id
        JOIN employees e2 ON e.manager_id = e2.id
        `, function (err, results) {
            console.log('\n');
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
    updateEmp: async (answers) => {
        const sql = `UPDATE employees SET role_id = ? WHERE id = ?`
        const input = [answers.roleChoice, answers.empChoice]

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


module.exports = queries