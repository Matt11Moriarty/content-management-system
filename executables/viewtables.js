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

    console.log('viewDepartments exectuted')
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
      });
}

viewDepartments();

const viewRoles = () => {
    console.log('viewRoles executed');
}

const viewEmployees = () => {
    console.log('viewEmployees executed');
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees
}