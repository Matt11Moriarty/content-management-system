const express = require('express');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');


const viewTables = require('./executables/viewtables.js');
const addData = require('./executables/adddata.js');
const updateData = require('./executables/updatedata.js');

const { viewDepartments, viewRoles, viewEmployees } = viewTables;
const { addDepartment, addRole, addEmployee } = addData;
const { updateEmployeeRole } = updateData;

const app = express();




const runInquirer = () => {
    inquirer.prompt(
       questions.mainQuestionSet
    )
    .then((answers) => {
        console.log(answers);
        switch (answers.userAction) {
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
        console.log('\n')
        runInquirer();
    })
}


let init = () => {
    runInquirer()
}

init();


