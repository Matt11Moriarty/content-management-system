INSERT INTO departments (id, name) VALUES
    (1, 'Human Resources'),
    (2, 'Finance'),
    (3, 'Marketing'),
    (4, 'Engineering');

INSERT INTO roles (id, title, salary, department_id) VALUES
    (1, 'HR Manager', 70000.00, 1),
    (2, 'Accountant', 50000.00, 2),
    (3, 'Marketing Specialist', 60000.00, 3),
    (4, 'Software Engineer', 80000.00, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
    (1, 'John', 'Doe', 1, 0), 
    (2, 'Jane', 'Smith', 2, 1),
    (3, 'Michael', 'Johnson', 3, 1),
    (4, 'Emily', 'Williams', 4, 0);
