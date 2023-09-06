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
        let deptChoices = await queries.allDepartmentsArray();
        deptChoices = deptChoices.map((department) => {
            return {name: department.name, value: department.id};
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
    },
    addEmp: async () => {
        let roleChoices = await queries.allRolesArray();
        roleChoices = roleChoices.map((role) => {
            return {name: role.title, value: role.id};
        })

        let managerChoices = await queries.allEmployeesArray();
        managerChoices = managerChoices.map((manager) => {
            return {name: manager.first_name, value: manager.id}
        })
        return [
            {
                name: 'empFirstName',
                type: 'input',
                message: 'What is the employees first name?'
            },
            {
                name: 'empLastName',
                type: 'input',
                message: 'What is the employees last name?'
            },
            {
                name: 'empRole',
                type: 'list',
                message: 'What is the employees role?',
                choices: roleChoices
            },
            {
                name: 'empManager',
                type: 'list',
                message: 'Who is the employees manager?',
                choices: managerChoices
            }            
        ]
    },
    updateEmpRole: async () => {
        let empChoices = await queries.allEmployeesArray()
        empChoices = await empChoices.map((employee) => {
            return {name: employee.first_name, value: employee.id}
        })
        let roleChoices = await queries.allRolesArray();
        roleChoices = roleChoices.map((role) => {
            return {name: role.title, value: role.id};
        })
        return [
            {
                name: 'empChoice',
                type: 'list',
                message: 'Which employee would you like to update?',
                choices: empChoices
            },
            {
                name: 'roleChoice',
                type: 'list',
                message: 'What role would you like them updated to?',
                choices: roleChoices
            }
        ]
    }
}
module.exports = questions