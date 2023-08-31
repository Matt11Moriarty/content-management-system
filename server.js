const inquirer = require('inquirer');
const questions = require('./lib/questions.js')

const viewTables = require('./executables/viewtables.js')
const addData = require('./executables/adddata.js')
const updateData = require('./executables/updatedata.js')

const { viewDepartments, viewRoles, viewEmployees } = viewTables;
const { addDepartment, addRole, addEmployee } = addData;
const { updateEmployeeRole } = updateData;


const runInquirer = () => {
    inquirer.prompt(
       questions
    )
    .then((answers) => {
        switch (answers.userAction.name) {
            case 'viewDepts':
                viewDepartments();
                break;
            case 'viewRoles':
                viewRoles();
                break;
            case 'viewEmps':
                viewEmployees();
                break;
            case 'addDept':
                addDepartment();
                break;
            case 'addRole':
                addRole();
                break;
            case 'addEmp':
                addEmployee();
                break;
            case 'updateEmpRole':
                updateEmployeeRole();
                break;
        }
    })
    .then(() => {
        runInquirer();
    })
}


let init = () => {
    runInquirer()
}

init();


