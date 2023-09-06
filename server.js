const express = require('express');
const inquirer = require('inquirer');
const questions = require('./lib/questions');

//testing
// const utils = require('./lib/utils.js')

const queries = require('./executables/queries')
// const viewTables = require('./executables/viewtables.js');
// const addData = require('./executables/adddata.js');
// const updateData = require('./executables/updatedata.js');

// const { viewDepartments, viewRoles, viewEmployees } = viewTables;
// const { addDepartment, addRole, addEmployee } = addData;
// const { updateEmployeeRole } = updateData;

const app = express();


async function Start() {
    const {action} = await inquirer.prompt(questions.userAction())

    switch (action) {
        case 'viewDepts':
            queries.viewDepartmentsTable();
            break;
        case 'viewRoles':
            queries.viewRolesTable();
            break;
        case 'viewEmps':
            queries.viewEmployeesTable();
            break;
        case 'addDept':
            const addDeptQuestions = await questions.addDept();
            const addDeptAnswers = await inquirer.prompt(addDeptQuestions)
            const addNewDepartment = await queries.addDepartment(addDeptAnswers);
            console.log('New department added')
            break;
        case 'addRole':
            const addRoleQuestions = await questions.addRole();
            const addRoleanswers = await inquirer.prompt(addRoleQuestions);
            const addNewRole = await queries.addRole(addRoleanswers);
            console.log('New role added')
            break;
        case 'addEmp':
            const addEmpQuestions = await questions.addEmp();
    }   

}
//---------------------------------------
// const runInquirer = () => {
//     inquirer.prompt(
//        questions.mainQuestionSet
//     )
//     .then((answers) => {
//         console.log(answers);
//         switch (answers.userAction) {
//             case 'viewDepts':
//                 viewDepartments();
//                 break;
//             case 'viewRoles':
//                 viewRoles();
//                 break;
//             case 'viewEmps':
//                 viewEmployees();
//                 break;
//             case 'addDept':
//                 addDepartment(answers);
//                 break;
//             case 'addRole':
//                 addRole(answers);
//                 break;
//             case 'addEmp':
//                 addEmployee();
//                 break;
//             case 'updateEmpRole':
//                 updateEmployeeRole();
//                 break;
//         }
//     })
//     .then(() => {
//         // console.log('\n')
//         // runInquirer();
//     })
// }


// let init = () => {
//     runInquirer()
// }

// init();
Start();

