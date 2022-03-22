INSERT INTO department (department_name)
VALUES ('Development'), ('Sales'), ('Support'), ('Leadership'), ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES ('Engineer', 100000, 1), ('Senior Engineer', 225000, 1), ('CFO', 350000, 3), ('Director', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Megan', 'Test', 1, null), ('Emma', 'Reimer', 1, 2), ('Josh', 'Freed', 1, 2), ('Geoff', 'Wood', 2, 2), ('Tim', 'Timmy', 4, null);