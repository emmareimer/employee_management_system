// - install mysql2. inquirer, console.table (render tables in our console) X
// - Initial prompt questions: X
//      view all departments, view all roles, view all employees X
//      add a department, add a role, add an employee, and update an employee role X
// - Choose to view all departments:
//      Displays a formatted table showing department names and department ids
// - Choose to view all roles
//      Display the job title, role id, the department that role belongs to, and the salary for that role

// - Instructions for readme
//      1. Download repo
//      2. Npm i
//      3. Npm init
//      4. Npm install inquirer
//      5. Npm i mysql2
//      6. Npm i console.table
//      7. npm install dotenv 
//      8. Log in to mysql in the terminal using mysql -u root -p
//      9. Source TODO
//      10. Use command `USE employees_db;`

require('dotenv').config();
const connection = require('./config/connection');
const inquirer = require("inquirer");
const fs = require("fs");

// - Create mysql schema for 3 tables - Departments, Role, Employee (create file) X
//      DONE
connection.connect((error) => {
    if (error) throw error;
    showMenu();
  });

// - Iniital function - showMenu() - inquirer for 3, 4 - call function at app start
const showMenu = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "menuChoice",
          message:
            "What would you like to do?",
          choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
          ],
        },
      ])

      .then((choice) => {
        const { menuChoice } = choice;
        if (menuChoice == "View all Departments") {
          viewDepartments();
        } else if (menuChoice == "View all Roles") {
          viewRoles();
        } else if (menuChoice == "View all Employees") {
            viewEmployees();
          } else if (menuChoice == "Add a Department") {
            addDepartment();
          } else if (menuChoice == "Add a Role") {
            addRole();
          } else if (menuChoice == "Add an Employee") {
            addEmployee();
          } else if (menuChoice == "Update an Employee Role") {
            updateEmployee();
          } else if (menuChoice == "Exit") {
            return;
          }
      });
  };

// - Based on choice - call another function
//      Create functions for each action viewDepartments, viewAllRoles, etc.
//      At the bottom of each function, showMenu();
//      clear console function??? 

// - Select queries - 
//      For all viewing functions
//      SELECT * FROM [[table_name]]
//      console.table

// -------------------------------------------- VIEW FUNCTIONS ---------------------------------------
    function viewDepartments() {
          const sql = `SELECT department.id AS id, 
                        department.department_name AS department 
                        FROM department`; 

          connection.query(sql, (err, response) => {
            if (err) throw err;
            console.log(`All Departments:`);
            console.table(response);
        });
        showMenu();
    };

    function viewRoles(){
      const sql = `SELECT roles.id AS id, 
                    roles.title AS title,
                    roles.salary AS salary,
                    roles.department_id AS department_id
                    FROM roles`; 

      connection.query(sql, (err, response) => {
      if (err) throw err;
      console.log(`All Roles:`);
      console.table(response);
      });
    showMenu();
    };

    function viewEmployees(){
      const sql = `SELECT employee.id AS id, 
                    employee.first_name AS first_name,
                    employee.last_name AS last_name,
                    employee.role_id AS role_id,
                    employee.manager_id AS manager_id
                    FROM employee`; 

      connection.query(sql, (err, response) => {
      if (err) throw err;

      // TODO: Remove (index)
      // const array = response
      // const transormed = array.reduce

      console.log(`All Employees:`);
      console.table(response);
      });
    showMenu();
    };

// -------------------------------------------- ADD FUNCTIONS ---------------------------------------
// - addDepartment, addRole, addEmployee
//      INSERT INTO [[table_name]] VALUES (list_of_values)

   function addDepartment(){
       console.log(4)

       showMenu();
   };

    function addRole(){
        console.log(5)

        showMenu();
    };

   function addEmployee(){
       console.log(6)

       showMenu();
   };

// -------------------------------------------- UPDATE FUNCTIONS ---------------------------------------
// - updateEmployeeRole
//      UPDATE employees SET role_id = newRoleID WHERE id=employeeId;

    function updateEmployee(){
        console.log(7)

        showMenu();
    };

