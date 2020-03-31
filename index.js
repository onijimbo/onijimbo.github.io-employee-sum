const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRender');

const employees = [];

function projectPrompt(){
    inquirer.prompt({
        type: 'list',
        message: 'who is on your project?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'That is all']
    })
        .then(function(response){
            
            let employee;
            switch(response.role){
                case 'Manager':
                    emInfo('Manager');
                    break;
                case 'Engineer':
                    emInfo('Engineer');
                    break; 
                case 'Intern':
                    emInfo('Intern');
                    break;
                default: 
                    writeRenderHTML();
                    break;
            };
        });
};

projectPrompt();

function emInfo(role){
    const employeeInfo = {
        'Manager': 'office',
        'Engineer': 'Github',
        'Intern': 'School'
    };
    inquirer.prompt([{
        type: 'input',
        message: 'Enter thier name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter their id',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter their email',
        name: 'email'
    },
    {
        type: 'input',
        message: `Enter ${employeeInfo[role]}`,
        name: 'moreInfo'
    }
])
    .then(function(responses){
        if(role === 'Manager'){
            employee = new Manager(responses.name, responses.id, responses.email, responses.moreInfo);

        }
        else if(role === 'Engineer'){
            employee = new Engineer(responses.name, responses.id, responses.email, responses.moreInfo)
        }
        else if(role === 'Intern'){
            employee = new Intern(responses.name, responses.id , responses.email, responses.moreInfo)
        };
        employees.push(employee);
        projectPrompt();
    });
};

function writeRenderHTML(){
    const employeesHTML = render(employees);

    if(!fs.existsSync('./output')){
        fs.mkdirSync('./output');
    };

    fs.writeFile(outputPath, employeesHTML, (err) => {
        if(err){
            throw err;
        };
        console.log('Generating html to ./output/team.html');
    });
};
