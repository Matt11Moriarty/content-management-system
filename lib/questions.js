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
    }
]

module.exports = {
    mainQuestionSet
}