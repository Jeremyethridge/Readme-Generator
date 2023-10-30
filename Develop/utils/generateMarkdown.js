
function renderLicenseBadge(license) {}


function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) { 

  let markdown = `
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  [Installation](https://github.com/${data.github}#Installation)\n\n
  [Usage Of](https://github.com/${data.github}#Usage-Of)\n\n
  [How to Contribute](https://github.com/${data.github}#How-to-Contribute)\n\n
  [Testing](https://github.com/${data.github}#Testing)\n\n
  [License](https://github.com/${data.github}#License)\n\n
  [Questions](https://github.com/${data.github}#Questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## How to Contribute
  
  ${data.contribution}
  
  ## Testing
  
  ${data.test}  
  
  ## License
  
  This repository is released under the license of: [${data.license}](https://opensource.org/licenses/${data.license})

  ## Questions

  If have any questions about this application feel free to contact me:

  Github: [${data.github}](https://github.com/${data.github})\n\n Email: ${data.email}

  `;
  return markdown;
} 

module.exports = generateMarkdown;
