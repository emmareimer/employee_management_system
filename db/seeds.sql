INSERT INTO department (department_name)
VALUES ('Development'), ('Sales'), ('Accounting'), ('Support'), ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES ('Engineer', 100000, 1), ('Senior Engineer', 225000, 1), ('CFO', 350000, 3), ('Director', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Megan', 'Test', 1, 2), ('Emma', 'Reimer', 1, null), ('Josh', 'Freed', 4, 3), ('Geoff', 'Wood', 2, 2), ('Tim', 'Timmy', 3, null);