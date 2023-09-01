const utils = require('./utils');
//Cant get this to work as modularized function from utils
let departmentNames;

utils.roleDeptChoices()
  .then((deptNames) => {
    departmentNames = deptNames;
  })


const mainQuestionSet = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "userAction",
        choices: [
            {
                name: "viewDepts",
                message: "View all departments"
            },
            {
                name: "viewRoles",
                message: "View all roles"
            },
            {
                name: "viewEmps",
                message: "View all employees"
            },
            {
                name: "addDept",
                message: "Add a department"
            },
            {
                name: "addRole",
                message: "Add a role"
            },
            {
                name: "addEmp",
                message: "Add an employee"
            },
            {
                name: "updateEmpRole",
                message: "Update an employee role"
            }
        ]
    },
    //addDept questions
    {
        name: "deptName",
        type: "input",
        message: "What would you like the department name to be?",
        when: (answers) => answers.userAction === "addDept"
    },
    //addRole questions
    {
        name: "roleName",
        type: "input",
        message: "What would you like the role name to be?",
        when: (answers) => answers.userAction === "addRole"
    },
    {
        name: "roleSalary",
        type: "input",
        message: "What would you like the roles salary to be?",
        when: (answers) => answers.userAction === "addRole"
    },
    {
        name: "roleDept",
        type: "list",
        choices: departmentNames, //WHYYYYYY WONT IT WORK
        message: "What would you like the roles department to be?",
        when: (answers) => answers.userAction === "addRole"
    },
    //addEmp questions
    {
        name: "empFirstName",
        type: "input",
        message: "What is the new employee's first name?",
        when: (answers) => answers.userAction === "addEmp"
    },
    {
        name: "empLastName",
        type: "input",
        message: "What is the new employee's last name?",
        when: (answers) => answers.userAction === "addEmp"
    },
    {
        name: "empRole",
        type: "input",
        message: "What is the new employee's role?",
        when: (answers) => answers.userAction === "addEmp"
    },
    {
        name: "empManager",
        type: "input",
        message: "What is the new employee's manager?",
        when: (answers) => answers.userAction === "addEmp"
    },
    //updateEmpRole questions
    {
        name: "selectEmployee",
        type: "list",
        choices: [

        ],
        message: "Which employee would you like to update?",
        when: (answers) => answers.userAction === "updateEmpRole"
    },
    {
        name: "selectEmployeesRole",
        type: "list",
        choices: [

        ],
        message: "What role would you like them to be changed to?",
        when: (answers) => answers.userAction === "updateEmpRole"
    },

]

module.exports = {
    mainQuestionSet
}