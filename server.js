const inquirer = require('inquirer');
const questions = require('./lib/questions.js')




const runInquirer = () => {
    inquirer.prompt(
       questions
    )
    .then((answers) => {
        switch (answers.)
    })
}


let init = () => {
    runInquirer()
}

init();