// function to generate markdown for README
const licenses = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  'GPL v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
};

function generateMarkdown(data) {
  return `
    
  # ${data.title}

  ## Contents

  1. [Desciption](#description)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Usage](#usage)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ## Description

    ${data.description}
  
  
  ## Installation:

    ${data.installation}

  ## Usage

    ${data.usage}

  ## License

    License used for this project - ${licenses[data.license]}
  
  ## Contributing:
    
    ${data.contributing}
  
  ## Tests:

    ${data.test}
  
  ## Questions: 

    Please feel free to contact me on my GitHub for further information:
    [https://www.github.com/${data.github}]
    Email: ${data.email}
    
  `;
}

module.exports = generateMarkdown;