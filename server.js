// - Instructions for readme
//      1. Download repo
//      2. Npm i
//      3. Npm init
//      4. Npm install inquirer
//      5. Npm i mysql2
//      6. Npm i console.table
//      7. npm install dotenv 
//      8. Log in to mysql in the terminal using mysql -u root -p
//      9. Use command `SOURCE db/schema.sql`
//      10. Use command `USE employees_db;`

require('dotenv').config();
const connection = require('./config/connection');
const inquirer = require("inquirer");
const fs = require("fs");
const { exit } = require('process');
const cTable = require('console.table')

// - Call initial function after connecting 
connection.connect((error) => {
    if (error) throw error;
    showMenu();
  });

// - Iniital function - showMenu()
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
            exit();
          }
      });
  };

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

      console.log(`All Employees:`);
      console.table(response);
      });
    showMenu();
    };

// -------------------------------------------- ADD FUNCTIONS ---------------------------------------

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "question",
        name: "newDepartment",
        message:
          "What is the name of the new department?"
      }
    ])

    .then((answer) => {
      let sql = `INSERT INTO department (department_name) VALUES (?)`;

      connection.query(sql, answer.newDepartment, (error, response) => {
        if (error) throw error;
        console.log(`Department created successfully.`);
        viewDepartments();
      });
    });
};

    const addRole = () => {
      inquirer
        .prompt([
          {
            type: "question",
            name: "newRole",
            message:
              "What is the name of the new role?"
          },
          {
            type: "question",
            name: "newSalary",
            message: "What is the salary of this role?"
          },
          {
            type: "question",
            name: "departmentId",
            message: "What is the department ID?"
          }
        ])
    
        .then((answer) => {
          let sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;

          let updatedRole = [answer.newRole, answer.newSalary, answer.departmentId];

          connection.query(sql, updatedRole, (error) => {
            if (error) throw error;
            console.log(`Role created successfully.`);
            viewRoles();
          });
        });
    };

   const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "question",
          name: "firstName",
          message:
            "What is the first name of the employee?"
        },
        {
          type: "question",
          name: "lastName",
          message: "What is the last name of the employee?"
        },
        {
          type: "question",
          name: "roleId",
          message: "What is the employee's role ID?"
        },
        {
          type: "question",
          name: "managerId",
          message: "What is the employee's manager ID?"
        }
      ])
  
      .then((answer) => {
        let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

        let updatedEmployee = [answer.firstName, answer.lastName, answer.roleId, answer.managerId];

        connection.query(sql, updatedEmployee, (error) => {
          if (error) throw error;
          console.log(`Employee created successfully.`);
          viewEmployees();
        });
      });
  };

// -------------------------------------------- UPDATE FUNCTIONS ---------------------------------------

const updateEmployee = () => {

      inquirer
      .prompt([
        {
          name: 'chosenEmployee',
          type: 'input',
          message: 'What is the ID of the employee?',
        },
        {
          name: 'chosenRole',
          type: 'input',
          message: 'What is their new role ID?',
        }
      ])
          .then((answer) => {
            let sqls =`UPDATE employee SET employee.role_id = ? WHERE employee.id = ?`;

            let updatedEmployee = [answer.chosenRole, answer.chosenEmployee];
    
            connection.query(sqls, updatedEmployee, (error) => {
              if (error) throw error;
              console.log(`Employee updated successfully.`);
              viewEmployees();
            });
          });
        };
