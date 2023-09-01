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

const addDepartment = () => {
    console.log('addDepartment executed');
    db.query(`INSERT INT`)
}

const addRole = () => {
    console.log('addRole executed');
}

const addEmployee = () => {
    console.log('addEmployee exectuted');
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}