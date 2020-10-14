var inquirer = require("inquirer");   // we require the package 'inquirer'
var fs = require("fs");



inquirer
  .prompt([ 
    { type: "input",
      message: "title of Read Me?",
      name: "title"
    },

    {
        type: "input",
        message: "Please provide a short description of the project:",
        name: "description"
    },

    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install"
    },

        {type:"input",
        message: "What are the instructions for usage?",
        name: "usage"
    },

        {type: "list",
        message: "Select a license:",
        name: "license",
        choices: ["Apache-2.0", "MIT", "OSL-3.0", "Postgresql"]
    },
        {type: "input",
        message: "Enter any contributors: ",
        name: "contributors"
   },
        {type: "input",
        message: "How did you test this project? ",
        name: "test"
},
        {type: "input",
        message: "Enter email: ",
        name: "email"
},
        {type: "input",
        message: "enter github link",
        name: "github"
}

]).then(function(response) {
    console.log(response)
    var textForFile = "Title: " + response.title + "\n";
    textForFile  = textForFile  + "Description: " + response.description + "\n";
    textForFile = textForFile + "Install Steps: " + response.install + "\n";
    textForFile = textForFile + "Usage steps: " + response.usage + "\n";
    textForFile = textForFile + "License: " + response.license + "\n";
    textForFile = textForFile +  "Contributors: " + response.contributors + "\n";
    textForFile = textForFile +  "Tests: " + response.test + "\n";
    textForFile = textForFile +  "For further questions email me at: " + response.email + "\n";
    textForFile = textForFile +  "My github: " + response.github 


   
      fs.writeFile("readme.md", textForFile, function(err){
        if(err){
          return console.log(err);
        } 
         
         console.log("File written.");
        })


        // var tabcontents ={
        //   contents: [
        //     "Title",
        //     "Description",
        //     "Table of Contents",
        //     "Installation",
        //     "Usage",
        //     "License",
        //     "Contributing",
        //     "Tests",
        //     "Questions"
        //   ]
        // }
      });
