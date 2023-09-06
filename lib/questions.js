// const viewTables = require('./executables/viewtables.js');
// const addData = require('./executables/adddata.js');
// const updateData = require('./executables/updatedata.js');

// const { viewDepartments, viewRoles, viewEmployees } = viewTables;
// const { addDepartment, addRole, addEmployee } = addData;
// const { updateEmployeeRole } = updateData;

const queries = require('../executables/queries')
const questions = {
    userAction: () => {
        return [
            {
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    {name: 'View all departments', value: 'viewDepts'},
                    {name: 'View all roles', value: 'viewRoles'},
                    {name: 'View all employees', value: 'viewEmps'},
                    {name: 'Add a department', value: 'addDept'},
                    {name: 'Add a role', value: 'addRole'},
                    {name: 'Add an employee', value: 'addEmp'},
                    {name: 'Update an employee role', value: 'updateEmpRole'}
                ]   
            }
        ]
    },
    addDept: () => {
        return {
            name: 'deptName',
            type: 'input',
            message: 'What would you like the department name to be?'
        }

    },
    addRole: async () => {
        let deptChoices = await queries.allDepartmentsArray()
        deptChoices = deptChoices.map((department) => {
            return {name: department.name, value: department.id}
        })

        return [
            {
                name: 'roleName',
                type: 'input',
                message: 'What would you like the role to be named?'
            },
            {
                name: 'roleSalary',
                type: 'input',
                message: 'What will the salary be?'
                //add validation for number here
            },
            {
                name: 'department_id',
                type: 'list',
                message: 'Which department will this role belong to?',
                choices: deptChoices
            }
        ]
    }
}
module.exports = questions

//_______________________________
// const mainQuestionSet = [
//     {
//         type: "list",
//         message: "What would you like to do?",
//         name: "userAction",
//         choices: [
//             {
//                 value: "viewDepts",
//                 name: "View all departments"
//             },
//             {
//                 value: "viewRoles",
//                 name: "View all roles"
//             },
//             {
//                 value: "viewEmps",
//                 name: "View all employees"
//             },
//             {
//                 value: "addDept",
//                 name: "Add a department"
//             },
//             {
//                 value: "addRole",
//                 name: "Add a role"
//             },
//             {
//                 value: "addEmp",
//                 name: "Add an employee"
//             },
//             {
//                 value: "updateEmpRole",
//                 name: "Update an employee role"
//             }
//         ]
//     },
//     //addDept questions
//     {
//         name: "deptName",
//         type: "input",
//         message: "What would you like the department name to be?",
//         when: (answers) => answers.userAction === "addDept"
//     },
//     //addRole questions
//     {
//         name: "roleName",
//         type: "input",
//         message: "What would you like the role name to be?",
//         when: (answers) => answers.userAction === "addRole"
//     },
//     {
//         name: "roleSalary",
//         type: "input",
//         message: "What would you like the roles salary to be?",
//         when: (answers) => answers.userAction === "addRole"
//     },
//     {
//         name: "roleDept",
//         type: "list",
//         choices: departmentNames, //WHYYYYYY WONT IT WORK
//         message: "What would you like the roles department to be?",
//         when: (answers) => answers.userAction === "addRole"
//     },
//     //addEmp questions
//     {
//         name: "empFirstName",
//         type: "input",
//         message: "What is the new employee's first name?",
//         when: (answers) => answers.userAction === "addEmp"
//     },
//     {
//         name: "empLastName",
//         type: "input",
//         message: "What is the new employee's last name?",
//         when: (answers) => answers.userAction === "addEmp"
//     },
//     {
//         name: "empRole",
//         type: "input",
//         message: "What is the new employee's role?",
//         when: (answers) => answers.userAction === "addEmp"
//     },
//     {
//         name: "empManager",
//         type: "input",
//         message: "What is the new employee's manager?",
//         when: (answers) => answers.userAction === "addEmp"
//     },
//     //updateEmpRole questions
//     {
//         name: "selectEmployee",
//         type: "list",
//         choices: [

//         ],
//         message: "Which employee would you like to update?",
//         when: (answers) => answers.userAction === "updateEmpRole"
//     },
//     {
//         name: "selectEmployeesRole",
//         type: "list",
//         choices: [

//         ],
//         message: "What role would you like them to be changed to?",
//         when: (answers) => answers.userAction === "updateEmpRole"
//     },

// ]

