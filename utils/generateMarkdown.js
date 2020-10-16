// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  <h1>${data.title}</h1>

  ![badge](https://img.shields.io/badge/author-millerbee-blue)
  ![badge](https://img.shields.io/badge/-node%20js-orange)
  ![badge](https://img.shields.io/badge/-Inquirer-green)
  
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
<p>Feel free to email me with questions or comments and take a look at my github!</p>
<br>
<li><a href="mailto:${data.email}" taget="_blank">Email</a</li>
<p></p>
 <li><a href="https://github.com/${data.username}/" target="_blank">GitHub</a></li>
<br>

`;
}

module.exports = generateMarkdown;
