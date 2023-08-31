const inquirer = require('inquirer');
const questions = require('./lib/questions.js')




const runInquirer = () => {
    inquirer.prompt(
       questions
    )
    .then((answers) => {
        switch (answers.value.name) {
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
}


let init = () => {
    runInquirer()
}

init();