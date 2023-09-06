const express = require('express');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const queries = require('./executables/queries')

const app = express();


async function Start() {
    const {action} = await inquirer.prompt(questions.userAction());

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
            const addDeptAnswers = await inquirer.prompt(addDeptQuestions);
            const addNewDepartment = await queries.addDepartment(addDeptAnswers);
            console.log('New department added');
            break;
        case 'addRole':
            const addRoleQuestions = await questions.addRole();
            const addRoleanswers = await inquirer.prompt(addRoleQuestions);
            const addNewRole = await queries.addRole(addRoleanswers);
            console.log('New role added');
            break;
        case 'addEmp':
            const addEmpQuestions = await questions.addEmp();
            const addEmpAnswers = await inquirer.prompt(addEmpQuestions);
            const addNewEmployee = await queries.addEmp(addEmpAnswers);
            console.log('New employee added');
            break;
        case 'updateEmpRole':
            const updateEmpQuestions = await questions.updateEmpRole();
            const updateEmpAnswers = await inquirer.prompt(updateEmpQuestions);
            const updateEmployee = await queries.updateEmp(updateEmpAnswers);
            console.log('Employee role updated')
   } 
   Start();
}

Start();