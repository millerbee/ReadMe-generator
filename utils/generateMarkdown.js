// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  <h2>${data.title}</h2>

  ![npm collaborators](https://img.shields.io/npm/collaborators/inquirer?style=flat-square)


 
    
  
## Description
  ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributors)
- [Tests](#tests)
- [Questions](#questions)



## Installation
${data.installation}


## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.ontributors}

## Tests
${data.tests}

## Questions
<p> Questions or comments? please email at: ${data.email}</p>
<br>
<p> My github: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
