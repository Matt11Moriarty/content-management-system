const questions = [
    //view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    {
        type: "list",
        message: "What would you like to do?",
        name: "userAction",
        choices: [
            {
                name: "View all departments",
                value: {
                    name: "viewDepts"
                } 
            },
            {
                name: "View all roles",
                value: {
                    name: "viewRoles"
                } 
            },
            {
                name: "View all employees",
                value: {
                    name: "viewEmps"
                } 
            },
            {
                name: "Add a department",
                value: {
                    name: "addDept"
                } 
            },
            {
                name: "Add a role",
                value: {
                    name: "addRole"
                } 
            },
            {
                name: "Add an employee",
                value: {
                    name: "addEmp"
                } 
            },
            {
                name: "Update an employee role",
                value: {
                    name: "updateEmpRole"
                } 
            }
        ]
    }
]

module.exports = questions; 