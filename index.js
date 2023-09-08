const inquirer = require('inquirer');

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            },
        ])
        .then((answer) => {
            // Based on the user's choice (answer.choice), call the corresponding function
            switch (answer.choice) {
                case 'View all departments':
                    // Implement the logic to view all departments
                    break;
                case 'View all roles':
                    // Implement the logic to view all roles
                    break;
                case 'View all employees':
                    // Implement the logic to view all employees
                    break;
                case 'Add a department':
                    // Implement the logic to add a department
                    break;
                case 'Add a role':
                    // Implement the logic to add a role
                    break;
                case 'Add an employee':
                    // Implement the logic to add an employee
                    break;
                case 'Update an employee role':
                    // Implement the logic to update an employee's role
                    break;
                case 'Exit':
                    // Exit the application
                    console.log('Goodbye!');
                    process.exit(0);
                    break;
            }
        });
}

// Call the main menu function to start your application
mainMenu();
