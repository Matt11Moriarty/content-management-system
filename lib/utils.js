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


const roleDeptChoices = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT name FROM departments', function (err, results) {
            if (err) {
                reject(err);
            } else {
                const deptNames = results.map((row) => row.name);
                resolve(deptNames);
            }
        });
    });
};




module.exports = {
    roleDeptChoices,
}