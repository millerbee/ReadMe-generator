// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  <h2>${data.title}</h2>

  ![npm collaborators](https://img.shields.io/npm/collaborators/inquirer?style=flat-square)


 
    
  
## Description
  ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributors)
- [Tests](#tests)
- [Questions](#questions)



## Installation
${data.install}


## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributors}

## Tests
${data.tests}

## Questions
<p> Questions or comments? <br>email me at: ${data.email}</p>
<br>
:octocat: My github: [${data.username}](https://github.com/${data.username})
<br>
`;
}

module.exports = generateMarkdown;
