# Employee Management System [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
The Employee Management System can be used to create an employee database from the command line.
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Sources](#sources)

## Installation
 1. Download repo
 3. Command `npm init`
 2. Command `npm i`
 4. Command `install inquirer`
 5. Command `npm i mysql2`
 6. Command `npm i console.table`
 7. command `npm install dotenv`
 8. Log in to mysql in the terminal using `mysql -u root -p`
 9. Enter your password > Enter.
 10. Use command `SOURCE db/schema.sql`
 11. Use command `USE employees_db;`
 12. Create a .env file at the root level that says `PASSWORD=[[your_password]]`
 12. Start application by using `npm start`
  
## Usage
Using the terminal command `npm start`, users will be able to create an employee management system using nodejs. The application will include a database for Departments, Roles, and Employees. Under Departments, users can enter in the differnt departments. Under Roles, users will be able to enter in the role, salary, and department. Under employees, users can enter in the first name, last name, role, department, and manager ID of the employee. Users can use a program, such as Mysql Workbench or Tables Plus to view their database in full. Or they can use the command line program to View All Departments, View All Roles, or View All Employees. Users will be able to add to each table as well as update employee roles.

In the future, I hope to include viewing all employees by department and roles. I also hope to be able to delete from the tables. 

The following video shows the functionality of the program:
[Link to Video]( https://drive.google.com/file/d/1ZlZVKNjnm2E9VKj8MPiZKfb16T2P037L/view)

## License
The MIT License

## Questions?

Contact Info:

Github profile: emmareimer

Email: emma@beinproximity.com

## Libraries/Languages
Nodejs, Inquirer NPM, Javascript, Mysql, Mysql2, Console.table, nodejs, dotenv