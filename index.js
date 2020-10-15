const inquirer = require("inquirer");   // we require the package 'inquirer'
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown.js');

//const questions =
function getInfo(){
    return inquirer.prompt([

 
    { type: "input",
      message: "title of Read Me?",
      name: "title",
    },

    {
        type: "input",
        message: "Please provide a short description of the project:",
        name: "description",
    },

    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install",
    },

        {type:"input",
        message: "What are the instructions for usage?",
        name: "usage",
    },

        {type: "list",
        message: "Select a license:",
        name: "license",
        choices: ["Apache-2.0", "MIT", "OSL-3.0", "Postgresql"]
    },
        {type: "input",
        message: "Enter any contributors: ",
        name: "contributors",
   },
        {type: "input",
        message: "How did you test this project? ",
        name: "tests",
},
        {type: "input",
        message: "Enter email: ",
        name: "email",
},
        {type: "input",
        message: "enter github username",
        name: "username",
}
]);
} 

  
 async function init() {      //(38-ins-async-await activity)
  try {
      // Ask questions
      const data = await getInfo();
      const generateFile = generateMarkdown(data);
      // Write new README.md 
        await writeFileAsync('readme.md', generateFile);
    //    console.log('Successfully wrote to README.md');
    }  catch(err) {
      console.log(err);
   }
}


 init();  //why won't this work??!! #$%#$%#$